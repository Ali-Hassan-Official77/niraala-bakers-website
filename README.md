# EmberBite — Production-style Fast Food Frontend

EmberBite is a polished Next.js fast-food ordering experience designed around an F-11, Islamabad service location.

## What was rebuilt

- Completely new EmberBite visual direction instead of a YumYummy reskin.
- Editorial / product-studio hero with layered orbit graphics, 3D motion and a direct-loading food image.
- New warm charcoal, ember-orange, mint and off-white palette.
- New menu architecture, product names, descriptions, pricing and categories.
- Responsive product cards with direct `<img>` rendering and a local fallback image.
- Removed food-image usage of `next/image`/`fill`, eliminating the invalid-parent-position warnings and avoiding the remote image optimizer timeout path.
- New responsive category grid, signature collage, offer cards, order builder, location/service section and closing CTA.
- Full menu search, category filtering and sorting.
- Product detail pages with quantity controls and favorites.
- Cart with server-compatible pricing rules.
- Checkout with validated customer details and Cash on Delivery.
- Server-side order validation and price calculation in `/api/orders` using Zod.
- Order history, confirmation tracking UI and reorder action.
- Account/favorites experience.
- Sticky desktop header + mobile bottom navigation.
- Footer uses the supplied business contact details only:
  - Manager: Amjad
  - Location: F-11, Islamabad, Pakistan
  - Email: amjadofficial34@gmail.com

## Image strategy

Food imagery uses normal HTML `<img>` tags instead of `next/image fill`. This prevents the exact `fill` + `position: static` warnings that were appearing in the previous build. Every food image also has an `onError` fallback to `/public/food-fallback.svg`.

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm start
```

## Order backend

`POST /api/orders` validates:

- customer name, phone, address and note
- product IDs
- quantities
- payment method
- server-side product prices
- delivery fee
- discount
- final total

The current checkout intentionally supports Cash on Delivery. An actual card/wallet gateway can be connected later without changing the storefront flow.
