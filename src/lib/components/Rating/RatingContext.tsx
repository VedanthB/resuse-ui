import { createContext, useContext } from 'react';
import type { ReuseUIStarSizes } from './RatingStar';

export type RatingContext = {
  size?: keyof ReuseUIStarSizes;
};

export const RatingContext = createContext<RatingContext | undefined>(undefined);

export function useRatingContext(): RatingContext {
  const context = useContext(RatingContext);

  if (!context) {
    throw new Error('useRatingContext should be used within the RatingContext provider!');
  }

  return context;
}
