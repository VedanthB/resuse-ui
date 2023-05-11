import classNames from 'classnames';
import type { ComponentProps } from 'react';
import { forwardRef } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUIRadioTheme {
  root: ReuseUIRadioRootTheme;
}

export interface ReuseUIRadioRootTheme {
  base: string;
}

export interface RadioProps extends Omit<ComponentProps<'input'>, 'ref' | 'type'> {
  theme?: DeepPartial<ReuseUIRadioTheme>;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(useTheme().theme.radio, customTheme);

    return (
      <input ref={ref} type='radio' className={classNames(theme.root.base, className)} {...props} />
    );
  },
);

Radio.displayName = 'Radio';
