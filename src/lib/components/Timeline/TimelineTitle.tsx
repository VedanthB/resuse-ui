import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI';
import type { ReuseUIHeadingLevel } from '../ReuseUI/ReuseUITheme';

export interface ReuseUITimelineTitleTheme {
  title: string;
}

export interface TimelineTitleProps extends PropsWithChildren, ComponentProps<'h1'> {
  as?: ReuseUIHeadingLevel;
  theme?: DeepPartial<ReuseUITimelineTitleTheme>;
}

export const TimelineTitle: FC<TimelineTitleProps> = ({
  as: Tag = 'h3',
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.timeline.item.content, customTheme).title;

  return (
    <Tag className={classNames(theme, className)} {...props}>
      {children}
    </Tag>
  );
};
