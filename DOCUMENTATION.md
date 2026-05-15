# Streetwear Store eCommerce Platform

## Project Overview

A modern, fully-featured premium streetwear eCommerce website built with Next.js, React, Tailwind CSS, and Framer Motion. Features include smooth animations, dark/light mode toggle, wishlist functionality, shopping cart, and a complete checkout flow.

## 🚀 Live Demo

Visit the live site: [https://streetwear-store.com](https://streetwear-store.com)

## ✨ Features

### Core Features
- ✅ **Homepage** with hero banner, featured collections, and trending products
- ✅ **Shop Page** with advanced filtering (category, size, color, price)
- ✅ **Product Details** page with image gallery, reviews, and size selector
- ✅ **Shopping Cart** with persistent local storage
- ✅ **Checkout Flow** with shipping and payment steps
- ✅ **Wishlist** functionality with persistent storage
- ✅ **User Account** page structure
- ✅ **About Us** page with team and brand story
- ✅ **Contact Page** with form and FAQs
- ✅ **Responsive Design** - Mobile-first, fully responsive

### Premium Features
- 🌙 **Dark/Light Mode** with system preference detection
- ✨ **Smooth Animations** using Framer Motion
- 💾 **Persistent Storage** with Zustand state management
- 📱 **Mobile Optimized** with touch-friendly interactions
- ♿ **Accessible** with semantic HTML and ARIA labels
- 🔒 **Secure** with HTTPS and security headers
- ⚡ **Performance Optimized** with lazy loading and image optimization
- 🎨 **Modern UI** inspired by premium streetwear brands
- 📊 **Toast Notifications** for user feedback
- 🔍 **SEO-Friendly** structure

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Form Handling**: React Hook Form (built-in Input component)
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Language**: TypeScript

### Tools & Services
- **Build Tool**: Next.js (Webpack)
- **Formatter**: Prettier (optional)
- **Linter**: ESLint
- **Version Control**: Git

## 📁 Project Structure

```
streetware-store/
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Toast.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── sections/           # Page sections
│   │       ├── HeroBanner.tsx
│   │       ├── TrendingProducts.tsx
│   │       └── FeaturedCollections.tsx
│   ├── pages/                  # Next.js pages (routes)
│   │   ├── index.tsx           # Home page
│   │   ├── shop.tsx            # Shop/Browse page
│   │   ├── products/
│   │   │   └── [id].tsx        # Product detail page
│   │   ├── cart.tsx            # Shopping cart
│   │   ├── checkout.tsx        # Checkout flow
│   │   ├── wishlist.tsx        # Wishlist page
│   │   ├── about.tsx           # About page
│   │   ├── contact.tsx         # Contact page
│   │   ├── _app.tsx            # App wrapper
│   │   └── _document.tsx       # HTML document
│   ├── store/                  # Zustand stores
│   │   ├── cartStore.ts
│   │   ├── wishlistStore.ts
│   │   └── uiStore.ts
│   ├── lib/                    # Library functions
│   │   ├── api.ts
│   │   ├── calculations.ts
│   │   └── seo.ts
│   ├── types/                  # TypeScript types
│   │   └── index.ts
│   ├── utils/                  # Utility functions
│   │   └── helpers.ts
│   └── styles/                 # Global styles
│       └── globals.css
├── public/                     # Static assets
│   ├── favicon.ico
│   └── manifest.json
├── .github/                    # GitHub config
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kilo1234567/streetwear-store.git
cd streetwear-store

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site!

### Build for Production

```bash
# Build
npm run build

# Start production server
npm start
```

## 📄 Pages Guide

### Home Page (`/`)
- Hero banner with CTA buttons
- Featured collections showcase
- Trending products grid
- Newsletter subscription

### Shop Page (`/shop`)
- Product grid with search and filtering
- Filters: Category, Size, Price Range
- Sort options: Newest, Price, Trending, Rating
- Responsive grid layout

### Product Detail (`/products/[id]`)
- Image gallery with thumbnails
- Product information and specifications
- Size and color selection
- Quantity selector
- Add to cart and wishlist buttons
- Shipping and return information

### Shopping Cart (`/cart`)
- List of cart items with images
- Quantity adjusters
- Remove item functionality
- Order summary with calculations
- Checkout button

### Checkout (`/checkout`)
- Multi-step checkout (Shipping → Payment)
- Shipping address form
- Payment method selection
- Order summary
- Order confirmation

### Wishlist (`/wishlist`)
- Saved favorite products
- Quick add to cart
- Product management

### About Page (`/about`)
- Brand story and mission
- Team profiles
- Company values
- Call to action

### Contact Page (`/contact`)
- Contact information
- Contact form
- FAQ section

## 🎨 Design System

### Colors
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Red (#FF1744)
- **Neutral Palette**: 50-900 grayscale

### Typography
- **Display Font**: Poppins, Montserrat (headings)
- **Body Font**: Inter, System fonts (body text)

### Spacing
- Based on 4px grid
- Consistent padding and margins
- Responsive scaling

### Animations
- Fade in/out
- Slide up/down
- Scale transitions
- Smooth hover effects
- Page transitions

## 🛣️ Routing

All routes are handled by Next.js file-based routing:

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/index.tsx` | Home page |
| `/shop` | `pages/shop.tsx` | Shop/Browse |
| `/products/[id]` | `pages/products/[id].tsx` | Product detail |
| `/cart` | `pages/cart.tsx` | Shopping cart |
| `/checkout` | `pages/checkout.tsx` | Checkout |
| `/wishlist` | `pages/wishlist.tsx` | Wishlist |
| `/about` | `pages/about.tsx` | About page |
| `/contact` | `pages/contact.tsx` | Contact page |

## 💾 State Management

### Zustand Stores

**Cart Store** (`src/store/cartStore.ts`)
- Manage shopping cart items
- Persist to localStorage
- Calculate totals

**Wishlist Store** (`src/store/wishlistStore.ts`)
- Manage wishlist items
- Persist to localStorage
- Toggle wishlist status

**UI Store** (`src/store/uiStore.ts`)
- Theme toggle (dark/light mode)
- User authentication state

## 📱 Responsive Design

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

All components are mobile-first and fully responsive.

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive components
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast compliance
- Screen reader friendly

## 🔒 Security

- HTTPS enforced
- XSS protection headers
- CSRF tokens (ready to implement)
- Secure environment variables
- Input validation
- Safe dependency updates

## ⚡ Performance

- Image optimization with Next.js Image
- Code splitting and lazy loading
- CSS-in-JS with Tailwind (minimal footprint)
- Smooth 60fps animations
- Optimized bundle size
- Prefetching for faster navigation

## 🌍 SEO

- Meta tags and Open Graph
- Structured data (schema.org)
- XML sitemap ready
- Mobile-friendly design
- Fast loading times
- Semantic HTML

## 📦 Dependencies

Key dependencies:
- `next@^14.0.0` - Framework
- `react@^18.2.0` - UI library
- `tailwindcss@^3.3.0` - Styling
- `framer-motion@^10.16.0` - Animations
- `zustand@^4.4.0` - State management
- `axios@^1.6.0` - HTTP client
- `react-hot-toast@^2.4.1` - Notifications
- `react-icons@^4.12.0` - Icon library
- `next-seo@^6.1.0` - SEO optimization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 📧 Support

For support, email support@streetwear-store.com or open an issue in the repository.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for utility-first CSS
- Framer Motion for smooth animations
- Unsplash for product images

---

**Built with ❤️ for the streetwear community**

Visit: [https://github.com/kilo1234567/streetwear-store](https://github.com/kilo1234567/streetwear-store)
