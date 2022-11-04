import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { useTheme } from '../ReuseUI';

import { useAccordionContext } from './AccordionPanelContext';

export const AccordionContent: FC<ComponentProps<'div'>> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  const { isOpen } = useAccordionContext();

  const theme = useTheme().theme.accordion.content;

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
