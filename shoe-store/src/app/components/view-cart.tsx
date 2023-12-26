'use client';

import Link from 'next/link';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useCart } from '../hooks/useCart';

export default function ViewCart() {
  const cart = useCart();

  return (
    <Link
      href="/cart"
      className="flex items-center p-2 px-2 sm:px-4 border-2 border-black rounded-xl hover:border-zinc-700 hover:text-zinc-700 focus-visible:border-zinc-700 focus-visible::text-zinc-700 group transition-colors duration-500"
    >
      <MdOutlineShoppingBag className="size-6" />
      <p className="hidden md:block md:mx-2 font-bold">View Cart</p>

      {cart.items.length > 0 && (
        <div className="flex items-center justify-center rounded-full size-7 bg-orange-600 group-hover:bg-orange-700 group-focus-visible:bg-orange-700 ml-1">
          <p className="font-bold text-white text-sm leading-none group-hover:text-zinc-100 group-focus-visible:text-zinc-100">
            {cart.items.length}
          </p>
        </div>
      )}
    </Link>
  );
}
