'use client';

import { ProductData } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { MdDelete } from 'react-icons/md';

interface RemoveFromCartProps {
  product: ProductData;
}

export default function RemoveFromCart({ product }: RemoveFromCartProps) {
  const cart = useCart();

  const handleDelete = () => cart.removeFromCart(product, true);

  return (
    <button
      type="button"
      className="text-red-900 font-bold text-lg"
      aria-label="Remove this item from cart"
      onClick={handleDelete}
    >
      <MdDelete className="text-xl" />
    </button>
  );
}
