import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI';
import type { ReuseUITimelineContentTheme } from './TimelineContent';
import { useTimelineContext } from './TimelineContext';
import type { ReuseUITimelinePointTheme } from './TimelinePoint';

export interface ReuseUITimelineItemTheme {
  root: {
    horizontal: string;
    vertical: string;
  };
  content: ReuseUITimelineContentTheme;
  point: ReuseUITimelinePointTheme;
}

export interface TimelineItemProps extends PropsWithChildren, ComponentProps<'li'> {
  theme?: DeepPartial<ReuseUITimelineItemTheme>;
}

export const TimelineItem: FC<TimelineItemProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.timeline.item, customTheme);
  const { horizontal } = useTimelineContext();

  return (
    <li
      data-testid='timeline-item'
      className={classNames(
        horizontal && theme.root.horizontal,
        !horizontal && theme.root.vertical,
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
};
