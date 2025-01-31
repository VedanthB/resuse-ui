import classNames from 'classnames';
import React, { forwardRef, useId, ElementType, ReactNode, ComponentProps } from 'react';
import type { BadgeColors, DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { Badge } from '../Badge';
import type { ReuseUIColors } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

export interface ReuseUISidebarItemTheme {
  active: string;
  base: string;
  collapsed: {
    insideCollapse: string;
    noIcon: string;
  };
  content: {
    base: string;
  };
  icon: {
    base: string;
    active: string;
  };
  label: string;
}

export interface SidebarItemBaseProps extends Omit<ComponentProps<'div'>, 'ref'> {
  active?: boolean;
  as?: ElementType;
  href?: string;
  icon?: ElementType;
  label?: string;
  labelColor?: keyof SidebarItemLabelColors;
  theme?: DeepPartial<ReuseUISidebarItemTheme>;
  children?: ReactNode;
}

// ✅ Conditionally allow 'to' only when 'as' is 'Link'
export type SidebarItemProps = SidebarItemBaseProps & {
  as?: ElementType;
} & (
    | { as: typeof Link; to: LinkProps['to'] } // ✅ If `as={Link}`, require `to`
    | { as?: Exclude<ElementType, typeof Link>; to?: never }
  ); // ✅ Otherwise, forbid `to`

export interface SidebarItemLabelColors extends Pick<ReuseUIColors, 'gray'> {
  [key: string]: string;
}

const ListItem: React.FC<{
  id: string;
  isCollapsed: boolean;
  tooltipChildren: ReactNode;
  children: ReactNode; // ✅ Explicitly define children
}> = ({ id, isCollapsed, tooltipChildren, children }) => (
  <li>
    {isCollapsed ? (
      <Tooltip
        content={<TooltipContent id={id}>{tooltipChildren}</TooltipContent>}
        placement='right'
      >
        {children}
      </Tooltip>
    ) : (
      children
    )}
  </li>
);

const TooltipContent: React.FC<{ id: string; children: ReactNode }> = ({ id, children }) => (
  <Children id={id}>{children}</Children>
);

const Children: React.FC<{ id: string; children: ReactNode }> = ({ id, children }) => {
  const theme = useTheme().theme.sidebar.item;

  return (
    <span
      data-testid='ReuseUI-sidebar-item-content'
      id={`ReuseUI-sidebar-item-${id}`}
      className={classNames(theme.content.base)}
    >
      {children}
    </span>
  );
};

const SidebarItem = forwardRef<HTMLDivElement, SidebarItemProps>(
  (
    {
      active: isActive,
      as: Component = 'a', // ✅ Ensures `Component` is an `ElementType`
      children,
      className,
      icon: Icon,
      label,
      labelColor = 'info',
      theme: customTheme = {},
      to, // ✅ Extract `to` from props
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const { isCollapsed } = useSidebarContext();
    const { isInsideCollapse } = useSidebarItemContext();
    const theme: ReuseUISidebarItemTheme = mergeDeep(
      useTheme().theme.sidebar.item,
      customTheme as DeepPartial<ReuseUISidebarItemTheme>,
    );

    // ✅ Ensure `to` is passed ONLY if `Component` is `Link`
    const extraProps = Component === Link ? { to } : {};

    return (
      <ListItem id={id} isCollapsed={isCollapsed} tooltipChildren={children as ReactNode}>
        {React.createElement(
          Component as ElementType, // ✅ Ensures `Component` is correctly used in JSX
          {
            'aria-labelledby': `ReuseUI-sidebar-item-${id}`,
            ref,
            className: classNames(
              theme.base ?? '',
              isActive ? theme.active ?? '' : '',
              !isCollapsed && isInsideCollapse ? theme.collapsed?.insideCollapse ?? '' : '',
              className ?? '',
            ),
            ...extraProps, // ✅ Pass `to` only if `Component === Link`
            ...props,
          },
          <>
            {Icon &&
              React.createElement(Icon, {
                'aria-hidden': true,
                'data-testid': 'ReuseUI-sidebar-item-icon',
                className: classNames(
                  theme.icon?.base ?? '',
                  isActive ? theme.icon?.active ?? '' : '',
                ),
              })}
            {isCollapsed && !Icon && (
              <span className={theme.collapsed?.noIcon ?? ''}>
                {(typeof children === 'string' ? children.charAt(0).toLocaleUpperCase() : '?') ??
                  '?'}
              </span>
            )}
            {!isCollapsed && <Children id={id}>{children as ReactNode}</Children>}
            {!isCollapsed && label && (
              <Badge
                color={labelColor as keyof BadgeColors}
                data-testid='ReuseUI-sidebar-label'
                hidden={isCollapsed}
                className={theme.label ?? ''}
              >
                {typeof label === 'string' ? label : String(label)}
              </Badge>
            )}
          </>,
        )}
      </ListItem>
    );
  },
);

SidebarItem.displayName = 'Sidebar.Item';
export default SidebarItem;
