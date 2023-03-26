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

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        card: {
          root: {
            base: 'text-blue-100',
          },
        },
      };

      render(
        <ReuseUI theme={{ theme }}>
          <Card />
        </ReuseUI>,
      );

      expect(card()).toHaveClass('text-blue-100');
    });

    it('should use `children` classes', () => {
      const theme = {
        card: {
          root: {
            children: 'text-blue-900',
          },
        },
      };

      render(
        <ReuseUI theme={{ theme }}>
          <Card>
            <span aria-label='The content'>Some content</span>
          </Card>
        </ReuseUI>,
      );

      const children = screen.getByLabelText('The content');

      expect(children.parentElement).toHaveClass('text-blue-900');
    });

    it('should use `horizontal` classes', () => {
      const theme = {
        card: {
          root: {
            horizontal: {
              off: 'text-blue-200',
              on: 'text-blue-300',
            },
          },
        },
      };

      render(
        <ReuseUI theme={{ theme }}>
          <Card />
          <Card horizontal />
        </ReuseUI>,
      );

      const normalCard = cards()[0];
      const horizontalCard = cards()[1];

      expect(normalCard).toHaveClass('text-blue-200');
      expect(horizontalCard).toHaveClass('text-blue-300');
    });

    it('should use `href` classes', () => {
      const theme = {
        card: {
          root: {
            href: 'text-blue-700',
          },
        },
      };

      render(
        <ReuseUI theme={{ theme }}>
          <Card href='#'>My card</Card>
        </ReuseUI>,
      );

      expect(card()).toHaveClass('text-blue-700');
    });

    it('should use `img` classes', () => {
      const theme = {
        card: {
          img: {
            base: 'text-blue-400',
            horizontal: {
              off: 'bg-blue-500',
              on: 'bg-blue-600',
            },
          },
        },
      };

      render(
        <ReuseUI theme={{ theme }}>
          <Card imgAlt='Card with image' imgSrc='https://picsum.photos/500/300' />
          <Card
            horizontal
            imgAlt='Horizontal card with image'
            imgSrc='https://picsum.photos/500/300'
          />
        </ReuseUI>,
      );

      const cardWithImage = screen.getByAltText('Card with image');
      const horizontalCardWithImage = screen.getByAltText('Horizontal card with image');

      expect(cardWithImage).toHaveClass('text-blue-400 bg-blue-500');
      expect(horizontalCardWithImage).toHaveClass('bg-blue-600');
    });
  });
});
