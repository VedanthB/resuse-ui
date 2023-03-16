import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIColors, ReuseUISizes } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUIBadgeTheme {
  root: ReuseUIBadgeRootTheme;
  icon: ReuseUIBadgeIconTheme;
}

export interface ReuseUIBadgeRootTheme {
  base: string;
  color: BadgeColors;
  href: string;
  size: BadgeSizes;
}

export interface ReuseUIBadgeIconTheme {
  off: string;
  on: string;
  size: BadgeSizes;
}

export interface BadgeColors
  extends Pick<
    ReuseUIColors,
    'failure' | 'gray' | 'indigo' | 'info' | 'pink' | 'purple' | 'success'
  > {
  [key: string]: string;
}

export interface BadgeSizes extends Pick<ReuseUISizes, 'xs' | 'sm'> {
  [key: string]: string;
}

export interface BadgeProps extends PropsWithChildren<Omit<ComponentProps<'span'>, 'color'>> {
  color?: keyof BadgeColors;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  size?: keyof BadgeSizes;
  theme?: DeepPartial<ReuseUIBadgeTheme>;
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = 'info',
  href,
  icon: Icon,
  size = 'xs',
  className,
  theme: customTheme = {},
  ...props
}): JSX.Element => {
  const theme = mergeDeep(useTheme().theme.badge, customTheme);

  const Content = (): JSX.Element => (
    <span
      className={classNames(
        theme.root.base,
        theme.root.color[color],
        theme.icon[Icon ? 'on' : 'off'],
        theme.root.size[size],
        className,
      )}
      data-testid='ReuseUI-badge'
      {...props}
    >
      {Icon && (
        <Icon aria-hidden className={theme.icon.size[size]} data-testid='ReuseUI-badge-icon' />
      )}
      {children && <span>{children}</span>}
    </span>
  );

  return href ? (
    <a className={theme.root.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  );
};
