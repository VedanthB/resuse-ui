import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI';

export interface ReuseUITableCellTheme {
  base: string;
}

export interface TableCellProps extends PropsWithChildren, ComponentProps<'td'> {
  theme?: DeepPartial<ReuseUITableCellTheme>;
}

export const TableCell: FC<TableCellProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.table.body.cell, customTheme);

  return (
    <td className={classNames(theme.base, className)} {...props}>
      {children}
    </td>
  );
};
