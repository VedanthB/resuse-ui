import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';
import type { ReuseUIFooterBrandTheme } from './FooterBrand';
import { FooterBrand } from './FooterBrand';
import type { ReuseUIFooterCopyrightTheme } from './FooterCopyright';
import { FooterCopyright } from './FooterCopyright';
import type { ReuseUIFooterDividerTheme } from './FooterDivider';
import { FooterDivider } from './FooterDivider';
import type { ReuseUIFooterIconTheme } from './FooterIcon';
import { FooterIcon } from './FooterIcon';
import { FooterLink } from './FooterLink';
import type { ReuseUIFooterLinkGroupTheme } from './FooterLinkGroup';
import { FooterLinkGroup } from './FooterLinkGroup';
import type { ReuseUIFooterTitleTheme } from './FooterTitle';
import { FooterTitle } from './FooterTitle';

export interface ReuseUIFooterTheme {
  brand: ReuseUIFooterBrandTheme;
  copyright: ReuseUIFooterCopyrightTheme;
  divider: ReuseUIFooterDividerTheme;
  groupLink: ReuseUIFooterLinkGroupTheme;
  icon: ReuseUIFooterIconTheme;
  root: ReuseUIFooterRootTheme;
  title: ReuseUIFooterTitleTheme;
}

export interface ReuseUIFooterRootTheme {
  base: string;
  bgDark: string;
  container: string;
}

export interface FooterProps extends ComponentProps<'footer'> {
  bgDark?: boolean;
  container?: boolean;
  theme?: DeepPartial<ReuseUIFooterTheme>;
}

export const FooterComponent: FC<FooterProps> = ({
  bgDark = false,
  children,
  className,
  container = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.footer, customTheme);

  return (
    <footer
      data-testid='ReuseUI-footer'
      className={classNames(
        theme.root.base,
        bgDark && theme.root.bgDark,
        container && theme.root.container,
        className,
      )}
      {...props}
    >
      {children}
    </footer>
  );
};

FooterComponent.displayName = 'Footer';
FooterCopyright.displayName = 'Footer.Copyright';
FooterLink.displayName = 'Footer.Link';
FooterBrand.displayName = 'Footer.Brand';
FooterLinkGroup.displayName = 'Footer.LinkGroup';
FooterIcon.displayName = 'Footer.Icon';
FooterTitle.displayName = 'Footer.Title';
FooterDivider.displayName = 'Footer.Divider';

export const Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Icon: FooterIcon,
  Title: FooterTitle,
  Divider: FooterDivider,
});
