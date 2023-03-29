import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { ReuseUIBoolean } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export interface ReuseUINavbarCollapseTheme {
  base: string;
  list: string;
  hidden: ReuseUIBoolean;
}

export interface NavbarCollapseProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<ReuseUINavbarCollapseTheme>;
}

export const NavbarCollapse: FC<NavbarCollapseProps> = ({
  theme: customTheme = {},
  children,
  className,
  ...props
}): JSX.Element => {
  const { isOpen } = useNavbarContext();

  const theme = mergeDeep(useTheme().theme.navbar.collapse, customTheme);

  return (
    <div
      className={classNames(theme.base, theme.hidden[!isOpen ? 'on' : 'off'], className)}
      data-testid='ReuseUI-navbar-collapse'
      {...props}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  );
};
