import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';
import type { ReuseUIRatingAdvancedTheme } from './RatingAdvanced';
import { RatingAdvanced } from './RatingAdvanced';
import type { ReuseUIRatingStarTheme, ReuseUIStarSizes } from './RatingStar';
import { RatingStar } from './RatingStar';
import { RatingContext } from './RatingContext';

export interface ReuseUIRatingTheme {
  root: {
    base: string;
  };
  star: ReuseUIRatingStarTheme;
  advanced: ReuseUIRatingAdvancedTheme;
}

export interface RatingProps extends PropsWithChildren<ComponentProps<'div'>> {
  size?: keyof ReuseUIStarSizes;
  theme?: DeepPartial<ReuseUIRatingTheme>;
}

const RatingComponent: FC<RatingProps> = ({
  children,
  className,
  size = 'sm',
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.rating, customTheme);

  return (
    <RatingContext.Provider value={{ size }}>
      <div className={classNames(theme.root.base, className)} {...props}>
        {children}
      </div>
    </RatingContext.Provider>
  );
};

RatingComponent.displayName = 'Rating';
RatingStar.displayName = 'Rating.Star';
RatingAdvanced.displayName = 'Rating.Advanced';

export const Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
  Advanced: RatingAdvanced,
});
