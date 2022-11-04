import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import { useTheme } from '../ReuseUI';

import { useSidebarContext } from './SidebarContext';

export interface SidebarLogoProps extends PropsWithChildren<ComponentProps<'a'>> {
  className?: string;
  href: string;
  img: string;
  imgAlt?: string;
}

const SidebarLogo: FC<SidebarLogoProps> = ({
  children,
  href,
  img,
  imgAlt = '',
  className,
  ...props
}) => {
  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const theme = useTheme().theme.sidebar.logo;

  return (
    <a
      aria-labelledby={`ReuseUI-sidebar-logo-${id}`}
      className={classNames(theme.base, className)}
      href={href}
      {...props}
    >
      <img alt={imgAlt} className={theme.img} src={img} />
      <span
        className={theme.collapsed[isCollapsed ? 'on' : 'off']}
        id={`ReuseUI-sidebar-logo-${id}`}
      >
        {children}
      </span>
    </a>
  );
};

SidebarLogo.displayName = 'Sidebar.Logo';
export default SidebarLogo;
