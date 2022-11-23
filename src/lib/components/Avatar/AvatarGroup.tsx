import React from 'react';
import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../ReuseUI';

export type AvatarGroupProps = PropsWithChildren<ComponentProps<'div'>>;

const AvatarGroup: FC<AvatarGroupProps> = ({ children, className }) => {
  const theme = useTheme().theme.avatarGroup;

  return (
    <div className={classNames(theme.base, className)} data-testid='avatar-group-element'>
      {children}
    </div>
  );
};

AvatarGroup.displayName = 'Avatar.Group';

export default AvatarGroup;
