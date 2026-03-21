import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'rounded-md border-none px-4 py-2 text-sm font-semibold text-white',
        className,
      )}
      style={{ backgroundColor: '#d63384', cursor: 'pointer' }}
    >
      {children}
    </button>
  );
}
