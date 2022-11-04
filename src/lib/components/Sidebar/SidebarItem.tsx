import classNames from 'classnames';
import { ComponentProps, ElementType, FC, forwardRef, PropsWithChildren, useId } from 'react';
import { Badge } from '../Badge';
import type { ReuseUIColors } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';

export interface SidebarItemProps
  extends PropsWithChildren<Omit<ComponentProps<'div'>, 'ref'> & Record<string, unknown>> {
  active?: boolean;
  as?: ElementType;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  label?: string;
  labelColor?: keyof SidebarItemLabelColors;
}

export interface SidebarItemLabelColors extends Pick<ReuseUIColors, 'gray'> {
  [key: string]: string;
}

const SidebarItem = forwardRef<Element, SidebarItemProps>(
  (
    {
      as: Component = 'a',
      children,
      icon: Icon,
      active: isActive,
      label,
      labelColor = 'info',
      className,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const { isCollapsed } = useSidebarContext();
    const { isInsideCollapse } = useSidebarItemContext();
    const theme = useTheme().theme.sidebar.item;

    const ListItem: FC<PropsWithChildren> = ({ children: wrapperChildren }) => (
      <li>
        {isCollapsed ? (
          <Tooltip content={<TooltipContent>{children}</TooltipContent>} placement='right'>
            {wrapperChildren}
          </Tooltip>
        ) : (
          wrapperChildren
        )}
      </li>
    );

    const TooltipContent: FC<PropsWithChildren> = ({ children }) => <Children>{children}</Children>;

    const Children: FC<PropsWithChildren> = ({ children }) => (
      <span
        className={classNames(theme.content.base)}
        data-testid='ReuseUI-sidebar-item-content'
        id={`ReuseUI-sidebar-item-${id}`}
      >
        {children}
      </span>
    );

    return (
      <ListItem>
        <Component
          aria-labelledby={`ReuseUI-sidebar-item-${id}`}
          className={classNames(
            theme.base,
            isActive && theme.active,
            !isCollapsed && isInsideCollapse && theme.collapsed.insideCollapse,
            className,
          )}
          ref={ref}
          {...props}
        >
          {Icon && (
            <Icon
              aria-hidden
              className={classNames(theme.icon.base, isActive && theme.icon.active)}
              data-testid='ReuseUI-sidebar-item-icon'
            />
          )}
          {isCollapsed && !Icon && (
            <span className={theme.collapsed.noIcon}>
              {(children as string).charAt(0).toLocaleUpperCase() ?? '?'}
            </span>
          )}
          {!isCollapsed && <Children>{children}</Children>}
          {!isCollapsed && label && (
            <Badge color={labelColor} hidden={isCollapsed}>
              {label}
            </Badge>
          )}
        </Component>
      </ListItem>
    );
  },
);

SidebarItem.displayName = 'Sidebar.Item';
export default SidebarItem;
