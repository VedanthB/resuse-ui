import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';
import type { ReuseUIFooterLinkTheme } from './FooterLink';

export interface ReuseUIFooterLinkGroupTheme {
  base: string;
  link: ReuseUIFooterLinkTheme;
  col: string;
}

export interface FooterLinkGroupProps extends PropsWithChildren, ComponentProps<'ul'> {
  col?: boolean;
  theme?: DeepPartial<ReuseUIFooterLinkGroupTheme>;
}

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({
  children,
  className,
  col = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.footer.groupLink, customTheme);

  return (
    <ul
      data-testid='footer-groupLink'
      className={classNames(theme.base, col && theme.col, className)}
      {...props}
    >
      {children}
    </ul>
  );
};
