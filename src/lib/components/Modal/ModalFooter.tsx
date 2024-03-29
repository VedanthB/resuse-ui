import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';
import { useModalContext } from './ModalContext';

export interface ReuseUIModalFooterTheme {
  base: string;
  popup: string;
}

export interface ModalFooterProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<ReuseUIModalFooterTheme>;
}

export const ModalFooter: FC<ModalFooterProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.modal.footer, customTheme);
  const { popup } = useModalContext();

  return (
    <div
      className={classNames(
        theme.base,
        {
          [theme.popup]: !popup,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
