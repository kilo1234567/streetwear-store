// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: ProductCategory;
  sizes: Size[];
  colors: Color[];
  stock: number;
  rating: number;
  reviews: Review[];
  tags: string[];
  isNew: boolean;
  isTrending: boolean;
  onSale: boolean;
  discountPercentage?: number;
  createdAt: string;
  updatedAt: string;
}

export type ProductCategory = 'hoodies' | 'tees' | 'pants' | 'jackets' | 'accessories' | 'footwear';

export interface Size {
  size: string;
  label: string;
  stock: number;
}

export interface Color {
  name: string;
  hex: string;
  stock: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  verified: boolean;
  helpful: number;
  unhelpful: number;
  createdAt: string;
}

// Cart Types
export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  addedAt: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
  lastUpdated: string;
}

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends User {
  addresses: Address[];
  orders: Order[];
  wishlist: string[];
  preferences: UserPreferences;
}

export interface Address {
  id: string;
  type: 'billing' | 'shipping';
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface UserPreferences {
  darkMode: boolean;
  newsletter: boolean;
  notifications: boolean;
  currency: string;
}

// Order Types
export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  trackingNumber?: string;
  createdAt: string;
  updatedAt: string;
  estimatedDelivery?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  price: number;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';

export interface PaymentMethod {
  type: 'credit_card' | 'debit_card' | 'paypal' | 'apple_pay' | 'google_pay';
  last4?: string;
  brand?: string;
}

// Wishlist Types
export interface WishlistItem {
  id: string;
  productId: string;
  addedAt: string;
}

export interface Wishlist {
  items: WishlistItem[];
  lastUpdated: string;
}

// Filter Types
export interface ProductFilters {
  category?: ProductCategory[];
  sizes?: string[];
  colors?: string[];
  priceRange?: [number, number];
  rating?: number;
  sortBy?: 'newest' | 'price-low' | 'price-high' | 'trending' | 'rating';
  searchQuery?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Newsletter Types
export interface NewsletterSubscription {
  email: string;
  subscribedAt: string;
  isActive: boolean;
  frequency: 'daily' | 'weekly' | 'monthly';
}

// Contact Form Types
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  attachments?: string[];
  status: 'new' | 'read' | 'replied' | 'closed';
  createdAt: string;
  repliedAt?: string;
}

// Recommendation Types
export interface ProductRecommendation {
  productId: string;
  score: number;
  reason: 'viewed' | 'similar' | 'popular' | 'trending' | 'new';
}
