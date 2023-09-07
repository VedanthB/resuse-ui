import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI';
import type { ReuseUITableHeadCellTheme } from './TableHeadCell';

export interface ReuseUITableHeadTheme {
  base: string;
  cell: ReuseUITableHeadCellTheme;
}

export interface TableHeadProps extends PropsWithChildren, ComponentProps<'thead'> {
  theme?: DeepPartial<ReuseUITableHeadTheme>;
}

export const TableHead: FC<TableHeadProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.table, customTheme);

  return (
    <thead className={classNames(theme.head.base, className)} {...props}>
      <tr>{children}</tr>
    </thead>
  );
};
