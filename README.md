# AasaiThambi Clay Works — React + TypeScript

This is a React (TSX) + React Router conversion of the original static
HTML/CSS/JS site. It keeps the same visual design and features (product
catalogue, filters, search, wishlist, cart sidebar, quick view modal,
WhatsApp ordering, contact form, newsletter) but rebuilt as componentized,
routed React code.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Images

Add your product/gallery/workshop photos to `public/images/` using the same
filenames referenced in `src/data/products.ts` and the page components
(`Home.tsx`, `Gallery.tsx`, `About.tsx`). Any image that fails to load falls
back automatically to a placeholder, same as the original site.

## Project structure

```
src/
  components/       Reusable, self-contained UI pieces (each with its own .css)
    TopRibbon/
    Navbar/
    Footer/
    CartSidebar/
    ProductCard/
    QuickViewModal/
    Marquee/
    FeaturesStrip/
    CTABanner/
    WhatsAppFloat/
    BackToTop/
    Toast/
    ScrollToTop/
  pages/            One folder per route, each with its own .css
    Home/
    Products/
    Process/
    Gallery/
    About/
    Contact/
  layout/
    Layout.tsx      Shared shell (ribbon, navbar, footer, cart, toast, floats)
  context/
    AppContext.tsx  Cart, wishlist, toast, WhatsApp ordering, checkout logic
  data/
    products.ts     Product catalogue (from the old script.js PRODUCTS array)
  hooks/
    useReveal.ts     Scroll-reveal animation (IntersectionObserver)
    useCountUp.ts    Animated stat counters
  utils/
    format.ts        Price formatting / discount calculation
  styles/
    global.css       CSS variables, reset, typography, buttons, animations
  App.tsx            Route definitions (react-router-dom)
  main.tsx           React entry point
```

## Routing

Built with `react-router-dom` (`BrowserRouter`):

| Route        | Page                              |
|--------------|------------------------------------|
| `/`          | Home (hero, categories, testimonials, CTA) |
| `/products`  | Full catalogue with filters + search (`?filter=` / `?search=`) |
| `/process`   | Craft process timeline             |
| `/gallery`   | Photo gallery                      |
| `/about`     | About / our story                  |
| `/contact`   | Contact & custom order enquiry form|

All pages share one `Layout` (top ribbon, navbar, footer, cart sidebar,
WhatsApp float button, back-to-top button, toast notifications) via
`<Outlet />`.

## Notes on the conversion

- All `document.getElementById` / inline `onclick` DOM manipulation from
  `script.js` was replaced with React state and the `AppContext` provider
  (cart, wishlist, toast, search, filters).
- Bootstrap is kept only for its CSS grid/utility classes; the Bootstrap JS
  bundle (and its dependency on jQuery-style DOM toggling) was removed —
  the navbar collapse, toasts, and cart drawer are now controlled by React
  state instead.
- The category → product filter flow and the search bar now use URL query
  parameters (`/products?filter=6-8`, `/products?search=eco`) so filters are
  shareable/bookmarkable links, a natural fit for React Router.
