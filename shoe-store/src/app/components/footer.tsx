import Logo from './logo';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-zinc-900 text-white py-10 p-3 sm:px-10 md:px-16 lg:px-20 xl:px-28 border-t border-t-zinc-300 mt-10">
      <Logo />
      <p className="text-sm text-zinc-400">© 2023. All rights reserved</p>
    </footer>
  );
}
