import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { ReuseUIPositions, ReuseUISizes } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI';
import AvatarGroup from './AvatarGroup';
import AvatarGroupCounter from './AvatarGroupCounter';

export interface AvatarProps extends PropsWithChildren<ComponentProps<'div'>> {
  alt?: string;
  bordered?: boolean;
  img?: string;
  rounded?: boolean;
  size?: keyof AvatarSizes;
  stacked?: boolean;
  status?: 'away' | 'busy' | 'offline' | 'online';
  statusPosition?: keyof ReuseUIPositions;
  placeholderInitials?: string;
}

export interface AvatarSizes extends Pick<ReuseUISizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

const AvatarComponent: FC<AvatarProps> = ({
  alt = '',
  bordered = false,
  children,
  img,
  rounded = false,
  size = 'md',
  stacked = false,
  status,
  statusPosition = 'top-left',
  placeholderInitials = '',
  className,
  ...props
}) => {
  const theme = useTheme().theme.avatar;

  const imgClassName = classNames(
    bordered && theme.bordered,
    rounded && theme.rounded,
    stacked && theme.stacked,
    theme.img.on,
    theme.size[size],
  );

  return (
    <div className={classNames(theme.base, className)} data-testid='ReuseUI-avatar' {...props}>
      <div className='relative'>
        {img ? (
          <img
            className={classNames(imgClassName, theme.img.on)}
            src={img}
            alt={alt}
            data-testid='ReuseUI-avatar-img'
          />
        ) : placeholderInitials ? (
          <div
            className={classNames(
              theme.img.off,
              theme.initials.base,
              bordered && theme.bordered,
              rounded && theme.rounded,
              stacked && theme.stacked,
            )}
          >
            <span
              className={classNames(theme.initials.text)}
              data-testid='ReuseUI-avatar-initials-placeholder'
            >
              {placeholderInitials}
            </span>
          </div>
        ) : (
          <div className={classNames(imgClassName, theme.img.off)}>
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
            className={classNames(
              theme.status.base,
              theme.status[status],
              theme.statusPosition[statusPosition],
            )}
          />
        )}
      </div>
      {children && <div> {children} </div>}
    </div>
  );
};

AvatarComponent.displayName = 'Avatar';

export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter,
});
