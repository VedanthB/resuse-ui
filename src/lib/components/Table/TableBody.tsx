import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI';
import type { ReuseUITableCellTheme } from './TableCell';

export interface ReuseUITableBodyTheme {
  base: string;
  cell: ReuseUITableCellTheme;
}

export interface TableBodyProps extends PropsWithChildren, ComponentProps<'tbody'> {
  theme?: DeepPartial<ReuseUITableCellTheme>;
}

export const TableBody: FC<TableBodyProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.table.body, customTheme);

  return (
    <tbody className={classNames(theme.base, className)} {...props}>
      {children}
    </tbody>
  );
};
