import {type PropsWithChildren} from 'react';
import {twMerge} from 'tailwind-merge';

export type CardProps = {
  className?: string;
};

export function Card({className, children}: PropsWithChildren<CardProps>) {
  return <div className={twMerge('rounded border border-gray-100 p-4', className)}>{children}</div>;
}
