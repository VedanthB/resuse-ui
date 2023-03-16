import { ReuseUIBadgeTheme } from './../Badge/Badge';
import { ReuseUIAvatarGroupCounterTheme } from './../Avatar/AvatarGroupCounter';
import { ReuseUIAvatarTheme } from './../Avatar/Avatar';
import { ReuseUIAccordionTheme } from './../Accordion/Accordion';
import { DeepPartial, ReuseUIAvatarGroupTheme } from '..';
import type { ReuseUIFloatingTheme } from '../Floating';

import type { SidebarCTAColors } from '../Sidebar/SidebarCTA';
import { SpinnerColors, SpinnerSizes } from '../Spinner';

export type CustomReuseUITheme = DeepPartial<ReuseUITheme>;

export interface ReuseUITheme extends Record<string, unknown> {
  accordion: ReuseUIAccordionTheme;
  avatar: ReuseUIAvatarTheme;
  avatarGroupCounter: ReuseUIAvatarGroupCounterTheme;
  avatarGroup: ReuseUIAvatarGroupTheme;
  badge: ReuseUIBadgeTheme;
  card: {
    base: string;
    children: string;
    horizontal: {
      off: string;
      on: string;
    };
    href: string;
    img: {
      base: string;
      horizontal: {
        off: string;
        on: string;
      };
    };
  };
  darkThemeToggle: {
    base: string;
    icon: string;
  };
  navbar: {
    base: string;
    rounded: ReuseUIBoolean;
    bordered: ReuseUIBoolean;
    inner: {
      base: string;
      fluid: ReuseUIBoolean;
    };
    brand: string;
    collapse: {
      base: string;
      list: string;
      hidden: ReuseUIBoolean;
    };
    link: {
      base: string;
      active: ReuseUIBoolean;
      disabled: ReuseUIBoolean;
    };
    toggle: {
      base: string;
      icon: string;
    };
  };
  sidebar: {
    base: string;
    collapsed: ReuseUIBoolean;
    inner: string;
    collapse: {
      button: string;
      icon: {
        base: string;
        open: ReuseUIBoolean;
      };
      label: {
        base: string;
        icon: string;
      };
      list: string;
    };
    cta: {
      base: string;
      color: SidebarCTAColors;
    };
    item: {
      active: string;
      base: string;
      collapsed: {
        insideCollapse: string;
        noIcon: string;
      };
      content: {
        base: string;
      };
      icon: {
        base: string;
        active: string;
      };
    };
    items: string;
    itemGroup: string;
    logo: {
      base: string;
      collapsed: ReuseUIBoolean;
      img: string;
    };
  };
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
