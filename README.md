# Nabil's Store – React E-Commerce App

A small online shop built with **React, TypeScript and Tailwind CSS** as part of the ReDI School Full-Stack Bootcamp.
Products are loaded from the [Fake Store API](https://fakestoreapi.com).

## Features

- **Product list** loaded from a REST API, with loading and error states
- **Search** by title and **filter by category** (categories come from the data)
- **Product details page** for each product (`/product/:id`)
- **Shopping cart** shared across all pages with the Context API: add, remove, total
- **Favorites** toggle on each product card
- **Responsive** grid: 1, 2 or 3 columns depending on screen size

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI components |
| TypeScript | type safety |
| Vite | dev server and build |
| Tailwind CSS 4 | styling |
| React Router | client-side routing |

## Project Structure

```
src/
├── types/product.ts          # Product and Rating interfaces
├── context/CartContext.tsx   # global cart state + useCart() hook
├── components/               # reusable UI
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductList.tsx
│   └── ProductCard.tsx
├── pages/                    # one component per route
│   ├── HomePage.tsx          # /            list, search, filter
│   ├── ProductDetailsPage.tsx# /product/:id
│   └── CartPage.tsx          # /cart
└── App.tsx                   # layout and routes
```

## Key Concepts

- **Props** pass data down: `HomePage → ProductList → ProductCard`
- **State** (`useState`) for data that changes: products, loading, search term, favorites
- **Effects** (`useEffect`) to fetch data after render; `[id]` refetches when the URL changes
- **Context** (`CartProvider` + `useCart`) to share the cart without prop drilling
- **Derived values**: filtered products and cart total are calculated, not stored

## Getting Started

```bash
git clone https://github.com/nabilChemkhi/MyRediStore.git
cd MyRediStore
npm install
npm run dev
```

Open http://localhost:5173

## Next Steps

- Cart quantities instead of duplicate items
- Save the cart in `localStorage`
- Move fetching into a custom hook (`useProducts`)
- Error boundary around the pages

## Author

**Nabil Chemkhi** – [Linkedin](https://www.linkedin.com/in/nabil-chemkhi/)