import { ProductData } from '@/app/data/products';
import clsx from 'clsx';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import Incrementor from './incrementor';
import RemoveFromCart from './remove-from-cart';

const dmSans = DM_Sans({
  display: 'swap',
  weight: ['700'],
  subsets: ['latin'],
});

export default function ProductCartCard(product: ProductData) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <Image src={product.image} alt={product.name} className="min-w-24 max-h-60 h-auto w-auto sm:max-w-48" />
      <div className="flex flex-col p-2 w-full max-w-96">
        <div className={clsx('flex justify-between flex-wrap text-zinc-900', dmSans.className)}>
          <p className="font-bold text-xl">{product.brand}</p>
          <p className="font-medium text-lg">${product.price}</p>
        </div>

        <p className="text-gray-700 text-lg mb-2">{product.name}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          <Incrementor product={product} />
          <RemoveFromCart product={product} />
        </div>
      </div>
    </div>
  );
}
