import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI';
import type { ReuseUITableBodyTheme } from './TableBody';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import type { TableContextType } from './TableContext';
import { TableContext } from './TableContext';
import type { ReuseUITableHeadTheme } from './TableHead';
import { TableHead } from './TableHead';
import { TableHeadCell } from './TableHeadCell';
import type { ReuseUITableRowTheme } from './TableRow';
import { TableRow } from './TableRow';

export interface ReuseUITableTheme {
  root: ReuseUITableRootTheme;
  head: ReuseUITableHeadTheme;
  row: ReuseUITableRowTheme;
  body: ReuseUITableBodyTheme;
}

export interface ReuseUITableRootTheme {
  base: string;
  shadow: string;
  wrapper: string;
}

export interface TableProps extends PropsWithChildren, ComponentProps<'table'>, TableContextType {
  theme?: DeepPartial<ReuseUITableTheme>;
}

const TableComponent: FC<TableProps> = ({
  children,
  className,
  hoverable,
  striped,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.table, customTheme);

  return (
    <div data-testid='table-element' className={classNames(theme.root.wrapper)}>
      <TableContext.Provider value={{ striped, hoverable }}>
        <div className={classNames(theme.root.shadow, className)}></div>
        <table className={classNames(theme.root.base, className)} {...props}>
          {children}
        </table>
      </TableContext.Provider>
    </div>
  );
};

TableComponent.displayName = 'Table';
TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';
TableHeadCell.displayName = 'Table.HeadCell';

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
