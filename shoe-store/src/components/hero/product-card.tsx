import { ProductData } from '@/data/products';
import clsx from 'clsx';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const dmSans = DM_Sans({
  display: 'swap',
  weight: ['700'],
  subsets: ['latin'],
});

export default function ProductCard({ brand, image, name, price }: ProductData) {
  return (
    <Link href={`/product/${brand}/${name}`} className="block p-7 hover:bg-zinc-200 dark:hover:bg-zinc-900 rounded-3xl">
      <div className="transition-all duration-500 hover:scale-105">
        <Image src={image} alt={name} placeholder="blur" />
        <h1 className={clsx('text-xl font-bold mt-2', dmSans.className)}>{brand}</h1>
        <p className="text-gray-700 dark:text-gray-300">{name}</p>
        <p className="font-medium text-lg mt-2">${price}</p>
      </div>
    </Link>
  );
}
