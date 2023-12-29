'use client';

import clsx from 'clsx';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={clsx(
        'bg-zinc-900 flex gap-3 items-center justify-center py-4 px-4 text-white w-full rounded-xl font-bold',
        'disabled:bg-zinc-900/80 disabled:cursor-not-allowed',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
