import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { mergeDeep } from '../../helpers/mergeDeep';
import { DeepPartial } from '..';
import { useTheme } from '../ReuseUI';
import { useAccordionContext } from './AccordionPanelContext';

export interface ReuseUIAccordionComponentTheme {
  base: string;
}

export interface AccordionContentProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<ReuseUIAccordionComponentTheme>;
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen } = useAccordionContext();

  const theme = mergeDeep(useTheme().theme.accordion.content, customTheme);

  return (
    <div
      className={classNames(theme.base, className)}
      data-testid='ReuseUI-accordion-content'
      hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  );
};
