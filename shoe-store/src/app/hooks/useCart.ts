import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ProductData } from '../data/products';

interface CartStore {
  items: (ProductData & { quantity: number })[];
  addToCart: (product: ProductData) => void;
  removeFromCart: (product: ProductData) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const { items } = get();

        // Find the index of the item in the cart
        const index = items.findIndex((item) => item.name === product.name);

        // If the item is not in the cart, add it
        if (index === -1) {
          set({ items: [...items, { ...product, quantity: 1 }] });
        } else {
          // If the item is in the cart, increase the quantity
          const newItems = [...items];
          newItems[index].quantity += 1;
          set({ items: newItems });
        }
      },
      removeFromCart: (product) => {
        const { items } = get();
        const index = items.findIndex((item) => item.name === product.name);
        const newItems = [...items];

        // If the item is not in the cart, do nothing
        if (index === -1) return;

        if (newItems[index].quantity === 1) newItems.splice(index, 1);
        else newItems[index].quantity -= 1;

        set({ items: newItems });
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'store-cart',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
