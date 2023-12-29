'use client';

import { ProductData } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';

interface AutoIncrementorProps {
  product: ProductData;
}

interface ManualIncrementorProps {
  onIncrement: () => void;
  onDecrement: () => void;
  quantity: number;
}

type IncrementorProps = AutoIncrementorProps | ManualIncrementorProps;

export default function Incrementor(options: IncrementorProps) {
  if ('onIncrement' in options && 'onDecrement' in options) {
    return (
      <div className="flex items-center justify-between w-32 h-10 px-2 py-1 bg-gray-100 rounded-full">
        <button
          type="button"
          className="w-8 h-8 text-2xl font-bold text-gray-600 active:text-gray-800 hover:text-gray-800"
          onClick={options.onDecrement}
          aria-label="Decrement quantity"
        >
          -
        </button>
        <p className="text-lg font-medium text-gray-700">{options.quantity}</p>
        <button
          type="button"
          className="w-8 h-8 text-2xl font-bold text-gray-600 active:text-gray-800 hover:text-gray-800"
          onClick={options.onIncrement}
          aria-label="Increment quantity"
        >
          +
        </button>
      </div>
    );
  }

  const cart = useCart();

  const [productOnCart] = useState(cart.items.find((item) => item.name === options.product.name));

  const onIncrement = () => cart.addToCart(options.product);
  const onDecrement = () => cart.removeFromCart(options.product);

  if (!productOnCart) return null;

  return (
    <div className="flex items-center justify-between w-32 h-10 px-2 py-1 bg-gray-100 rounded-full">
      <button
        type="button"
        className="w-8 h-8 text-2xl font-bold text-gray-600 active:text-gray-800 hover:text-gray-800"
        onClick={onDecrement}
        aria-label="Decrement quantity"
      >
        -
      </button>
      <p className="text-lg font-medium text-gray-700">{productOnCart.quantity}</p>
      <button
        type="button"
        className="w-8 h-8 text-2xl font-bold text-gray-600 active:text-gray-800 hover:text-gray-800"
        onClick={onIncrement}
        aria-label="Increment quantity"
      >
        +
      </button>
    </div>
  );
}
