import { render, screen } from '@testing-library/react';
import { HiCheck } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { ReuseUI } from '../ReuseUI';
import { Badge } from './Badge';

const badge = () => screen.getByTestId('ReuseUI-badge');

const icon = () => screen.getByTestId('ReuseUI-badge-icon');

const link = () => screen.getByRole('link');

describe('Components / Badge', () => {
  describe('rendering', () => {
    it('should render `<a>` given `href=".."`', () => {
      render(
        <Badge href='/' icon={HiCheck}>
          A badge with a link
        </Badge>,
      );

      expect(link()).toBeInTheDocument();
      expect(link()).toHaveAttribute('href', '/');
    });
  });

  describe('Theme', () => {
    it('should use custom colors', () => {
      const theme = {
        badge: {
          color: {
            primary:
              'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
          },
        },
      };

      render(
        <ReuseUI theme={{ theme }}>
          <Badge color='primary' href='/' icon={HiCheck}>
            A badge
          </Badge>
        </ReuseUI>,
      );

      expect(badge()).toHaveClass(
        'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
      );
    });
  });
});
