import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIColors, ReuseUIPositions, ReuseUISizes } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import AvatarGroup from './AvatarGroup';
import AvatarGroupCounter from './AvatarGroupCounter';

export interface ReuseUIAvatarTheme {
  root: ReuseUIAvatarRootTheme;
  img: ReuseUIAvatarImageTheme;
  status: ReuseUIAvatarStatusTheme;
  initials: ReuseUIAvatarInitialsTheme;
}

export interface ReuseUIAvatarRootTheme {
  base: string;
  bordered: string;
  color: AvatarColors;
  rounded: string;
  size: AvatarSizes;
  stacked: string;
  statusPosition: ReuseUIPositions;
}

export interface ReuseUIAvatarImageTheme {
  off: string;
  on: string;
  placeholder: string;
}

export interface ReuseUIAvatarStatusTheme {
  away: string;
  base: string;
  busy: string;
  offline: string;
  online: string;
}

export interface ReuseUIAvatarInitialsTheme {
  base: string;
  text: string;
}

export interface AvatarColors
  extends Pick<
    ReuseUIColors,
    'failure' | 'gray' | 'info' | 'pink' | 'purple' | 'success' | 'warning'
  > {
  [key: string]: string;
}

export interface AvatarSizes extends Pick<ReuseUISizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface AvatarImageProps {
  alt?: string;
  className: string;
  'data-testid': string;
}

export interface AvatarProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  alt?: string;
  bordered?: boolean;
  img?: string | ((props: AvatarImageProps) => ReactElement);
  color?: keyof AvatarColors;
  rounded?: boolean;
  size?: keyof AvatarSizes;
  stacked?: boolean;
  status?: 'away' | 'busy' | 'offline' | 'online';
  statusPosition?: keyof ReuseUIPositions;
  placeholderInitials?: string;
  theme?: DeepPartial<ReuseUIAvatarTheme>;
}

const AvatarComponent: FC<AvatarProps> = ({
  alt = '',
  bordered = false,
  children,
  img,
  color = 'light',
  rounded = false,
  size = 'md',
  stacked = false,
  status,
  statusPosition = 'top-left',
  placeholderInitials = '',
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.avatar, customTheme);

  const imgClassName = classNames(
    bordered && theme.root.bordered,
    bordered && theme.root.color[color],
    rounded && theme.root.rounded,
    stacked && theme.root.stacked,
    theme.img.on,
    theme.root.size[size],
  );

  const imgProps = {
    alt,
    className: classNames(imgClassName, theme.img.on),
    'data-testid': 'ReuseUI-avatar-img',
  };
  return (
    <div className={classNames(theme.root.base, className)} data-testid='ReuseUI-avatar' {...props}>
      <div className='relative'>
        {img ? (
          typeof img === 'string' ? (
            <img {...imgProps} src={img} />
          ) : (
            img(imgProps)
          )
        ) : placeholderInitials ? (
          <div
            className={classNames(
              theme.img.off,
              theme.initials.base,
              rounded && theme.root.rounded,
              stacked && theme.root.stacked,
              bordered && theme.root.bordered,
              bordered && theme.root.color[color],
            )}
            data-testid='ReuseUI-avatar-initials-placeholder'
          >
            <span
              className={classNames(theme.initials.text)}
              data-testid='ReuseUI-avatar-initials-placeholder-text'
            >
              {placeholderInitials}
            </span>
          </div>
        ) : (
          <div className={classNames(imgClassName, theme.img.off)} data-testid='ReuseUI-avatar-img'>
            <svg
              className={theme.img.placeholder}
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        )}
        {status && (
          <span
            data-testid='ReuseUI-avatar-status'
            className={classNames(
              theme.status.base,
              theme.status[status],
              theme.root.statusPosition[statusPosition],
            )}
          />
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

AvatarComponent.displayName = 'Avatar';

export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter,
});
