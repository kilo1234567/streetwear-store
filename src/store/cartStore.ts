import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Cart } from '@/types';

interface CartStore {
  items: CartItem[];
  total: number;
  itemCount: number;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  calculateTotal: () => void;
}

export const useCartStore = create<CartStore>(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,
      addItem: (item: CartItem) => {
        const { items } = get();
        const existingItem = items.find(
          (i) =>
            i.product.id === item.product.id &&
            i.selectedSize === item.selectedSize &&
            i.selectedColor === item.selectedColor
        );

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === existingItem.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...items, item] });
        }
        get().calculateTotal();
      },
      removeItem: (itemId: string) => {
        set({ items: get().items.filter((item) => item.id !== itemId) });
        get().calculateTotal();
      },
      updateQuantity: (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        });
        get().calculateTotal();
      },
      clearCart: () => {
        set({ items: [], total: 0, itemCount: 0 });
      },
      calculateTotal: () => {
        const { items } = get();
        const total = items.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );
        const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
        set({ total, itemCount });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
