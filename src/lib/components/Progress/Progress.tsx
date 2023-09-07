import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIColors, ReuseUISizes } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUIProgressTheme {
  base: string;
  label: string;
  bar: string;
  color: ProgressColor;
  size: ProgressSizes;
}

export interface ProgressColor
  extends Pick<ReuseUIColors, 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple'> {
  [key: string]: string;
}

export interface ProgressSizes extends Pick<ReuseUISizes, 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface ProgressProps extends PropsWithChildren, ComponentProps<'div'> {
  labelProgress?: boolean;
  labelText?: boolean;
  progress: number;
  progressLabelPosition?: 'inside' | 'outside';
  size?: keyof ProgressSizes;
  textLabel?: string;
  textLabelPosition?: 'inside' | 'outside';
  theme?: DeepPartial<ReuseUIProgressTheme>;
}

export const Progress: FC<ProgressProps> = ({
  className,
  color = 'blue',
  labelProgress = false,
  labelText = false,
  progress,
  progressLabelPosition = 'inside',
  size = 'md',
  textLabel = 'progressbar',
  textLabelPosition = 'inside',
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const theme = mergeDeep(useTheme().theme.progress, customTheme);

  return (
    <>
      <div id={id} aria-label={textLabel} aria-valuenow={progress} role='progressbar' {...props}>
        {((textLabel && labelText && textLabelPosition === 'outside') ||
          (progress > 0 && labelProgress && progressLabelPosition === 'outside')) && (
          <div className={theme.label} data-testid='ReuseUI-progress-outer-label-container'>
            {textLabel && labelText && textLabelPosition === 'outside' && (
              <span data-testid='ReuseUI-progress-outer-text-label'>{textLabel}</span>
            )}
            {labelProgress && progressLabelPosition === 'outside' && (
              <span data-testid='ReuseUI-progress-outer-progress-label'>{progress}%</span>
            )}
          </div>
        )}

        <div className={classNames(theme.base, theme.size[size], className)}>
          <div
            style={{ width: `${progress}%` }}
            className={classNames(theme.bar, theme.color[color], theme.size[size])}
          >
            {textLabel && labelText && textLabelPosition === 'inside' && (
              <span data-testid='ReuseUI-progress-inner-text-label'>{textLabel}</span>
            )}
            {progress > 0 && labelProgress && progressLabelPosition === 'inside' && (
              <span data-testid='ReuseUI-progress-inner-progress-label'>{progress}%</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
