import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIBoolean } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import type { ReuseUISidebarCollapseTheme } from './SidebarCollapse';
import SidebarCollapse from './SidebarCollapse';
import { SidebarContext } from './SidebarContext';
import type { ReuseUISidebarCTATheme } from './SidebarCTA';
import SidebarCTA from './SidebarCTA';
import type { ReuseUISidebarItemTheme } from './SidebarItem';
import SidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItems from './SidebarItems';
import type { ReuseUISidebarLogoTheme } from './SidebarLogo';
import SidebarLogo from './SidebarLogo';

export interface ReuseUISidebarTheme {
  root: {
    base: string;
    collapsed: ReuseUIBoolean;
    inner: string;
  };
  collapse: ReuseUISidebarCollapseTheme;
  cta: ReuseUISidebarCTATheme;
  item: ReuseUISidebarItemTheme;
  items: string;
  itemGroup: string;
  logo: ReuseUISidebarLogoTheme;
}

export interface SidebarProps extends PropsWithChildren, ComponentProps<'div'> {
  collapseBehavior?: 'collapse' | 'hide';
  collapsed?: boolean;
  theme?: DeepPartial<ReuseUISidebarTheme>;
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  collapseBehavior = 'collapse',
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.sidebar, customTheme);

  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <aside
        aria-label='Sidebar'
        hidden={isCollapsed && collapseBehavior === 'hide'}
        className={classNames(
          theme.root.base,
          theme.root.collapsed[isCollapsed ? 'on' : 'off'],
          className,
        )}
        {...props}
      >
        <div className={theme.root.inner}>{children}</div>
      </aside>
    </SidebarContext.Provider>
  );
};

SidebarComponent.displayName = 'Sidebar';
export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
});
