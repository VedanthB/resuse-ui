import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReuseUI } from '../ReuseUI';
import { Radio } from './Radio';

describe.concurrent('Components / Radio', () => {
  describe.concurrent('A11y', () => {
    it('should have role="radio" by default', () => {
      const radio = render(<Radio />).getByRole('radio');

      expect(radio).toBeInTheDocument();
    });
  });

  describe('Theme', () => {
    it('should use custom `base` classes', () => {
      const theme = {
        radio: {
          root: {
            base: 'bg-yellow-400 dark:bg-yellow-40',
          },
        },
      };
      render(
        <ReuseUI theme={{ theme }}>
          <Radio />
        </ReuseUI>,
      );

      expect(radio()).toHaveClass('bg-yellow-400 dark:bg-yellow-40');
    });
  });
});

const radio = () => screen.getByRole('radio');
