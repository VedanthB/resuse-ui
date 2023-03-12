import type { FC, HTMLAttributes } from 'react';
import { useEffect, useMemo } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import windowExists from '../../helpers/window-exists';
import defaultTheme from '../../theme/default';
import type { ReuseUITheme } from './ReuseUITheme';
import { ThemeContext, useTheme, useThemeMode } from './ThemeContext';

export interface ThemeProps {
  dark?: boolean;
  theme?: DeepPartial<ReuseUITheme>;
  usePreferences?: boolean;
}

interface ReuseUIProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const ReuseUI: FC<ReuseUIProps> = ({ children, theme = {} }) => {
  const { theme: customTheme = {}, dark, usePreferences = true } = theme;
  const [mode, setMode, toggleMode] = useThemeMode(usePreferences);

  const mergedTheme = mergeDeep(defaultTheme, customTheme);

  useEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark');
      }

      if (windowExists()) {
        document.documentElement.classList.add('dark');
      }
    }
  }, [dark, setMode]);

  const themeContextValue = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode, toggleMode, mergedTheme],
  );

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

export type { ReuseUITheme } from './ReuseUITheme';
export { useTheme, useThemeMode };
