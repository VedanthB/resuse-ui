import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUIFooterDividerTheme {
  base: string;
}

export interface FooterDividerProps extends ComponentProps<'hr'> {
  theme?: DeepPartial<ReuseUIFooterDividerTheme>;
}

export const FooterDivider: FC<FooterDividerProps> = ({
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.footer.divider, customTheme);

  return (
    <hr data-testid='footer-divider' className={classNames(theme.base, className)} {...props} />
  );
};
