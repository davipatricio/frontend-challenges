import Logo from './logo';
import ViewCart from './view-cart';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 sm:px-10 md:px-16 lg:px-20 xl:px-28 border-b border-b-zinc-300 mb-5">
      <Logo variant="black" />
      <ViewCart />
    </header>
  );
}
