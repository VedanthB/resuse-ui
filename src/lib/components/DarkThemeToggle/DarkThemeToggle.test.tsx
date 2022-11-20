import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ReuseUI } from '../ReuseUI';
import { DarkThemeToggle } from './DarkThemeToggle';

describe('Dark theme toggle', () => {
  it('should toggle the theme when `Space` is pressed', async () => {
    const user = userEvent.setup();

    render(
      <ReuseUI>
        <DarkThemeToggle />
      </ReuseUI>,
    );

    await user.tab();
    await user.keyboard('[Space]');

    expect(screen.queryByLabelText('Currently light mode')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Currently dark mode')).toBeInTheDocument();
  });

  // TODO: make this test pass
  it('should toggle the theme with `usePreferences` is false', async () => {
    const user = userEvent.setup();

    render(
      <ReuseUI theme={{ usePreferences: false }}>
        <DarkThemeToggle />
      </ReuseUI>,
    );

    expect(screen.queryByLabelText('Currently light mode')).toBeInTheDocument();
    expect(screen.queryByLabelText('Currently dark mode')).not.toBeInTheDocument();

    await user.tab();
    await user.keyboard('[Space]');

    expect(screen.queryByLabelText('Currently light mode')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Currently dark mode')).toBeInTheDocument();
  });
});
