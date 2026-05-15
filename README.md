# Streetwear Store - Premium Fashion eCommerce

A modern, luxury-inspired eCommerce platform built with Next.js, React, and Tailwind CSS. Featuring a sleek design, smooth animations, and comprehensive shopping functionality.

## 🎨 Features

### Core Features
- **Homepage** with hero banner, featured collections, and trending products
- **Shop Page** with advanced product filters (size, color, category, price)
- **Product Details** with image gallery, size selector, reviews, and ratings
- **Shopping Cart** with persistent storage and checkout flow
- **User Authentication** with login/signup and account management
- **Responsive Design** - Mobile-first, fully responsive across all devices

### Premium Features
- 🌙 **Dark/Light Mode** with system preference detection
- ❤️ **Wishlist** functionality with persistent storage
- 🤖 **AI-Powered Recommendations** based on browsing history
- ⚡ **Performance Optimized** with image optimization and lazy loading
- 🔍 **SEO-Friendly** with meta tags and structured data
- ✨ **Smooth Animations** with Framer Motion
- 🎯 **Modern UI** inspired by premium streetwear brands

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Frontend**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **State Management**: Zustand
- **HTTP Client**: Axios
- **SEO**: Next-SEO
- **Icons**: React Icons
- **Language**: TypeScript

## 📋 Project Structure

```
src/
├── pages/              # Next.js pages and routes
├── components/         # Reusable React components
├── lib/               # Utility functions and helpers
├── store/             # Zustand state management
├── types/             # TypeScript type definitions
├── styles/            # Global styles and CSS
├── public/            # Static assets
└── utils/             # Helper utilities
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

# Setup environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your store!

## 📱 Pages Overview

- **/** - Homepage with hero, featured products, and promotions
- **/shop** - Product listing with filters and search
- **/products/[id]** - Detailed product view
- **/cart** - Shopping cart management
- **/checkout** - Secure checkout process
- **/account** - User profile and order history
- **/wishlist** - Saved favorite products
- **/about** - Brand story and information
- **/contact** - Contact form and support

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Red (#FF1744)
- **Neutral**: 50-900 grayscale shades

### Typography
- **Display**: Poppins, Montserrat
- **Body**: Inter, System fonts

## 📦 Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔐 Security

- HTTPS enforced
- XSS protection headers
- CSRF protection on forms
- Secure environment variable handling

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or issues, please open a GitHub issue or contact support.

---

**Built with ❤️ for the streetwear community**
