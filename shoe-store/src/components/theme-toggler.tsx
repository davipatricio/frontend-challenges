'use client';

import { IoMdMoon } from 'react-icons/io';
import { IoMdSunny } from 'react-icons/io';
import { useTheme } from '@/hooks/useTheme';
import { useEffect } from 'react';

export default function ThemeToggler() {
  const theme = useTheme();
  const handleThemeChange = () => theme.toggleTheme();

  useEffect(() => {
    if (theme.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme.theme]);

  return (
    <button type="button" onClick={handleThemeChange}>
      {theme.theme === 'light' ? <IoMdSunny className="size-5" /> : <IoMdMoon className="size-5" />}
    </button>
  );
}
