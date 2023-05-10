import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIStateColors } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUILabelTheme {
  root: ReuseUILabelRootTheme;
}

export interface ReuseUILabelRootTheme {
  base: string;
  colors: LabelColors;
  disabled: string;
}

export interface LabelColors extends ReuseUIStateColors {
  [key: string]: string;
  default: string;
}

export interface LabelProps extends PropsWithChildren<Omit<ComponentProps<'label'>, 'color'>> {
  color?: keyof LabelColors;
  disabled?: boolean;
  theme?: DeepPartial<ReuseUILabelTheme>;
  value?: string;
}

export const Label: FC<LabelProps> = ({
  children,
  className,
  color = 'default',
  disabled = false,
  theme: customTheme = {},
  value,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.label, customTheme);

  return (
    <label
      className={classNames(
        theme.root.base,
        theme.root.colors[color],
        disabled ?? theme.root.disabled,
        className,
      )}
      {...props}
    >
      {value ?? children ?? ''}
    </label>
  );
};
