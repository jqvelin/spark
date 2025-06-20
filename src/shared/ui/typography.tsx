import type {
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren
} from 'react';

import { cn } from '../utils';

type TypographyProps<Variant extends ElementType> =
    PropsWithChildren<ComponentPropsWithRef<Variant>>;

export const H1 = (
  { className, children, ...props }: TypographyProps<'h1'>) => {
  return (
    <h1
      className={
        cn('scroll-m-20 text-center text-4xl font-extrabold'
        + ' tracking-tight text-balance', className)}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = (
  { className, children, ...props }: TypographyProps<'h2'>) => {
  return (
    <h2
      className={
        cn('scroll-m-20 border-b pb-2 text-3xl font-semibold'
        + ' tracking-tight first:mt-0', className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = (
  { className, children, ...props }: TypographyProps<'h3'>) => {
  return (
    <h3
      className={
        cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  );
};

export const H4 = (
  { className, children, ...props }: TypographyProps<'h4'>) => {
  return (
    <h4
      className={
        cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}
      {...props}
    >
      {children}
    </h4>
  );
};

export const P = (
  { className, children, ...props }: TypographyProps<'p'>) => {
  return (
    <h4
      className={
        cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    >
      {children}
    </h4>
  );
};
