import UserCart from '@/components/cart/user-cart';
import clsx from 'clsx';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  display: 'swap',
  weight: ['700'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <p className={clsx('text-4xl font-bold', dmSans.className)}>Your Cart</p>
      <UserCart />
    </>
  );
}
