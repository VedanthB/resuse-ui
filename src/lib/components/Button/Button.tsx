import classNames from 'classnames';
import { forwardRef, type ComponentProps, type ReactNode } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type {
  ReuseUIBoolean,
  ReuseUIColors,
  ReuseUIGradientColors,
  ReuseUIGradientDuoToneColors,
  ReuseUISizes,
} from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import type { PositionInButtonGroup } from './ButtonGroup';
import ButtonGroup from './ButtonGroup';

export interface ReuseUIButtonTheme {
  base: string;
  fullSized: string;
  color: ReuseUIColors;
  disabled: string;
  gradient: ButtonGradientColors;
  gradientDuoTone: ButtonGradientDuoToneColors;
  inner: ReuseUIButtonInnerTheme;
  label: string;
  outline: ReuseUIButtonOutlineTheme;
  pill: ReuseUIBoolean;
  size: ButtonSizes;
}

export interface ReuseUIButtonInnerTheme {
  base: string;
  position: PositionInButtonGroup;
  outline: string;
}

export interface ReuseUIButtonOutlineTheme extends ReuseUIBoolean {
  color: ButtonOutlineColors;
  pill: ReuseUIBoolean;
}

export interface ButtonColors
  extends Pick<
    ReuseUIColors,
    'dark' | 'failure' | 'gray' | 'info' | 'light' | 'purple' | 'success' | 'warning'
  > {
  [key: string]: string;
}

export interface ButtonGradientColors extends ReuseUIGradientColors {
  [key: string]: string;
}

export interface ButtonGradientDuoToneColors extends ReuseUIGradientDuoToneColors {
  [key: string]: string;
}

export interface ButtonOutlineColors extends Pick<ReuseUIColors, 'gray'> {
  [key: string]: string;
}

export interface ButtonSizes extends Pick<ReuseUISizes, 'xs' | 'sm' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface ButtonProps extends Omit<ComponentProps<'button'>, 'color' | 'ref'> {
  color?: keyof ReuseUIColors;
  fullSized?: boolean;
  gradientDuoTone?: keyof ButtonGradientDuoToneColors;
  gradientMonochrome?: keyof ButtonGradientColors;
  href?: string;
  target?: string;
  label?: ReactNode;
  outline?: boolean;
  pill?: boolean;
  positionInGroup?: keyof PositionInButtonGroup;
  size?: keyof ButtonSizes;
  theme?: DeepPartial<ReuseUIButtonTheme>;
}

const ButtonComponent = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      className,
      color = 'info',
      disabled = false,
      fullSized,
      gradientDuoTone,
      gradientMonochrome,
      href,
      label,
      outline = false,
      pill = false,
      positionInGroup = 'none',
      size = 'md',
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const { buttonGroup: groupTheme, button: theme } = mergeDeep(useTheme().theme, customTheme);

    const isLink = typeof href !== 'undefined';
    const Component = isLink ? 'a' : 'button';
    const theirProps = props as object;

    return (
      <Component
        disabled={disabled}
        href={href}
        type={isLink ? undefined : 'button'}
        ref={ref as never}
        className={classNames(
          disabled && theme.disabled,
          !gradientDuoTone && !gradientMonochrome && theme.color[color],
          gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone],
          !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome],
          groupTheme.position[positionInGroup],
          outline && (theme.outline.color[color] ?? theme.outline.color.default),
          theme.base,
          theme.pill[pill ? 'on' : 'off'],
          fullSized && theme.fullSized,
          className,
        )}
        {...theirProps}
      >
        <span
          className={classNames(
            theme.inner.base,
            theme.inner.position[positionInGroup],
            theme.outline[outline ? 'on' : 'off'],
            theme.outline.pill[outline && pill ? 'on' : 'off'],
            theme.size[size],
            outline && !theme.outline.color[color] && theme.inner.outline,
          )}
        >
          <>
            {typeof children !== 'undefined' && children}
            {typeof label !== 'undefined' && (
              <span data-testid='ReuseUI-button-label' className={theme.label}>
                {label}
              </span>
            )}
          </>
        </span>
      </Component>
    );
  },
);

ButtonComponent.displayName = 'Button';
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
