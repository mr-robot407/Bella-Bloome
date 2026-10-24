# Bella Bloome website demo

An interactive client demo of an online store for **Bella Bloome**, a multi-category retail store on the 1st floor of Makkah Mall, Sangrama, Kashmir.

It shows how customers could browse and order online, and how the owner could manage products and orders from a phone. It is a single self-contained HTML file with no build tools or dependencies.

## What's in the demo

- **Storefront:** announcement bar, category navigation, hero, "Find Your Kind of Beautiful" categories, Educational Play, and 12 sample products with filters, search, sorting, wishlist and quick view
- **Product pages:** options, quantity, add to bag, and an enquire-on-WhatsApp button
- **Bag and checkout:** live subtotal, form validation, and three order paths (cash on delivery, UPI, WhatsApp). The WhatsApp path builds a prefilled order message
- **Order tracking:** look up an order by reference (sample: `BB-1042`) and see its status timeline
- **Store Manager (demo):** stock overview, add, edit, hide or delete products, adjust stock, upload photos, change order statuses and edit the announcement bar
- **Demo guide:** a presenter button that steps through a five-minute walkthrough

## Running it

Open `index.html` in any browser. To host it, enable GitHub Pages on the `main` branch (root folder) and the site will be served from `index.html`.

## Editing

`index.html` is generated from two source files:

- `src/template.html`: page structure, styles and app logic
- `src/art.js`: the product illustrations (inline SVG)

After editing either file, rebuild with:

```bash
python3 build.py
```

## Important limitations

This is a sales demo, not a production store.

- Product names, prices, stock and orders are illustrative sample data, not Bella Bloome's real inventory.
- Product images are illustrations. Replace them with real product photos before showing customers.
- Data is saved only in the visitor's browser (`localStorage`). There is no backend, database, staff login or access control.
- No payments are processed. Cash on delivery and UPI are proposed options that need the owner's confirmation and setup.
- The WhatsApp number is the one shown on Bella Bloome's Instagram (70062 80764) and should be verified with the store before real use.
- Delivery, returns, privacy and terms text are drafts that need the owner's approval.

A live version would need a backend, database, authentication, real payment integration and the store's confirmed policies.

---

Prepared by Aasim Nizam.
