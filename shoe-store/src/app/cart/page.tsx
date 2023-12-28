'use client';

import clsx from 'clsx';
import { DM_Sans } from 'next/font/google';
import ProductCartCard from '../components/cart/product-cart-card';
import { useCart } from '../hooks/useCart';
import { useEffect, useState } from 'react';

const dmSans = DM_Sans({
  display: 'swap',
  weight: ['700'],
  subsets: ['latin'],
});

export default function Home() {
  const cart = useCart();

  // Avoid hydration mismatch
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    setCartSize(cart.items.length);
  }, [cart]);

  return (
    <>
      <p className={clsx('text-4xl font-bold', dmSans.className)}>Your Bag</p>

      {cartSize === 0 ? (
        <p className="text-xl text-gray-700">Your bag is empty</p>
      ) : (
        <div className="flex flex-col gap-4 mt-4">
          {cart.items.map((item) => {
            return <ProductCartCard {...item} key={item.name} />;
          })}
        </div>
      )}
    </>
  );
}
