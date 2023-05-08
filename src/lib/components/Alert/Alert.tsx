import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { HiX } from 'react-icons/hi';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIColors } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUIAlertTheme {
  base: string;
  borderAccent: string;
  closeButton: ReuseUIAlertCloseButtonTheme;
  color: ReuseUIColors;
  icon: string;
  rounded: string;
  wrapper: string;
}

export interface ReuseUIAlertCloseButtonTheme {
  base: string;
  color: ReuseUIColors;
  icon: string;
}

export interface AlertProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  additionalContent?: ReactNode;
  color?: keyof ReuseUIColors;
  icon?: FC<ComponentProps<'svg'>>;
  onDismiss?: boolean | (() => void);
  rounded?: boolean;
  theme?: DeepPartial<ReuseUIAlertTheme>;
  withBorderAccent?: boolean;
}

export const Alert: FC<AlertProps> = ({
  additionalContent,
  children,
  className,
  color = 'info',
  icon: Icon,
  onDismiss,
  rounded = true,
  theme: customTheme = {},
  withBorderAccent,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.alert, customTheme);

  return (
    <div
      className={classNames(
        theme.base,
        theme.color[color],
        rounded && theme.rounded,
        withBorderAccent && theme.borderAccent,
        className,
      )}
      role='alert'
      {...props}
    >
      <div className={theme.wrapper} data-testid='ReuseUI-alert-wrapper'>
        {Icon && <Icon className={theme.icon} data-testid='ReuseUI-alert-icon' />}
        <div>{children}</div>
        {typeof onDismiss === 'function' && (
          <button
            aria-label='Dismiss'
            className={classNames(theme.closeButton.base, theme.closeButton.color[color])}
            onClick={onDismiss}
            type='button'
          >
            <HiX aria-hidden className={theme.closeButton.icon} />
          </button>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  );
};
