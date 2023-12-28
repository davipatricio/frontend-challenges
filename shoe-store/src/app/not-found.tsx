import Button from '@/components/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col min-h-[inherit]">
      <h1 className="text-9xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl">Not Found</h2>
      <p className="mt-2 text-lg">Could not find the requested resource</p>

      <Link className="mt-4" href="/">
        <Button>Go back to home</Button>
      </Link>
    </div>
  );
}
