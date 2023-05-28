import {
  DeepPartial,
  ReuseUIAccordionTheme,
  ReuseUIAlertTheme,
  ReuseUIAvatarGroupCounterTheme,
  ReuseUIAvatarGroupTheme,
  ReuseUIAvatarTheme,
  ReuseUIBadgeTheme,
  ReuseUIBreadcrumbTheme,
  ReuseUIButtonGroupTheme,
  ReuseUIButtonTheme,
  ReuseUICardTheme,
  ReuseUIDarkThemeToggleTheme,
  ReuseUINavbarTheme,
  ReuseUISidebarTheme,
  ReuseUIFloatingTheme,
  SpinnerColors,
  SpinnerSizes,
  ReuseUICarouselTheme,
  ReuseUIDropdownTheme,
  ReuseUICheckboxTheme,
  ReuseUITextInputTheme,
  ReuseUIFileInputTheme,
  ReuseUIHelperTextTheme,
  ReuseUIToggleSwitchTheme,
  ReuseUITextareaTheme,
  ReuseUILabelTheme,
  ReuseUIRadioTheme,
  ReuseUIRangeSliderTheme,
  ReuseUISelectTheme,
  ReuseUIFooterTheme,
  ReuseUIListGroupTheme,
  ReuseUIModalTheme,
} from '..';

export type CustomReuseUITheme = DeepPartial<ReuseUITheme>;

export interface ReuseUITheme {
  accordion: ReuseUIAccordionTheme;
  avatar: ReuseUIAvatarTheme;
  alert: ReuseUIAlertTheme;
  avatarGroupCounter: ReuseUIAvatarGroupCounterTheme;
  avatarGroup: ReuseUIAvatarGroupTheme;
  badge: ReuseUIBadgeTheme;
  button: ReuseUIButtonTheme;
  buttonGroup: ReuseUIButtonGroupTheme;
  card: ReuseUICardTheme;
  carousel: ReuseUICarouselTheme;
  checkbox: ReuseUICheckboxTheme;
  darkThemeToggle: ReuseUIDarkThemeToggleTheme;
  dropdown: ReuseUIDropdownTheme;
  listGroup: ReuseUIListGroupTheme;
  modal: ReuseUIModalTheme;
  navbar: ReuseUINavbarTheme;
  radio: ReuseUIRadioTheme;
  rangeSlider: ReuseUIRangeSliderTheme;
  sidebar: ReuseUISidebarTheme;
  fileInput: ReuseUIFileInputTheme;
  footer: ReuseUIFooterTheme;
  textInput: ReuseUITextInputTheme;
  helperText: ReuseUIHelperTextTheme;
  toggleSwitch: ReuseUIToggleSwitchTheme;
  textarea: ReuseUITextareaTheme;
  label: ReuseUILabelTheme;
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
  select: ReuseUISelectTheme;
  breadcrumb: ReuseUIBreadcrumbTheme;
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
