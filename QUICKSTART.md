# 🚀 Quick Start Guide

## Installation (5 minutes)

```bash
# 1. Clone the repository
git clone https://github.com/kilo1234567/streetwear-store.git
cd streetwear-store

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# Visit: http://localhost:3000
```

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
npm run type-check # Run TypeScript check
```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/          # Next.js pages
├── store/          # Zustand state management
├── types/          # TypeScript types
├── lib/            # Utility libraries
├── utils/          # Helper functions
└── styles/         # Global CSS
```

## Key Features

- 🏠 **Homepage** with hero and featured collections
- 🛍️ **Shop** with filters and search
- 📦 **Product details** with gallery and reviews
- 🛒 **Shopping cart** with persistent storage
- 💳 **Checkout** flow
- ❤️ **Wishlist** functionality
- 🌙 **Dark/Light mode** toggle
- 📱 **Fully responsive** design
- ✨ **Smooth animations**

## Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#YOUR_COLOR',
  accent: '#YOUR_COLOR',
}
```

### Update Products
Edit product data in component files:
```tsx
const products = [
  {
    id: '1',
    name: 'Your Product',
    price: 99.99,
    // ...
  }
]
```

### Configure Environment
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy (automatic)

### Other Options
- Netlify
- AWS
- DigitalOcean
- Self-hosted

## Need Help?

Check:
- `README.md` - Project overview
- `DOCUMENTATION.md` - Detailed guide
- `PREVIEW.md` - Visual site preview
- Component source code in `src/components`

---

**Start selling premium streetwear today! 🎨**
