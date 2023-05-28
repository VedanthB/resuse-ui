import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUIFooterCopyrightTheme {
  base: string;
  href: string;
  span: string;
}

export interface CopyrightProps extends PropsWithChildren, ComponentProps<'div'> {
  by: string;
  href?: string;
  theme?: DeepPartial<ReuseUIFooterCopyrightTheme>;
  year?: number;
}

export const FooterCopyright: FC<CopyrightProps> = ({
  by,
  className,
  href,
  theme: customTheme = {},
  year,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.footer.copyright, customTheme);

  return (
    <div
      data-testid='ReuseUI-footer-copyright'
      className={classNames(theme.base, className)}
      {...props}
    >
      © {year}
      {href ? (
        <a href={href} className={theme.href}>
          {by}
        </a>
      ) : (
        <span data-testid='ReuseUI-footer-copyright-span' className={theme.span}>
          {by}
        </span>
      )}
    </div>
  );
};
