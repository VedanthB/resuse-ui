import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../ReuseUI/ThemeContext';
import { DropdownDivider } from './DropdownDivider';

export interface ReuseUIDropdownHeaderTheme {
  header: string;
}

export const DropdownHeader: FC<PropsWithChildren & ComponentProps<'div'>> = ({
  children,
  className,
  ...props
}) => {
  const theme = useTheme().theme.dropdown.floating.header;

  return (
    <>
      <div className={classNames(theme, className)} {...props}>
        {children}
      </div>
      <DropdownDivider />
    </>
  );
};
