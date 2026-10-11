const menuItems = [
  {
    id: "honey-oat",
    name: "Honey oat latte",
    category: "Coffee",
    price: 575,
    description: "Double espresso, silky oat milk, and a little wildflower honey.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=760&q=82",
    badge: "A little favorite",
    badgeType: "popular",
    tags: ["Warm", "Oat milk"],
    preferences: ["cozy", "sweet", "honey", "oat", "warm", "coffee", "caffeine", "latte"],
    prep: 5,
    options: [
      { label: "Size", choices: [{ name: "Regular", extra: 0 }, { name: "A little bigger", extra: 75 }] },
      { label: "Milk", choices: [{ name: "Oat milk", extra: 0 }, { name: "Whole milk", extra: 0 }, { name: "Almond milk", extra: 50 }] },
      { label: "Make it", choices: [{ name: "Just right", extra: 0 }, { name: "Less sweet", extra: 0 }, { name: "Extra shot", extra: 100 }] }
    ]
  },
  {
    id: "iced-matcha",
    name: "Iced garden matcha",
    category: "Tea",
    price: 625,
    description: "Bright ceremonial matcha, oat milk, and a slow-melting cloud of ice.",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=760&q=82",
    badge: "Green & lovely",
    tags: ["Iced", "Plant-based"],
    preferences: ["iced", "cool", "matcha", "green", "not coffee", "tea", "oat", "less sweet"],
    prep: 4,
    options: [
      { label: "Size", choices: [{ name: "Regular", extra: 0 }, { name: "A little bigger", extra: 75 }] },
      { label: "Milk", choices: [{ name: "Oat milk", extra: 0 }, { name: "Whole milk", extra: 0 }, { name: "Almond milk", extra: 50 }] },
      { label: "Make it", choices: [{ name: "Just right", extra: 0 }, { name: "Less sweet", extra: 0 }, { name: "No sweetener", extra: 0 }] }
    ]
  },
  {
    id: "maple-cold-brew",
    name: "Maple cloud cold brew",
    category: "Coffee",
    price: 595,
    description: "Slow-steeped coffee, a kiss of maple, and a soft cream cap.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=760&q=82",
    badge: "Slow-steeped",
    tags: ["Iced", "House favorite"],
    preferences: ["iced", "cold", "coffee", "maple", "sweet", "caffeine", "cold brew"],
    prep: 3,
    options: [
      { label: "Size", choices: [{ name: "Regular", extra: 0 }, { name: "A little bigger", extra: 75 }] },
      { label: "Make it", choices: [{ name: "Maple cloud", extra: 0 }, { name: "No cream", extra: 0 }, { name: "Less sweet", extra: 0 }] }
    ]
  },
  {
    id: "cardamom-bun",
    name: "Cardamom morning bun",
    category: "Food",
    price: 450,
    description: "Flaky, buttery layers with fragrant cardamom sugar and a crisp edge.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=760&q=82",
    badge: "Baked this morning",
    badgeType: "popular",
    tags: ["Fresh baked", "Vegetarian"],
    preferences: ["cozy", "treat", "sweet", "pastry", "baked", "snack", "under $6", "no caffeine"],
    prep: 2,
    options: [{ label: "Warm it up?", choices: [{ name: "Toasty please", extra: 0 }, { name: "As it is", extra: 0 }] }]
  },
  {
    id: "vanilla-tonic",
    name: "Vanilla espresso tonic",
    category: "Coffee",
    price: 610,
    description: "A bright double espresso over sparkling tonic with real vanilla.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=760&q=82&sat=-22",
    badge: "A bright idea",
    tags: ["Iced", "A little sparkle"],
    preferences: ["iced", "refreshing", "sparkling", "coffee", "not too sweet", "caffeine", "tonic"],
    prep: 4,
    options: [{ label: "Make it", choices: [{ name: "Vanilla", extra: 0 }, { name: "A little less sweet", extra: 0 }, { name: "Extra shot", extra: 100 }] }]
  },
  {
    id: "berry-toast",
    name: "Berry & ricotta toast",
    category: "Food",
    price: 850,
    description: "Whipped local ricotta, bright berries, and honey on seeded sourdough.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=760&q=82",
    badge: "A sunny plate",
    tags: ["Made fresh", "Vegetarian"],
    preferences: ["breakfast", "savory", "toast", "food", "berry", "hungry", "vegetarian"],
    prep: 7,
    options: [{ label: "A little extra", choices: [{ name: "Just as it is", extra: 0 }, { name: "Add an extra drizzle", extra: 50 }] }]
  },
  {
    id: "chai",
    name: "Brown sugar chai",
    category: "Tea",
    price: 550,
    description: "Our slow-simmered spice blend with your choice of steamed milk.",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=760&q=82",
    badge: "A cozy classic",
    tags: ["Warm", "House-made"],
    preferences: ["cozy", "warm", "spiced", "chai", "tea", "sweet", "no coffee", "caffeine"],
    prep: 5,
    options: [
      { label: "Milk", choices: [{ name: "Oat milk", extra: 0 }, { name: "Whole milk", extra: 0 }, { name: "Almond milk", extra: 50 }] },
      { label: "Make it", choices: [{ name: "Just right", extra: 0 }, { name: "Less sweet", extra: 0 }] }
    ]
  },
  {
    id: "lemon-loaf",
    name: "Little lemon loaf",
    category: "Food",
    price: 395,
    description: "Soft lemon-scented cake with a delicate, not-too-sweet glaze.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=760&q=82",
    badge: "A little sunshine",
    tags: ["Fresh baked", "Vegetarian"],
    preferences: ["treat", "sweet", "cake", "lemon", "snack", "under $6", "no caffeine", "dessert"],
    prep: 2,
    options: [{ label: "A little extra", choices: [{ name: "Just as it is", extra: 0 }, { name: "Warm it up", extra: 0 }] }]
  }
];

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const storageKey = "sunday-supply-demo-v1";
const state = {
  category: "All",
  query: "",
  cart: loadCart(),
  activeItem: null,
  toastTimer: null
};

const menuGrid = document.querySelector("#menu-grid");
const companionResponse = document.querySelector("#companion-response");
const cartDrawer = document.querySelector("#cart-drawer");
const cartBackdrop = document.querySelector("#cart-backdrop");
const modalBackdrop = document.querySelector("#modal-backdrop");
const dialogContent = document.querySelector("#dialog-content");
const toast = document.querySelector("#toast");

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(saved) ? saved.filter((entry) =>
      entry && menuItems.some((item) => item.id === entry.id) &&
      Number.isInteger(entry.quantity) && entry.quantity > 0 &&
      Number.isInteger(entry.unitPrice) && Array.isArray(entry.options)
    ) : [];
  } catch (error) {
    console.warn("Could not restore the demo bag from this browser.", error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state.cart));
  } catch (error) {
    console.warn("Could not save the demo bag in this browser.", error);
    showToast("Your bag is available for this visit, but couldn’t be saved.");
  }
}

function formatPrice(cents) {
  return currency.format(cents / 100);
}

function renderMenu() {
  const query = state.query.trim().toLocaleLowerCase();
  const filtered = menuItems.filter((item) => {
    const categoryMatches = state.category === "All" || item.category === state.category;
    const searchable = `${item.name} ${item.description} ${item.category} ${item.tags.join(" ")}`.toLocaleLowerCase();
    return categoryMatches && (!query || searchable.includes(query));
  });

  menuGrid.innerHTML = filtered.map((item) => `
    <article class="menu-card">
      <div class="menu-card-image-wrap" data-action="details" data-id="${item.id}" tabindex="0" role="button" aria-label="Customize ${item.name}">
        <img class="menu-card-image" src="${item.image}" alt="${item.name}" loading="lazy" />
        <span class="menu-badge ${item.badgeType || ""}">${item.badge}</span>
        <button class="quick-add" type="button" data-action="quick-add" data-id="${item.id}" aria-label="Quick add ${item.name}">+</button>
      </div>
      <div class="menu-card-copy">
        <div class="menu-card-topline"><h3>${item.name}</h3><span class="menu-card-price">${formatPrice(item.price)}</span></div>
        <p>${item.description}</p>
        <div class="menu-tags">${item.tags.slice(0, 2).map((tag) => `<span class="menu-tag">${tag}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
  document.querySelector("#empty-menu").classList.toggle("hidden", filtered.length > 0);
}

function getDefaultOptions(item) {
  return item.options.map((group) => group.choices[0]);
}

function getSelectedOptions(form, item) {
  return item.options.map((group, index) => {
    const selected = form.querySelector(`[name="option-${index}"]:checked`);
    return group.choices.find((choice) => choice.name === selected.value) || group.choices[0];
  });
}

function getUnitPrice(item, options) {
  return item.price + options.reduce((sum, option) => sum + option.extra, 0);
}

function openItem(item) {
  state.activeItem = item;
  const defaultOptions = getDefaultOptions(item);
  dialogContent.innerHTML = `
    <form class="dialog-product" id="item-form">
      <img class="dialog-product-image" src="${item.image}" alt="${item.name}" />
      <div class="dialog-product-copy">
        <div class="eyebrow"><span class="eyebrow-line"></span> MADE FRESH FOR YOU</div>
        <h2 id="dialog-title">${item.name}</h2>
        <p>${item.description}</p>
        <div class="dialog-price" id="dialog-price">${formatPrice(getUnitPrice(item, defaultOptions))}</div>
        ${item.options.map((group, groupIndex) => `
          <fieldset style="border:0;padding:0;margin:0">
            <legend class="option-label">${group.label}</legend>
            <div class="option-list">
              ${group.choices.map((choice, choiceIndex) => `
                <label class="option-choice">
                  <input type="radio" name="option-${groupIndex}" value="${choice.name}" ${choiceIndex === 0 ? "checked" : ""} />
                  <span>${choice.name}${choice.extra ? ` +${formatPrice(choice.extra)}` : ""}</span>
                </label>
              `).join("")}
            </div>
          </fieldset>
        `).join("")}
        <button class="button button-dark dialog-add" type="submit"><span>Add to my bag</span><strong>${formatPrice(getUnitPrice(item, defaultOptions))}</strong></button>
        <p class="dialog-note">Please ask our team about allergies before ordering.</p>
      </div>
    </form>`;
  modalBackdrop.classList.add("open");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  dialogContent.querySelector("input")?.focus({ preventScroll: true });
}

function closeDialog() {
  modalBackdrop.classList.remove("open");
  modalBackdrop.setAttribute("aria-hidden", "true");
  if (!cartDrawer.classList.contains("open")) document.body.classList.remove("locked");
  state.activeItem = null;
}

function addToCart(item, options) {
  const unitPrice = getUnitPrice(item, options);
  const optionNames = options.map((option) => option.name);
  const existing = state.cart.find((entry) =>
    entry.id === item.id && JSON.stringify(entry.options) === JSON.stringify(optionNames)
  );
  if (existing) existing.quantity += 1;
  else state.cart.push({ id: item.id, quantity: 1, unitPrice, options: optionNames });
  saveCart();
  renderCart();
  showToast(`${item.name} added to your bag`);
}

function estimateWait() {
  if (state.cart.length === 0) return null;
  const itemPrep = state.cart.reduce((sum, entry) => {
    const item = menuItems.find((menuItem) => menuItem.id === entry.id);
    return sum + (item ? item.prep * entry.quantity : 0);
  }, 0);
  const queueLoad = Number(sessionStorage.getItem("sunday-demo-queue") || "0");
  const midpoint = Math.max(4, itemPrep + queueLoad);
  return `${Math.max(4, midpoint - 2)}–${midpoint + 2} min`;
}

function renderCart() {
  const count = state.cart.reduce((sum, entry) => sum + entry.quantity, 0);
  const total = state.cart.reduce((sum, entry) => sum + entry.quantity * entry.unitPrice, 0);
  const cartCount = document.querySelector("#cart-count");
  cartCount.textContent = count;
  document.querySelector("#open-cart").setAttribute("aria-label", `Open your bag, ${count} ${count === 1 ? "item" : "items"}`);
  document.querySelector("#drawer-item-count").textContent = count ? `(${count})` : "";
  document.querySelector("#cart-subtotal").textContent = formatPrice(total);
  document.querySelector("#wait-estimate").textContent = state.cart.length ? `About ${estimateWait()}` : "Estimate unavailable";
  document.querySelector("#cart-checkout").classList.toggle("hidden", !state.cart.length);
  if (!state.cart.length) {
    document.querySelector("#cart-body").innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon" aria-hidden="true">☕</span>
        <h3>A little room for something good.</h3>
        <p>Your bag is taking a quiet moment. Add a favorite when you’re ready.</p>
        <button type="button" data-action="browse-menu">Find your something</button>
      </div>`;
    return;
  }
  document.querySelector("#cart-body").innerHTML = state.cart.map((entry, index) => {
    const item = menuItems.find((menuItem) => menuItem.id === entry.id);
    return `
      <article class="cart-item">
        <img src="${item.image}" alt="" />
        <div>
          <h3>${item.name}</h3>
          <div class="cart-item-option">${entry.options.join(" · ")}</div>
          <div class="quantity-control">
            <button type="button" data-action="quantity" data-index="${index}" data-change="-1" aria-label="Remove one ${item.name}">−</button>
            <span>${entry.quantity}</span>
            <button type="button" data-action="quantity" data-index="${index}" data-change="1" aria-label="Add one ${item.name}">+</button>
          </div>
        </div>
        <span class="cart-item-price">${formatPrice(entry.unitPrice * entry.quantity)}</span>
      </article>`;
  }).join("");
}

function openCart() {
  closeDialog();
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartBackdrop.classList.add("open");
  document.body.classList.add("locked");
  document.querySelector("#close-cart").focus({ preventScroll: true });
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartBackdrop.classList.remove("open");
  if (!modalBackdrop.classList.contains("open")) document.body.classList.remove("locked");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2500);
}

function recommend(prompt) {
  const text = prompt.trim().toLocaleLowerCase();
  if (!text) {
    companionResponse.textContent = "Tell us a little about your mood and we’ll find a lovely place to start.";
    return;
  }
  const budgetMatch = text.match(/(?:under|below|less than)\s*\$?\s*(\d+(?:\.\d{1,2})?)/);
  const budget = budgetMatch ? Math.round(Number(budgetMatch[1]) * 100) : null;
  const terms = text.match(/[a-z]+(?:'[a-z]+)?/g) || [];
  const scored = menuItems.filter((item) => {
    const isAvailable = true;
    return isAvailable && (!budget || item.price <= budget);
  }).map((item) => {
    let score = 0;
    const haystack = `${item.name} ${item.description} ${item.category} ${item.preferences.join(" ")}`.toLocaleLowerCase();
    for (const term of terms) {
      if (term.length > 2 && haystack.includes(term)) score += 1;
    }
    if (text.includes("not too sweet") || text.includes("less sweet")) {
      if (item.id === "iced-matcha" || item.id === "vanilla-tonic") score += 3;
      if (item.id === "cardamom-bun" || item.id === "lemon-loaf") score += 1;
    }
    if (text.includes("no caffeine") || text.includes("caffeine-free") || text.includes("without caffeine")) {
      if (item.category === "Food") score += 4;
    }
    if (text.includes("under $6") && item.price <= 600) score += 2;
    return { item, score };
  }).sort((a, b) => b.score - a.score || a.item.price - b.item.price);
  const picks = scored.filter((entry) => entry.score > 0).slice(0, 2);
  const recommendations = picks.length ? picks : menuItems.slice(0, 2).map((item) => ({ item }));
  const reason = picks.length ? "A couple of menu picks that sound like your kind of thing:" : "We don’t have an exact match in today’s menu, but these are lovely places to start:";
  companionResponse.innerHTML = `
    <span>${reason}</span>
    <span class="recommendation-list">${recommendations.map(({ item }) => `<button type="button" class="recommendation-link" data-action="details" data-id="${item.id}">${item.name} <span>↗</span></button>`).join("")}</span>
    <span class="ai-note">A menu-based demo suggestion — ask our team about ingredients or allergies.</span>`;
}

function placeOrder() {
  if (!state.cart.length) return;
  const totalItems = state.cart.reduce((sum, entry) => sum + entry.quantity, 0);
  const ref = `SS-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const wait = estimateWait();
  try {
    sessionStorage.setItem("sunday-demo-queue", String(Math.min(18, totalItems * 2)));
  } catch (error) {
    console.warn("Could not update the demo queue estimate.", error);
  }
  state.cart = [];
  saveCart();
  renderCart();
  closeCart();
  dialogContent.innerHTML = `
    <div class="order-success">
      <div class="success-icon" aria-hidden="true">✓</div>
      <div class="eyebrow"><span class="eyebrow-line"></span> YOUR ORDER IS IN <span class="eyebrow-line"></span></div>
      <h2>Good things are<br /><em>on their way.</em></h2>
      <p>We’ve got your demo order. Your estimated wait is about <strong>${wait}</strong> — keep this number handy when you pop by.</p>
      <div class="order-reference">${ref}</div>
      <div class="order-timeline" aria-label="Order status: received">
        <div class="timeline-step done"><span class="timeline-dot"></span><span>Received</span></div>
        <div class="timeline-step"><span class="timeline-dot"></span><span>Preparing</span></div>
        <div class="timeline-step"><span class="timeline-dot"></span><span>Ready</span></div>
      </div>
      <p class="dialog-note">This is a frontend demo. Your order hasn’t been sent to a café.</p>
      <button class="button button-dark" type="button" data-action="done">Back to the good stuff <span>↗</span></button>
    </div>`;
  modalBackdrop.classList.add("open");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

document.querySelectorAll(".category-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    document.querySelectorAll(".category-button").forEach((entry) => entry.classList.toggle("active", entry === button));
    renderMenu();
  });
});

document.querySelector("#menu-search").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderMenu();
});

document.querySelector("#clear-search").addEventListener("click", () => {
  state.query = "";
  state.category = "All";
  document.querySelector("#menu-search").value = "";
  document.querySelectorAll(".category-button").forEach((button) => button.classList.toggle("active", button.dataset.category === "All"));
  renderMenu();
});

menuGrid.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const item = menuItems.find((entry) => entry.id === actionButton.dataset.id);
  if (!item) return;
  if (actionButton.dataset.action === "quick-add") addToCart(item, getDefaultOptions(item));
  else if (actionButton.dataset.action === "details") openItem(item);
});

menuGrid.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".menu-card-image-wrap")) {
    event.preventDefault();
    const item = menuItems.find((entry) => entry.id === event.target.dataset.id);
    if (item) openItem(item);
  }
});

document.querySelector("#companion-form").addEventListener("submit", (event) => {
  event.preventDefault();
  recommend(document.querySelector("#companion-prompt").value);
});

document.querySelectorAll(".suggestion-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#companion-prompt").value = button.dataset.prompt;
    recommend(button.dataset.prompt);
  });
});

companionResponse.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action='details']");
  if (!button) return;
  const item = menuItems.find((entry) => entry.id === button.dataset.id);
  if (item) openItem(item);
});

dialogContent.addEventListener("change", (event) => {
  if (!event.target.matches("#item-form input[type='radio']") || !state.activeItem) return;
  const options = getSelectedOptions(dialogContent.querySelector("#item-form"), state.activeItem);
  const price = formatPrice(getUnitPrice(state.activeItem, options));
  dialogContent.querySelector("#dialog-price").textContent = price;
  dialogContent.querySelector(".dialog-add strong").textContent = price;
});

dialogContent.addEventListener("submit", (event) => {
  if (event.target.id !== "item-form" || !state.activeItem) return;
  event.preventDefault();
  addToCart(state.activeItem, getSelectedOptions(event.target, state.activeItem));
  closeDialog();
  openCart();
});

document.querySelector("#cart-body").addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  if (button.dataset.action === "browse-menu") {
    closeCart();
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
  }
  if (button.dataset.action === "quantity") {
    const index = Number(button.dataset.index);
    const entry = state.cart[index];
    if (!entry) return;
    entry.quantity += Number(button.dataset.change);
    if (entry.quantity <= 0) state.cart.splice(index, 1);
    saveCart();
    renderCart();
  }
});

document.querySelector("#open-cart").addEventListener("click", openCart);
document.querySelector("#close-cart").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);
document.querySelector("#place-order").addEventListener("click", placeOrder);
document.querySelector(".dialog-close").addEventListener("click", closeDialog);
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeDialog();
});
dialogContent.addEventListener("click", (event) => {
  if (event.target.closest("[data-action='done']")) closeDialog();
});

document.querySelector(".mobile-menu-button").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const nav = document.querySelector(".main-nav");
  const open = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

document.querySelector(".main-nav").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    document.querySelector(".main-nav").classList.remove("open");
    document.querySelector(".mobile-menu-button").setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDialog();
    closeCart();
    document.querySelector(".main-nav").classList.remove("open");
    document.querySelector(".mobile-menu-button").setAttribute("aria-expanded", "false");
  }
});

document.querySelector(".search-toggle").addEventListener("click", () => {
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => document.querySelector("#menu-search").focus(), 400);
});

renderMenu();
renderCart();
