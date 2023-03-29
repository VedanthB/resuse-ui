import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { ReuseUIBoolean } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import { ReuseUINavbarBrandTheme, NavbarBrand } from './NavbarBrand';
import { ReuseUINavbarCollapseTheme, NavbarCollapse } from './NavbarCollapse';
import { NavbarContext } from './NavbarContext';
import { ReuseUINavbarLinkTheme, NavbarLink } from './NavbarLink';
import { ReuseUINavbarToggleTheme, NavbarToggle } from './NavbarToggle';

export interface ReuseUINavbarTheme {
  root: ReuseUINavbarRootTheme;
  brand: ReuseUINavbarBrandTheme;
  collapse: ReuseUINavbarCollapseTheme;
  link: ReuseUINavbarLinkTheme;
  toggle: ReuseUINavbarToggleTheme;
}

export interface ReuseUINavbarRootTheme {
  base: string;
  rounded: ReuseUIBoolean;
  bordered: ReuseUIBoolean;
  inner: {
    base: string;
    fluid: ReuseUIBoolean;
  };
}

export interface NavbarComponentProps extends PropsWithChildren<ComponentProps<'nav'>> {
  menuOpen?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  border?: boolean;
  theme?: DeepPartial<ReuseUINavbarRootTheme>;
}

const NavbarComponent: FC<NavbarComponentProps> = ({
  children,
  menuOpen,
  fluid = false,
  rounded,
  border,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  const theme = mergeDeep(useTheme().theme.navbar.root, customTheme);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav
        className={classNames(
          theme.base,
          theme.bordered[border ? 'on' : 'off'],
          theme.rounded[rounded ? 'on' : 'off'],
          className,
        )}
        {...props}
      >
        <div className={classNames(theme.inner.base, theme.inner.fluid[fluid ? 'on' : 'off'])}>
          {children}
        </div>
      </nav>
    </NavbarContext.Provider>
  );
};

NavbarComponent.displayName = 'Navbar';
NavbarBrand.displayName = 'Navbar.Brand';
NavbarCollapse.displayName = 'Navbar.Collapse';
NavbarLink.displayName = 'Navbar.Link';
NavbarToggle.displayName = 'Navbar.Toggle';

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
