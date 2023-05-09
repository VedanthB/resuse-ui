import classNames from 'classnames';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUICheckboxTheme {
  root: ReuseUICheckboxRootTheme;
}
export interface ReuseUICheckboxRootTheme {
  base: string;
}

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type' | 'ref'> {
  theme?: DeepPartial<ReuseUICheckboxTheme>;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(useTheme().theme.checkbox, customTheme);

    return (
      <input
        ref={ref}
        type='checkbox'
        className={classNames(theme.root.base, className)}
        {...props}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';
