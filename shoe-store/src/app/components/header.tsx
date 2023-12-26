import Logo from '@/app/assets/branding/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import ViewCart from './view-cart';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 sm:px-10 md:px-16 lg:px-20 xl:px-28 border-b border-b-zinc-300 mb-5">
      <Link className="flex gap-2 hover:text-zinc-700" href="/">
        <Image src={Logo} alt="Website logo" />

        <span className="uppercase font-semibold text-lg">Sun Co.</span>
      </Link>

      <ViewCart itemAmount={1} />
    </header>
  );
}
