import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';
import { Children, cloneElement, useMemo } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';
import type { ButtonProps } from './Button';

export interface ReuseUIButtonGroupTheme {
  base: string;
  position: PositionInButtonGroup;
}

export interface PositionInButtonGroup {
  none: string;
  start: string;
  middle: string;
  end: string;
}

export interface ButtonGroupProps
  extends ComponentProps<'div'>,
    PropsWithChildren,
    Pick<ButtonProps, 'outline' | 'pill'> {
  theme?: DeepPartial<ReuseUIButtonGroupTheme>;
}

const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  className,
  outline,
  pill,
  theme: customTheme = {},
  ...props
}: ButtonGroupProps) => {
  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonProps>[], (child, index) =>
        cloneElement(child, {
          outline,
          pill,
          positionInGroup:
            index === 0
              ? 'start'
              : index === (children as ReactElement<ButtonProps>[]).length - 1
              ? 'end'
              : 'middle',
        }),
      ),
    [children, outline, pill],
  );
  const theme = mergeDeep(useTheme().theme.buttonGroup, customTheme);

  return (
    <div className={classNames(theme.base, className)} role='group' {...props}>
      {items}
    </div>
  );
};

ButtonGroup.displayName = 'Button.Group';
export default ButtonGroup;
