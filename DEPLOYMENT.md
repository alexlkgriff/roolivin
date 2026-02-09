# Deployment (Vercel)

This project is an Expo (React Native + React Native Web) app. For Vercel, the simplest path is to export a static web build and deploy the `dist/` output.

## 1) Confirm a local web export works

From the repo root:

```bash
npm install
npm run build
```

This should create `dist/index.html` plus static assets under `dist/_expo/`.

## 2) Create a Vercel project

1. Import the repo into Vercel.
2. In **Build & Output Settings**:
   - **Framework Preset**: `Other`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add any required environment variables (if you add them later).

## 3) SPA routing on refresh (important)

`vercel.json` is included to serve static files normally and fallback all other routes to `index.html`, which prevents 404s on refresh for client-side navigation.
