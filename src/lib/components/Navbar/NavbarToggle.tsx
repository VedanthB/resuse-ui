import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export interface ReuseUINavbarToggleTheme {
  base: string;
  icon: string;
}

export interface NavbarToggleProps extends ComponentProps<'button'> {
  barIcon?: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<ReuseUINavbarToggleTheme>;
}

export const NavbarToggle: FC<NavbarToggleProps> = ({
  barIcon: BarIcon = GoThreeBars,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const { isOpen, setIsOpen } = useNavbarContext();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const theme = mergeDeep(useTheme().theme.navbar.toggle, customTheme);

  return (
    <button
      className={classNames(theme.base, className)}
      data-testid='ReuseUI-navbar-toggle'
      onClick={handleClick}
      {...props}
    >
      <span className='sr-only'>Open main menu</span>
      <BarIcon className={theme.icon} />
    </button>
  );
};
