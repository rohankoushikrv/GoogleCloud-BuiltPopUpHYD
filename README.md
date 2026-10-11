# Café Companion

A mobile-friendly café storefront demo for discovering menu items, getting menu-grounded recommendations, customizing an order, and viewing an estimated wait. The frontend is a static site and can be hosted on GitHub Pages or Firebase Hosting.

## Project structure

```text
backend/                  Flask API scaffold for Cloud Run
frontend/                 Static customer-facing website
.github/workflows/        GitHub Pages deployment workflow
firebase.json             Firebase Hosting configuration
```

## Preview locally

Open `frontend/index.html` in a browser, or serve the `frontend/` directory with any static web server. No frontend build step or package installation is required.

## Deploy to GitHub Pages

1. Create a GitHub repository whose root contains this project's `README.md`, `.github/`, and `frontend/` directories. If using the larger challenge folder, copy or move the contents of `cafe_companion/` to the repository root.
2. Push the project to the repository's `main` or `master` branch.
3. In GitHub, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
4. The `Deploy to GitHub Pages` workflow publishes `frontend/` when code is pushed to `main` or `master`. It can also be started manually from the repository's **Actions** tab.

The site uses relative stylesheet and script URLs, so it works both at a user/organization Pages root and at a project URL such as `https://username.github.io/repository/`.

## Deploy to Firebase Hosting

Configure Firebase Hosting to publish the `frontend/` directory, then deploy with the Firebase CLI. The existing `firebase.json` is configured for this directory.

## Backend status

The current frontend is a static demonstration: the menu, recommendations, bag, wait estimate, and order confirmation run in the browser. The Flask backend is a scaffold and is not connected to the frontend yet. GitHub Pages hosts static files only; deploying the backend or enabling real Gemini, Firestore, and staff authentication requires separate Google Cloud/Firebase services and frontend API integration. Do not put service credentials in the frontend.
