import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';
import { useModalContext } from './ModalContext';

export interface ReuseUIModalBodyTheme {
  base: string;
  popup: string;
}

export interface ModalBodyProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<ReuseUIModalBodyTheme>;
}

export const ModalBody: FC<ModalBodyProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.modal.body, customTheme);
  const { popup } = useModalContext();

  return (
    <div
      className={classNames(
        theme.base,
        {
          [theme.popup]: popup,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
