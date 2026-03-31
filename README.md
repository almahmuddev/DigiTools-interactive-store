# 🛠️ DigiTools — Supercharge Your Digital Workflow

> A modern digital marketplace built with React.js and Tailwind CSS — browse premium AI tools, manage your cart, and level up your workflow.

---

## 🚀 Live Preview



## 🧰 Technologies Used

| Technology | Purpose |
|---|---|
| **React.js** | Component-based UI framework |
| **Tailwind CSS** | Utility-first styling |
| **React Toastify** | Toast notifications for cart actions |
| **React Icons** | Icon library |
| **Vite** | Lightning-fast build tool |
| **JSON** | Local product data source |

---

## ✨ Features

### 🛒 Smart Cart System
Add products to your cart with a single click, remove individual items, and proceed to checkout — all with smooth toast notifications powered by React Toastify.

### 🔄 Dynamic Product / Cart Toggle
Switch instantly between the product grid and your cart using the toggle buttons. The navbar always reflects the live cart count.

### 📱 Fully Responsive Design
Optimized for every screen size — mobile, tablet, and desktop — using Tailwind CSS responsive utilities and a clean grid layout.

---


## 📁 Project Structure

```
digitools/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── Stats.jsx
│   │   ├── MainSection.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartItem.jsx
│   │   ├── Steps.jsx
│   │   ├── Pricing.jsx
│   │   ├── CTABanner.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── products.json
│   ├── images/
│   │   └── image(All)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🧩 Product Data Structure

```json

{
    "id": 1,
    "name": "AI Writing Pro",
    "description": "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    "price": 29,
    "period": "Mo",
    "tag": "Best Seller",
    "tagType": "best-seller",
    "icon": "/src/images/1.png",
    "features": [
      "Unlimited AI content generation",
      "50+ writing templates",
      "Grammer checkout"
    ]
  }

## 📄 License

MIT © 2025 DigiTools | Developed by Mahmud Khan @almahmuddev
