import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUIDropdownItemTheme {
  base: string;
  icon: string;
}

export interface DropdownItemProps extends PropsWithChildren, ComponentProps<'li'> {
  icon?: FC<ComponentProps<'svg'>>;
  onClick?: () => void;
  theme?: DeepPartial<ReuseUIDropdownItemTheme>;
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  className,
  icon: Icon,
  onClick,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.dropdown.floating.item, customTheme);

  return (
    <li className={classNames(theme.base, className)} onClick={onClick} {...props}>
      {Icon && <Icon className={theme.icon} />}
      {children}
    </li>
  );
};
