import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIBoolean } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUIBreadcrumbItemTheme {
  base: string;
  chevron: string;
  href: ReuseUIBoolean;
  icon: string;
}

export interface BreadcrumbItemProps extends PropsWithChildren<Omit<ComponentProps<'li'>, 'ref'>> {
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<ReuseUIBreadcrumbItemTheme>;
}

const BreadcrumbItem = forwardRef<HTMLAnchorElement | HTMLSpanElement, BreadcrumbItemProps>(
  ({ children, className, href, icon: Icon, theme: customTheme = {}, ...props }, ref) => {
    const isLink = typeof href !== 'undefined';
    const Component = isLink ? 'a' : 'span';

    const theme = mergeDeep(useTheme().theme.breadcrumb.item, customTheme);

    return (
      <li className={classNames(theme.base, className)} {...props}>
        <HiOutlineChevronRight
          aria-hidden
          className={theme.chevron}
          data-testid='ReuseUI-breadcrumb-separator'
        />
        <Component
          ref={ref as never}
          className={theme.href[isLink ? 'on' : 'off']}
          data-testid='ReuseUI-breadcrumb-item'
          href={href}
        >
          {Icon && <Icon aria-hidden className={theme.icon} />}
          {children}
        </Component>
      </li>
    );
  },
);

BreadcrumbItem.displayName = 'Breadcrumb.Item';
export default BreadcrumbItem;
