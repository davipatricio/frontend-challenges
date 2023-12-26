import FeaturedProductImage from '@/app/assets/products/featured-product.png';
import clsx from 'clsx';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Button from '../button';

const dmSans = DM_Sans({
  display: 'swap',
  weight: ['700'],
  subsets: ['latin'],
});

export default function FeaturedProduct() {
  return (
    <section className="flex flex-col items-center gap-7 w-full bg-gray-200 py-10 px-5 text-center rounded-2xl md:p-10 md:grid md:grid-cols-2 md:gap-10 lg:gap-20 lg:p-14 md:text-start">
      <Image
        className="m-auto md:hidden"
        src={FeaturedProductImage}
        alt="Featured product"
      />

      <div className="flex flex-col items-center gap-5 md:items-start">
        <div
          className={clsx('flex flex-col font-bold md:gap-2', dmSans.className)}
        >
          <p className="text-4xl text-orange-600">25% OFF</p>
          <p className="text-5xl">Summer Sale</p>
        </div>

        <div>
          <p className="text-gray-700 md:text-xl">
            Discover our summer styles with discount
          </p>
        </div>

        <Link href="/#drops" className="w-full md:mt-4 md:max-w-xs">
          <Button>
            <p>Shop now</p>
            <HiOutlineArrowRight className="text-xl" />
          </Button>
        </Link>
      </div>

      <div className="hidden md:block max-w-[490px] w-full h-fit m-auto">
        <Image
          className="h-auto w-full"
          src={FeaturedProductImage}
          alt="Featured product"
        />
      </div>
    </section>
  );
}
