import classNames from 'classnames';
import type { ComponentProps, PropsWithChildren, FC } from 'react';
import { useTheme } from '../ReuseUI';

export interface AvatarGroupCounterProps extends PropsWithChildren<ComponentProps<'a'>> {
  total?: number;
}

const AvatarGroupCounter: FC<AvatarGroupCounterProps> = ({ total, href, className }) => {
  const theme = useTheme().theme.avatarGroupCounter;

  return (
    <a href={href} className={classNames(theme.base, className)}>
      + {total}
    </a>
  );
};

AvatarGroupCounter.displayName = 'Avatar.GroupCounter';

export default AvatarGroupCounter;
