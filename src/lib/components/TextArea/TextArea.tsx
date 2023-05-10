import classNames from 'classnames';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIBoolean, ReuseUIColors } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import { HelperText } from '../HelperText';

export interface ReuseUITextareaTheme {
  base: string;
  colors: TextareaColors;
  withShadow: ReuseUIBoolean;
}

export interface TextareaColors
  extends Pick<ReuseUIColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string;
}

export interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'color' | 'ref'> {
  color?: keyof TextareaColors;
  helperText?: ReactNode;
  shadow?: boolean;
  theme?: DeepPartial<ReuseUITextareaTheme>;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, color = 'gray', helperText, shadow, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(useTheme().theme.textarea, customTheme);

    return (
      <>
        <textarea
          ref={ref}
          className={classNames(
            theme.base,
            theme.colors[color],
            theme.withShadow[shadow ? 'on' : 'off'],
            className,
          )}
          {...props}
        />
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

Textarea.displayName = 'Textarea';
