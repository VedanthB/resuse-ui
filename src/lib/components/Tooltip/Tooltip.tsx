import type { Placement } from '@floating-ui/core';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIFloatingTheme } from '../Floating';
import { Floating } from '../Floating';
import { useTheme } from '../ReuseUI/ThemeContext';

export type ReuseUITooltipTheme = ReuseUIFloatingTheme;

export interface TooltipProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'style'>> {
  animation?: false | `duration-${number}`;
  arrow?: boolean;
  content: string;
  placement?: 'auto' | Placement;
  style?: 'dark' | 'light' | 'auto';
  theme?: DeepPartial<ReuseUITooltipTheme>;
  trigger?: 'hover' | 'click';
}

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Tooltip: FC<TooltipProps> = ({
  animation = 'duration-300',
  arrow = true,
  children,
  className,
  content,
  placement = 'top',
  style = 'dark',
  theme: customTheme = {},
  trigger = 'hover',
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.tooltip, customTheme);

  return (
    <Floating
      animation={animation}
      arrow={arrow}
      content={content}
      placement={placement}
      style={style}
      theme={theme}
      trigger={trigger}
      className={className}
      {...props}
    >
      {children}
    </Floating>
  );
};
