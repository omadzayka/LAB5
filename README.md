# React Product Dashboard

A small Vite + React app demonstrating components, props, state, list rendering, and composition.

## Run

```bash
npm install
npm run dev
```

## Structure

- `App.jsx`: holds state (`showProducts`, `name`), toggle button, controlled input
- `ProductList.jsx`: maps static product data to `Product` components
- `Product.jsx`: displays a title and price (props only)
- `Card.jsx`: styled wrapper that renders `children`

No `useEffect`, API calls, Context, or external libraries.