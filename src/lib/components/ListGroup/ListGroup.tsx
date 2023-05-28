import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';
import type { ReuseUIListGroupItemTheme } from './ListGroupItem';
import { ListGroupItem } from './ListGroupItem';

export interface ReuseUIListGroupTheme {
  root: ReuseUIListGroupRootTheme;
  item: ReuseUIListGroupItemTheme;
}

export interface ReuseUIListGroupRootTheme {
  base: string;
}

export interface ListGroupProps extends PropsWithChildren, ComponentProps<'ul'> {
  theme?: DeepPartial<ReuseUIListGroupTheme>;
}

const ListGroupComponent: FC<ListGroupProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.listGroup, customTheme);

  return (
    <ul className={classNames(theme.root.base, className)} {...props}>
      {children}
    </ul>
  );
};

ListGroupComponent.displayName = 'ListGroup';
ListGroupItem.displayName = 'ListGroup.Item';

export const ListGroup = Object.assign(ListGroupComponent, { Item: ListGroupItem });
