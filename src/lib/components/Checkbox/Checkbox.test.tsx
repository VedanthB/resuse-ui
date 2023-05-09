import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Checkbox } from './Checkbox';
import { ReuseUI } from '../ReuseUI';

const checkbox = () => screen.getByRole('checkbox');

describe.concurrent('Components / Checkbox', () => {
  describe.concurrent('A11y', () => {
    it('should have role="checkbox" by default', () => {
      const checkbox = render(<Checkbox />).getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('Theme', () => {
    it('should use custom `base` classes', () => {
      const theme = {
        checkbox: {
          root: {
            base: 'bg-yellow-400 dark:bg-yellow-40',
          },
        },
      };
      render(
        <ReuseUI theme={{ theme }}>
          <Checkbox />
        </ReuseUI>,
      );

      expect(checkbox()).toHaveClass('bg-yellow-400 dark:bg-yellow-40');
    });
  });
});
