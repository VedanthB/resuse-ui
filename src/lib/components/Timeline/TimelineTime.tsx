import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI';

export interface ReuseUITimelineTimeTheme {
  time: string;
}

export interface TimelineTimeProps extends PropsWithChildren, ComponentProps<'time'> {
  theme?: DeepPartial<ReuseUITimelineTimeTheme>;
}

export const TimelineTime: FC<TimelineTimeProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.timeline.item.content, customTheme).time;

  return (
    <time className={classNames(theme, className)} {...props}>
      {children}
    </time>
  );
};
