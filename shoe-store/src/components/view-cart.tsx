'use client';

import { useCart } from '@/hooks/useCart';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';

export default function ViewCart() {
  const cart = useCart();
  const [cartSize, setCartSize] = useState(0);

  // Avoid hydration mismatch
  useEffect(() => {
    setCartSize(cart.items.length);
  }, [cart]);

  return (
    <Link
      href="/cart"
      className="flex items-center p-2 px-2 sm:px-4 border-2 border-black dark:border-zinc-200 rounded-xl dark:hover:text-zinc-300 hover:border-zinc-700 hover:text-zinc-700 focus-visible:border-zinc-700 dark:focus-visible:text-zinc-300 focus-visible:text-zinc-700 dark:hover:border-zinc-400 group transition-colors duration-500"
    >
      <MdOutlineShoppingBag className="size-6" />
      <p className="hidden md:block md:mx-2 font-bold">View Cart</p>

      {cartSize > 0 && (
        <div className="flex items-center justify-center rounded-full size-6 bg-orange-600 group-hover:bg-orange-700 group-focus-visible:bg-orange-700 ml-1">
          <p className="font-bold text-white text-sm leading-none group-hover:text-zinc-100 group-focus-visible:text-zinc-100 dark:group-hover:text-zinc-200">
            {cartSize}
          </p>
        </div>
      )}
    </Link>
  );
}
