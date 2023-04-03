import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIColors } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import { useSidebarContext } from './SidebarContext';

export interface ReuseUISidebarCTATheme {
  base: string;
  color: ReuseUISidebarCTAColors;
}

export interface SidebarCTAProps extends PropsWithChildren, Omit<ComponentProps<'div'>, 'color'> {
  color?: keyof ReuseUISidebarCTAColors;
  theme?: DeepPartial<ReuseUISidebarCTATheme>;
}

export interface ReuseUISidebarCTAColors
  extends Pick<
    ReuseUIColors,
    | 'blue'
    | 'dark'
    | 'failure'
    | 'gray'
    | 'green'
    | 'light'
    | 'purple'
    | 'red'
    | 'success'
    | 'warning'
    | 'yellow'
  > {
  [key: string]: string;
}

const SidebarCTA: FC<SidebarCTAProps> = ({
  children,
  color = 'info',
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isCollapsed } = useSidebarContext();
  const theme = mergeDeep(useTheme().theme.sidebar.cta, customTheme);

  return (
    <div
      data-testid='sidebar-cta'
      hidden={isCollapsed}
      className={classNames(theme.base, theme.color[color], className)}
      {...props}
    >
      {children}
    </div>
  );
};

SidebarCTA.displayName = 'Sidebar.CTA';
export default SidebarCTA;
