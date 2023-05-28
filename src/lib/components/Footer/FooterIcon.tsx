import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUIFooterIconTheme {
  base: string;
  size: string;
}

export interface FooterIconProps extends PropsWithChildren {
  ariaLabel?: string;
  className?: string;
  href?: string;
  icon: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<ReuseUIFooterIconTheme>;
}

export const FooterIcon: FC<FooterIconProps & ComponentProps<'a'> & ComponentProps<'svg'>> = ({
  ariaLabel,
  className,
  href,
  icon: Icon,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.footer.icon, customTheme);

  return (
    <div>
      {href ? (
        <a
          aria-label={ariaLabel}
          data-testid='ReuseUI-footer-icon'
          href={href}
          className={classNames(theme.base, className)}
          {...props}
        >
          <Icon className={theme.size} />
        </a>
      ) : (
        <Icon data-testid='ReuseUI-footer-icon' className={theme.size} {...props} />
      )}
    </div>
  );
};
