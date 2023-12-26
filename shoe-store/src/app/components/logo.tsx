import LogoImage from '@/app/assets/branding/logo.png';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'white' | 'black';
}

export default function Logo({ variant = 'white' }: LogoProps) {
  return (
    <Link className="flex items-center gap-2 hover:text-zinc-700" href="/">
      <Image src={LogoImage} alt="Website logo" className="flex-shrink-0 size-7" />
      <span className={clsx('uppercase font-semibold text-lg text-white', variant === 'black' && 'text-black')}>Sun Co.</span>
    </Link>
  );
}
