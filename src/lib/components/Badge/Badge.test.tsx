import { render, screen } from '@testing-library/react';
import { HiCheck } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { Badge } from './Badge';

const badge = () => screen.getByTestId('flowbite-badge');

const icon = () => screen.getByTestId('flowbite-badge-icon');

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
});
