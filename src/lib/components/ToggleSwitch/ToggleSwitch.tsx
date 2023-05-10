import classNames from 'classnames';
import type { ComponentProps, FC, KeyboardEvent, MouseEvent } from 'react';
import { useId } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { ReuseUIBoolean, ReuseUIColors } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';

export interface ReuseUIToggleSwitchTheme {
  root: ReuseUIToggleSwitchRootTheme;
  toggle: ReuseUIToggleSwitchToggleTheme;
}

export interface ReuseUIToggleSwitchRootTheme {
  base: string;
  active: ReuseUIBoolean;
  label: string;
}

export interface ReuseUIToggleSwitchToggleTheme {
  base: string;
  checked: ReuseUIBoolean & {
    color: ReuseUIColors;
  };
}

export type ToggleSwitchProps = Omit<ComponentProps<'button'>, 'onChange'> & {
  checked: boolean;
  color?: ReuseUIColors;
  label: string;
  onChange: (checked: boolean) => void;
  theme?: DeepPartial<ReuseUIToggleSwitchTheme>;
};

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  checked,
  className,
  color = 'blue',
  disabled,
  label,
  name,
  onChange,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const theme = mergeDeep(useTheme().theme.toggleSwitch, customTheme);

  const toggle = (): void => onChange(!checked);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    toggle();
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  return (
    <>
      {name && checked && (
        <input checked={checked} hidden name={name} readOnly type='checkbox' className='sr-only' />
      )}

      <button
        aria-checked={checked}
        aria-labelledby={`${id}-ReuseUI-toggleswitch-label`}
        disabled={disabled}
        id={`${id}-ReuseUI-toggleswitch`}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        role='switch'
        tabIndex={0}
        type='button'
        className={classNames(
          theme.root.base,
          theme.root.active[disabled ? 'off' : 'on'],
          className,
        )}
        {...props}
      >
        <div
          data-testid='ReuseUI-toggleswitch-toggle'
          className={classNames(
            theme.toggle.base,
            theme.toggle.checked[checked ? 'on' : 'off'],
            !disabled && checked && theme.toggle.checked.color[color],
          )}
        />
        <span
          data-testid='ReuseUI-toggleswitch-label'
          id={`${id}-ReuseUI-toggleswitch-label`}
          className={theme.root.label}
        >
          {label}
        </span>
      </button>
    </>
  );
};
