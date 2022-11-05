import classNames from 'classnames';
import {
  Children,
  cloneElement,
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactElement,
  useMemo,
  useState,
} from 'react';
import { useTheme } from '../ReuseUI';
import { HiChevronDown } from 'react-icons/hi';
import { AccordionPanel, AccordionPanelProps } from './AccordionPanel';
import { AccordionTitle } from './AccordionTitle';
import { AccordionContent } from './AccordionContent';

export interface AccordionProps extends PropsWithChildren<ComponentProps<'div'>> {
  alwaysOpen?: boolean;
  arrowIcon?: FC<ComponentProps<'svg'>>;
  flush?: boolean;
  children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[];
}

const AccordionComponent: FC<AccordionProps> = ({
  alwaysOpen = false,
  arrowIcon = HiChevronDown,
  children,
  flush = false,
  className,
  ...props
}): JSX.Element => {
  const [isOpen, setOpen] = useState(0);

  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, {
          alwaysOpen,
          arrowIcon,
          flush,
          isOpen: isOpen === i,
          setOpen: () => setOpen(i),
        }),
      ),
    [alwaysOpen, arrowIcon, children, flush, isOpen],
  );

  console.log(panels);

  const theme = useTheme().theme.accordion;

  return (
    <div
      className={classNames(theme.base, theme.flush[flush ? 'on' : 'off'], className)}
      data-testid='ReuseUI-accordion'
      {...props}
    >
      {panels}
    </div>
  );
};

AccordionComponent.displayName = 'Accordion';
AccordionPanel.displayName = 'Accordion.Panel';
AccordionTitle.displayName = 'Accordion.Title';
AccordionContent.displayName = 'Accordion.Content';

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
