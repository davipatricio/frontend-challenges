import Image from 'next/image';
import FeaturedProductImage from '@/app/assets/products/featured-product.png';
import { DM_Sans } from 'next/font/google';
import clsx from 'clsx';
import Button from './button';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Link from 'next/link';

const dmSans = DM_Sans({
  display: 'swap',
  weight: ['700'],
  subsets: ['latin'],
});

export default function FeaturedProduct() {
  return (
    <div className="flex flex-col items-center gap-5 w-full bg-gray-200 py-10 px-5 text-center rounded-2xl">
      <Image src={FeaturedProductImage} alt="Featured product" />

      <div className={clsx('flex flex-col font-bold', dmSans.className)}>
        <p className="text-4xl text-orange-600">25% OFF</p>
        <p className="text-5xl">Summer Sale</p>
      </div>

      <div>
        <p className="text-gray-700">
          Discover our summer styles with discount
        </p>
      </div>

      <Link href="/#drops" className="w-full">
        <Button>
          <p>Shop now</p>
          <HiOutlineArrowRight className="text-xl" />
        </Button>
      </Link>
    </div>
  );
}
