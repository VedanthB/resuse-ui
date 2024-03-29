import classNames from 'classnames';
import type { ComponentProps, PropsWithChildren } from 'react';
import React from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../ReuseUI';

export interface ReuseUIAvatarGroupCounterTheme {
  root: ReuseUIAvatarGroupCounterRootTheme;
}

export interface ReuseUIAvatarGroupCounterRootTheme {
  base: string;
}

export interface AvatarGroupCounterProps extends PropsWithChildren<ComponentProps<'a'>> {
  total?: number;
  theme?: DeepPartial<ReuseUIAvatarGroupCounterRootTheme>;
}

const AvatarGroupCounter: React.FC<AvatarGroupCounterProps> = ({
  total,
  href,
  className,
  theme: customTheme = {},
}) => {
  const theme = mergeDeep(useTheme().theme.avatarGroupCounter.root, customTheme);

  return (
    <a className={classNames(theme.base, className)} href={href}>
      +{total}
    </a>
  );
};

AvatarGroupCounter.displayName = 'Avatar.GroupCounter';
export default AvatarGroupCounter;
