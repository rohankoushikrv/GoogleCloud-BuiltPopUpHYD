# backend/app.py

"""Simple Flask API for Café Companion backend.

Provides endpoints for:
- Menu CRUD (staff)
- Menu read (public)
- Order creation and status updates
- Wait estimate calculation
- Gemini recommendation integration (stub)

The API is intended to be deployed to Cloud Run.
"""

from flask import Flask, request, jsonify
from datetime import datetime
import os
import uuid

app = Flask(__name__)

# In‑memory placeholders (replace with Firestore in production)
MENU = []  # list of dicts
ORDERS = {}

# Helper functions
def find_menu_item(item_id):
    return next((i for i in MENU if i["id"] == item_id), None)

def calculate_wait_estimate():
    # Simple heuristic: sum of preparation_time of all active orders + average prep time of new order
    active_orders = [o for o in ORDERS.values() if o["status"] in {"received", "preparing"}]
    total_prep = sum(o.get("estimated_prep_seconds", 0) for o in active_orders)
    avg_prep = total_prep // max(len(active_orders), 1)
    # Return a range +/- 20% as minutes
    minutes = avg_prep // 60
    low = max(1, int(minutes * 0.8))
    high = int(minutes * 1.2) + 1
    return {"low": low, "high": high}

# ------------------- Menu Endpoints -------------------

@app.route('/api/menu', methods=['GET'])
def get_menu():
    return jsonify(MENU)

@app.route('/api/menu', methods=['POST'])
def add_menu_item():
    # Expected JSON fields: name, description, price_cents, category, availability, options, dietary_labels, prep_seconds
    data = request.json
    item = {
        "id": str(uuid.uuid4()),
        "name": data.get("name"),
        "description": data.get("description"),
        "price_cents": data.get("price_cents"),
        "category": data.get("category"),
        "availability": data.get("availability", True),
        "options": data.get("options", []),
        "dietary_labels": data.get("dietary_labels", []),
        "prep_seconds": data.get("prep_seconds", 300),
    }
    MENU.append(item)
    return jsonify(item), 201

@app.route('/api/menu/<item_id>', methods=['PATCH'])
def update_menu_item(item_id):
    item = find_menu_item(item_id)
    if not item:
        return jsonify({"error": "Item not found"}), 404
    data = request.json
    # Update mutable fields only
    for field in ["name", "description", "price_cents", "category", "availability", "options", "dietary_labels", "prep_seconds"]:
        if field in data:
            item[field] = data[field]
    return jsonify(item)

# ------------------- Order Endpoints -------------------

@app.route('/api/orders', methods=['POST'])
def create_order():
    data = request.json
    # data should contain "items": [{"id": <menu_id>, "options": {...}}]
    order_items = []
    total_cents = 0
    for entry in data.get("items", []):
        menu_item = find_menu_item(entry.get("id"))
        if not menu_item or not menu_item.get("availability"):
            return jsonify({"error": f"Item {entry.get('id')} unavailable"}), 400
        # Simple option validation – assume options are a dict of name:choice and always valid for demo
        order_items.append({
            "id": menu_item["id"],
            "options": entry.get("options", {}),
            "price_cents": menu_item["price_cents"]
        })
        total_cents += menu_item["price_cents"]
    order_ref = str(uuid.uuid4())[:8]
    now = datetime.utcnow().isoformat() + "Z"
    est = calculate_wait_estimate()
    order = {
        "reference": order_ref,
        "items": order_items,
        "total_cents": total_cents,
        "status": "received",
        "created_at": now,
        "status_history": {"received": now},
        "wait_estimate": est,
        "estimated_prep_seconds": (est["low"] + est["high"]) * 60 // 2,
    }
    ORDERS[order_ref] = order
    return jsonify(order), 201

@app.route('/api/orders/<ref>', methods=['GET'])
def get_order(ref):
    order = ORDERS.get(ref)
    if not order:
        return jsonify({"error": "Order not found"}), 404
    return jsonify(order)

@app.route('/api/orders/<ref>/status', methods=['PATCH'])
def update_order_status(ref):
    order = ORDERS.get(ref)
    if not order:
        return jsonify({"error": "Order not found"}), 404
    new_status = request.json.get("status")
    if new_status not in {"received", "preparing", "ready", "cancelled"}:
        return jsonify({"error": "Invalid status"}), 400
    order["status"] = new_status
    ts = datetime.utcnow().isoformat() + "Z"
    order["status_history"][new_status] = ts
    # Re‑calculate wait for subsequent orders (simplified)
    return jsonify(order)

# ------------------- Gemini Recommendation Stub -------------------

@app.route('/api/recommend', methods=['POST'])
def recommend():
    # Expects {"preferences": "text"}
    # In real implementation, call Vertex AI Gemini with menu data as grounding.
    # Here we return the first available item as a placeholder.
    prefs = request.json.get("preferences", "")
    available = [i for i in MENU if i.get("availability")]
    if not available:
        return jsonify({"error": "No items available"}), 400
    suggestion = available[0]
    return jsonify({
        "suggestion": suggestion,
        "reason": f"Matches general preference '{prefs}'."
    })

if __name__ == '__main__':
    port = int(os.getenv('PORT', 8080))
    app.run(host='0.0.0.0', port=port, debug=True)
