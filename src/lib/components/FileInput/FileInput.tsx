import classNames from 'classnames';
import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';
import { HelperText } from '../HelperText';
import type { TextInputColors, TextInputSizes } from '../TextInput';

export interface ReuseUIFileInputTheme {
  root: ReuseUIFileInputRootTheme;
  field: ReuseUIFileInputFieldTheme;
}

export interface ReuseUIFileInputRootTheme {
  base: string;
}

export interface ReuseUIFileInputFieldTheme {
  base: string;
  input: ReuseUIFileInputFieldInputTheme;
}

export interface ReuseUIFileInputFieldInputTheme {
  base: string;
  colors: TextInputColors;
  sizes: TextInputSizes;
}

export interface FileInputProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color'> {
  color?: keyof TextInputColors;
  helperText?: ReactNode;
  sizing?: keyof TextInputSizes;
  theme?: DeepPartial<ReuseUIFileInputTheme>;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    { className, color = 'gray', helperText, sizing = 'md', theme: customTheme = {}, ...props },
    ref,
  ) => {
    const theme = mergeDeep(useTheme().theme.fileInput, customTheme);

    return (
      <>
        <div className={classNames(theme.root.base, className)}>
          <div className={theme.field.base}>
            <input
              className={classNames(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.sizes[sizing],
              )}
              {...props}
              type='file'
              ref={ref}
            />
          </div>
        </div>
        {helperText && <HelperText color={color}>{helperText}</HelperText>}
      </>
    );
  },
);

FileInput.displayName = 'FileInput';
