import { DM_Sans } from 'next/font/google';
import FeaturedProduct from './components/hero/featured-product';
import DropsCarousel from './components/hero/drops-carousel';
import clsx from 'clsx';

const dmSans = DM_Sans({
  display: 'swap',
  weight: ['700'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <FeaturedProduct />

      <section className="mt-16" id="#drops">
        <h1
          className={clsx('text-2xl sm:text-3xl font-bold', dmSans.className)}
        >
          Explore our latest drops
        </h1>

        <DropsCarousel />
      </section>
    </>
  );
}
