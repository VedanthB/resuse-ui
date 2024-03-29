import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUICardTheme {
  root: ReuseUICardRootTheme;
  img: ReuseUICardImageTheme;
}

export interface ReuseUICardRootTheme {
  base: string;
  children: string;
  horizontal: {
    off: string;
    on: string;
  };
  href: string;
}

export interface ReuseUICardImageTheme {
  base: string;
  horizontal: {
    off: string;
    on: string;
  };
}

export interface CardProps extends PropsWithChildren<ComponentProps<'div'>> {
  horizontal?: boolean;
  href?: string;
  imgAlt?: string;
  imgSrc?: string;
  theme?: DeepPartial<ReuseUICardTheme>;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  horizontal,
  href,
  imgAlt,
  imgSrc,
  theme: customTheme = {},
  ...props
}): JSX.Element => {
  const Component = typeof href === 'undefined' ? 'div' : 'a';
  const theirProps = props as object;

  const theme = mergeDeep(useTheme().theme.card, customTheme);

  return (
    <Component
      className={classNames(
        theme.root.base,
        theme.root.horizontal[horizontal ? 'on' : 'off'],
        href && theme.root.href,
        className,
      )}
      data-testid='ReuseUI-card'
      href={href}
      {...theirProps}
    >
      {imgSrc && (
        <img
          alt={imgAlt ?? ''}
          className={classNames(theme.img.base, theme.img.horizontal[horizontal ? 'on' : 'off'])}
          src={imgSrc}
        />
      )}
      <div className={theme.root.children}>{children}</div>
    </Component>
  );
};
