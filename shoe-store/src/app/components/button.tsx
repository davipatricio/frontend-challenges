'use client';

import clsx from 'clsx';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={clsx(
        'bg-zinc-900 flex gap-3 items-center justify-center py-4 text-white w-full rounded-xl font-bold',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
