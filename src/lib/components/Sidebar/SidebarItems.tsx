import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface SidebarItemsProps extends PropsWithChildren, ComponentProps<'div'> {}

const SidebarItems: FC<SidebarItemsProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.sidebar.items;

  return (
    <div className={classNames(theme, className)} data-testid='ReuseUI-sidebar-items' {...props}>
      {children}
    </div>
  );
};

SidebarItems.displayName = 'Sidebar.Items';
export default SidebarItems;
