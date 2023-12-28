'use client';

import { ProductData } from '@/app/data/products';
import { useCart } from '@/app/hooks/useCart';
import { MdDelete } from 'react-icons/md';

interface RemoveFromCartProps {
  product: ProductData;
}

export default function RemoveFromCart({ product }: RemoveFromCartProps) {
  const cart = useCart();

  const handleDelete = () => cart.removeFromCart(product);

  return (
    <button
      type="button"
      className="text-red-900 font-bold text-lg"
      onClick={handleDelete}
      aria-label="Remove this item from cart"
    >
      <MdDelete className="text-xl" />
    </button>
  );
}
