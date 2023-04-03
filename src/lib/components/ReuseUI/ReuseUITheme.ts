import { ReuseUISidebarTheme } from './../Sidebar/Sidebar';
import { ReuseUINavbarTheme } from './../Navbar/Navbar';
import { ReuseUICardTheme } from './../Card/Card';
import { ReuseUIBadgeTheme } from './../Badge/Badge';
import { ReuseUIAvatarGroupCounterTheme } from './../Avatar/AvatarGroupCounter';
import { ReuseUIAvatarTheme } from './../Avatar/Avatar';
import { ReuseUIAccordionTheme } from './../Accordion/Accordion';
import { DeepPartial, ReuseUIAvatarGroupTheme, ReuseUIDarkThemeToggleTheme } from '..';
import type { ReuseUIFloatingTheme } from '../Floating';
import { SpinnerColors, SpinnerSizes } from '../Spinner';

export type CustomReuseUITheme = DeepPartial<ReuseUITheme>;

export interface ReuseUITheme extends Record<string, unknown> {
  accordion: ReuseUIAccordionTheme;
  avatar: ReuseUIAvatarTheme;
  avatarGroupCounter: ReuseUIAvatarGroupCounterTheme;
  avatarGroup: ReuseUIAvatarGroupTheme;
  badge: ReuseUIBadgeTheme;
  card: ReuseUICardTheme;
  darkThemeToggle: ReuseUIDarkThemeToggleTheme;
  navbar: ReuseUINavbarTheme;
  sidebar: ReuseUISidebarTheme;

  spinner: {
    base: string;
    color: SpinnerColors;
    light: {
      off: {
        base: string;
        color: SpinnerColors;
      };
      on: {
        base: string;
        color: SpinnerColors;
      };
    };
    size: SpinnerSizes;
  };
  tooltip: ReuseUIFloatingTheme;
}

export interface ReuseUIBoolean {
  off: string;
  on: string;
}

export interface ReuseUIStateColors {
  info: string;
  failure: string;
  success: string;
  warning: string;
}

export interface ReuseUIColors extends ReuseUIStateColors {
  [key: string]: string;
  blue: string;
  cyan: string;
  dark: string;
  gray: string;
  green: string;
  indigo: string;
  light: string;
  lime: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
}

export interface ReuseUIGradientColors extends Omit<ReuseUIStateColors, 'warning'> {
  [key: string]: string;
  cyan: string;
  lime: string;
  pink: string;
  purple: string;
  teal: string;
}

export interface ReuseUIGradientDuoToneColors {
  cyanToBlue: string;
  greenToBlue: string;
  pinkToOrange: string;
  purpleToBlue: string;
  purpleToPink: string;
  redToYellow: string;
  tealToLime: string;
}

export type ReuseUIHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface ReuseUIPositions {
  'bottom-left': string;
  'bottom-right': string;
  'bottom-center': string;
  'top-left': string;
  'top-center': string;
  'top-right': string;
  'center-left': string;
  center: string;
  'center-right': string;
}

export interface ReuseUISizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}

export interface ReuseUIContentPositions {
  center: string;
}
