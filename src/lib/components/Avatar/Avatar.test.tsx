import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReuseUI } from '../ReuseUI';
import type { CustomReuseUITheme } from '../ReuseUI/ReuseUITheme';
import { Avatar } from './Avatar';

const status = () => screen.getByTestId('ReuseUI-avatar-status');

const img = () => screen.getByTestId('ReuseUI-avatar-img');

const initialsPlaceholder = () => screen.getByTestId('ReuseUI-avatar-initials-placeholder');

const initialsPlaceholderText = () =>
  screen.getByTestId('ReuseUI-avatar-initials-placeholder-text');

describe('Components / Avatar', () => {
  describe('Theme', () => {
    it('should use custom sizes', () => {
      const theme: CustomReuseUITheme = {
        avatar: {
          root: {
            size: {
              xxl: 'h-64 w-64',
            },
          },
        },
      };
      render(
        <ReuseUI theme={{ theme }}>
          <Avatar size='xxl' />
        </ReuseUI>,
      );

      expect(img()).toHaveClass('h-64 w-64');
    });

    it('should use custom colors', () => {
      const theme: CustomReuseUITheme = {
        avatar: {
          root: {
            color: {
              rose: 'ring-rose-500 dark:ring-rose-400',
            },
          },
        },
      };
      render(
        <ReuseUI theme={{ theme }}>
          <Avatar
            bordered
            color='rose'
            img='https://ReuseUI.com/docs/images/people/profile-picture-5.jpg'
            alt='Your avatar'
          />
        </ReuseUI>,
      );

      expect(img()).toHaveClass('ring-rose-500 dark:ring-rose-400');
    });
  });

  describe('Placeholder', () => {
    it('should display placeholder initials', () => {
      render(
        <ReuseUI>
          <Avatar placeholderInitials='RR' />
        </ReuseUI>,
      );

      expect(initialsPlaceholderText()).toHaveTextContent('RR');
    });

    it('should support border color with placeholder initials', () => {
      render(
        <ReuseUI>
          <Avatar placeholderInitials='RR' bordered color='success' />
        </ReuseUI>,
      );

      expect(initialsPlaceholder()).toHaveClass('ring-green-500 dark:ring-green-500');
    });
  });

  describe('Image', () => {
    it('should support custom image elements', () => {
      render(
        <ReuseUI>
          <Avatar img={(props) => <img referrerPolicy='no-referrer' {...props} />} />
        </ReuseUI>,
      );

      expect(img()).toHaveAttribute('referrerpolicy', 'no-referrer');
    });
  });

  describe('Status', () => {
    it('should have online status indicator', () => {
      render(
        <ReuseUI>
          <Avatar status='online' />
        </ReuseUI>,
      );

      expect(status()).toHaveClass('bg-green-400');
    });
  });
});
