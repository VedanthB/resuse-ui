import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI';

export interface ReuseUITableHeadCellTheme {
  base: string;
}

export interface TableHeadCellProps extends PropsWithChildren, ComponentProps<'th'> {
  theme?: DeepPartial<ReuseUITableHeadCellTheme>;
}

export const TableHeadCell: FC<TableHeadCellProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.table.head.cell, customTheme);

  return (
    <th className={classNames(theme.base, className)} {...props}>
      {children}
    </th>
  );
};
