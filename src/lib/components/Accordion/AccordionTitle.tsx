import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { useTheme } from '../ReuseUI';
import { ReuseUIHeadingLevel } from '../ReuseUI/ReuseUITheme';

import { useAccordionContext } from './AccordionPanelContext';

export interface AccordionTitleProps extends ComponentProps<'button'> {
  arrowIcon?: FC<ComponentProps<'svg'>>;
  as?: ReuseUIHeadingLevel;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  as: Heading = 'h2',
  children,
  className,
  ...props
}): JSX.Element => {
  const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = useAccordionContext();

  const theme = useTheme().theme.accordion.title;

  const onClick = () => typeof setOpen !== 'undefined' && setOpen();

  return (
    <button
      className={classNames(
        theme.base,
        theme.flush[flush ? 'on' : 'off'],
        theme.open[isOpen ? 'on' : 'off'],
        className,
      )}
      onClick={onClick}
      type='button'
      {...props}
    >
      <Heading className={theme.heading} data-testid='ReuseUI-accordion-heading'>
        {children}
      </Heading>
      {ArrowIcon && (
        <ArrowIcon
          aria-hidden
          className={classNames(theme.arrow.base, theme.arrow.open[isOpen ? 'on' : 'off'])}
          data-testid='ReuseUI-accordion-arrow'
        />
      )}
    </button>
  );
};