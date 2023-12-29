'use client';

import { useCart } from '@/hooks/useCart';
import { useState, useEffect } from 'react';
import ProductCartCard from './product-cart-card';

export default function UserCart() {
  const cart = useCart();

  // Avoid hydration mismatch
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    setCartSize(cart.items.length);
  }, [cart]);

  return (
    <div className="mt-4">
      {cartSize === 0 ? (
        <p className="text-xl text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.items.map((item) => (
            <ProductCartCard {...item} key={item.name} />
          ))}
        </div>
      )}
    </div>
  );
}
