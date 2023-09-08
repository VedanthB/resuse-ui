import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI';

export interface ReuseUITimelineBodyTheme {
  body: string;
}

export interface TimelineBodyProps extends PropsWithChildren, ComponentProps<'p'> {
  theme?: DeepPartial<ReuseUITimelineBodyTheme>;
}

export const TimelineBody: FC<TimelineBodyProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.timeline.item.content, customTheme).body;

  return (
    <div className={classNames(theme, className)} {...props}>
      {children}
    </div>
  );
};
