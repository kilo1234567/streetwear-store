import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WishlistItem, Wishlist } from '@/types';

interface WishlistStore extends Wishlist {
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>(
  persist(
    (set, get) => ({
      items: [],
      lastUpdated: new Date().toISOString(),
      addItem: (productId: string) => {
        const { items } = get();
        if (!items.find((item) => item.productId === productId)) {
          set({
            items: [
              ...items,
              {
                id: `${productId}-${Date.now()}`,
                productId,
                addedAt: new Date().toISOString(),
              },
            ],
            lastUpdated: new Date().toISOString(),
          });
        }
      },
      removeItem: (productId: string) => {
        set({
          items: get().items.filter((item) => item.productId !== productId),
          lastUpdated: new Date().toISOString(),
        });
      },
      isInWishlist: (productId: string) => {
        return get().items.some((item) => item.productId === productId);
      },
      clearWishlist: () => {
        set({
          items: [],
          lastUpdated: new Date().toISOString(),
        });
      },
    }),
    {
      name: 'wishlist-storage',
    }
  )
);
