import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { HiStar } from 'react-icons/hi';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUISizes } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import { useRatingContext } from './RatingContext';

export interface ReuseUIRatingStarTheme {
  empty: string;
  filled: string;
  sizes: ReuseUIStarSizes;
}

export interface ReuseUIStarSizes extends Pick<ReuseUISizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface RatingStarProps extends ComponentProps<'svg'> {
  filled?: boolean;
  starIcon?: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<ReuseUIRatingStarTheme>;
}

export const RatingStar: FC<RatingStarProps> = ({
  className,
  filled = true,
  starIcon: Icon = HiStar,
  theme: customTheme = {},
  ...props
}) => {
  const { size = 'sm' } = useRatingContext();
  const theme = mergeDeep(useTheme().theme.rating.star, customTheme);

  return (
    <Icon
      data-testid='ReuseUI-rating-star'
      className={classNames(theme.sizes[size], theme[filled ? 'filled' : 'empty'], className)}
      {...props}
    />
  );
};
