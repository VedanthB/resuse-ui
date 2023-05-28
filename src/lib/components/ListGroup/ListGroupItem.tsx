import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIBoolean } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUIListGroupItemTheme {
  base: string;
  link: {
    base: string;
    active: ReuseUIBoolean;
    href: ReuseUIBoolean;
    icon: string;
  };
}

export interface ListGroupItemProps extends PropsWithChildren {
  active?: boolean;
  disabled?: boolean;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  onClick?: () => void;
  theme?: DeepPartial<ReuseUIListGroupItemTheme>;
}

export const ListGroupItem: FC<
  ListGroupItemProps & ComponentProps<'a'> & ComponentProps<'button'>
> = ({
  active: isActive,
  children,
  className,
  href,
  icon: Icon,
  onClick,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.listGroup.item, customTheme);

  const isLink = typeof href !== 'undefined';
  const Component = isLink ? 'a' : 'button';

  return (
    <li className={classNames(theme.base, className)}>
      <Component
        href={href}
        onClick={onClick}
        type={isLink ? undefined : 'button'}
        className={classNames(
          theme.link.active[isActive ? 'on' : 'off'],
          theme.link.base,
          theme.link.href[isLink ? 'on' : 'off'],
        )}
        {...props}
      >
        {Icon && (
          <Icon
            aria-hidden
            data-testid='ReuseUI-list-group-item-icon'
            className={theme.link.icon}
          />
        )}
        {children}
      </Component>
    </li>
  );
};
