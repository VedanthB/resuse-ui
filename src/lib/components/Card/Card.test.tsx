import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReuseUI } from '../ReuseUI';
import { Card } from './Card';

const card = () => screen.getByTestId('ReuseUI-card');

const cards = () => screen.getAllByTestId('ReuseUI-card');

describe('Components / Card', () => {
  describe('A11y', () => {
    it('should allow `aria-label`', () => {
      render(<Card aria-label='My Card' />);

      expect(card()).toHaveAccessibleName('My Card');
    });

    it('should provide `<img />` with a alternative text given `imgSrc="..."`  and `imgAlt="..."` ', () => {
      render(
        <Card
          imgAlt='Meaningful alt text for an image that is not purely decorative'
          imgSrc='https://picsum.photos/500/300'
        />,
      );

      const img = screen.getByAltText(
        'Meaningful alt text for an image that is not purely decorative',
      );

      expect(img).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('should render an `<a>` given a `href="..."` ', () => {
      render(<Card href='#' />);

      expect(screen.getByRole('link')).toEqual(card());
    });

    it('should render an `<img>` given `imgSrc=".."`', () => {
      render(<Card imgSrc='https://picsum.photos/500/300' />);

      const img = screen.getByRole('img');

      expect(card()).toContainElement(img);
    });
  });
});
