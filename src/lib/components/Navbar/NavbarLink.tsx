import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import type { LinkProps } from 'react-router-dom';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { ReuseUIBoolean } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUINavbarLinkTheme {
  base: string;
  active: ReuseUIBoolean;
  disabled: ReuseUIBoolean;
}

export interface NavbarLinkProps
  extends PropsWithChildren<ComponentProps<'a'>>,
    Partial<Pick<LinkProps, 'to'>> {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  theme?: DeepPartial<ReuseUINavbarLinkTheme>;
  as?: ElementType;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  active,
  disabled,
  theme: customTheme = {},
  children,
  className,
  as: Component = 'a',
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.navbar.link, customTheme);

  return (
    <li>
      <Component
        className={classNames(
          theme.base,
          {
            [theme.active.on]: active,
            [theme.active.off]: !active && !disabled,
          },
          theme.disabled[disabled ? 'on' : 'off'],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    </li>
  );
};
