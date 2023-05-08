import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';
import type { ReuseUIBreadcrumbItemTheme } from './BreadcrumbItem';
import BreadcrumbItem from './BreadcrumbItem';

export interface ReuseUIBreadcrumbTheme {
  root: ReuseUIBreadcrumbRootTheme;
  item: ReuseUIBreadcrumbItemTheme;
}

export interface ReuseUIBreadcrumbRootTheme {
  base: string;
  list: string;
}

export interface BreadcrumbComponentProps extends ComponentProps<'nav'> {
  theme?: DeepPartial<ReuseUIBreadcrumbRootTheme>;
}

const BreadcrumbComponent: FC<BreadcrumbComponentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.breadcrumb.root, customTheme);

  return (
    <nav aria-label='Breadcrumb' className={classNames(theme.base, className)} {...props}>
      <ol className={theme.list}>{children}</ol>
    </nav>
  );
};

BreadcrumbComponent.displayName = 'Breadcrumb';

export const Breadcrumb = Object.assign(BreadcrumbComponent, { Item: BreadcrumbItem });
