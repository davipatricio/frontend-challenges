'use client';

import { MdOutlineShoppingBag } from 'react-icons/md';

interface ViewCartProps {
  itemAmount: number;
}

export default function ViewCart({ itemAmount }: ViewCartProps) {
  return (
    <button
      className="flex items-center p-2 px-2 sm:px-4 border-2 border-black rounded-xl hover:border-zinc-700 hover:text-zinc-700 focus-visible:border-zinc-700 focus-visible::text-zinc-700 group transition-colors duration-500"
      type="button"
    >
      <MdOutlineShoppingBag className="size-6" />
      <p className="hidden md:block md:mx-2 font-bold">View Cart</p>

      {itemAmount > 0 && (
        <div className="flex items-center justify-center rounded-full size-7 bg-orange-500 group-hover:bg-orange-600 group-focus-visible:bg-orange-600 ml-1">
          <p className="font-bold text-white text-sm leading-none group-hover:text-zinc-100 group-focus-visible:text-zinc-100">
            {itemAmount}
          </p>
        </div>
      )}
    </button>
  );
}
