import { ProductData } from '@/data/products';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';
import Button from '../button';
import Incrementor from '../cart/incrementor';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';

const dmSans = DM_Sans({
  display: 'swap',
  weight: ['500', '700'],
  subsets: ['latin'],
});

export interface ImageSliderProps {
  product: ProductData;
}

export default function ProductInfo({ product }: ImageSliderProps) {
  const cart = useCart();
  const alreadyOnCart = cart.items.some((item) => item.name === product.name);
  const [quantity, setQuantity] = useState(1);

  const onIncrement = () => {
    setQuantity(quantity + 1);
  };

  const onDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  const handleAddToCart = () => {
    cart.addToCart(product, quantity);
  };

  return (
    <div className="grid sm:grid-cols-2 gap-10 w-full">
      <div>
        <Image className="max-w-2xl w-full" src={product.image} alt="product" />
      </div>

      <div className="flex flex-col p-5 sm:p-10 shadow-2xl rounded-2xl ml-auto w-full">
        {/* Basic product info */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className={clsx('font-bold text-2xl', dmSans.className)}>{product.brand}</h1>
            <p className="text-gray-700 text-xl">{product.name}</p>
          </div>

          <span className={clsx('font-medium text-2xl', dmSans.className)}>${product.price}</span>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-300 my-8 -mx-5 md:-mx-9" />

        {/* Buy product */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <p className={clsx('font-bold text-xl my-4', dmSans.className)}>Quantity</p>
            <Incrementor onDecrement={onDecrement} onIncrement={onIncrement} quantity={quantity} />
          </div>

          <Button className="mt-10" onClick={handleAddToCart} disabled={alreadyOnCart}>
            {alreadyOnCart ? (
              <span className="font-bold text-lg">Already on Cart</span>
            ) : (
              <span className="font-bold text-lg">Add to Cart</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
