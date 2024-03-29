import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';
import { Children, cloneElement, useMemo, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { ReuseUIBoolean } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import { AccordionContent, ReuseUIAccordionComponentTheme } from './AccordionContent';
import type { AccordionPanelProps } from './AccordionPanel';
import { AccordionPanel } from './AccordionPanel';
import { AccordionTitle, ReuseUIAccordionTitleTheme } from './AccordionTitle';

export interface ReuseUIAccordionTheme {
  root: ReuseUIAccordionRootTheme;
  content: ReuseUIAccordionComponentTheme;
  title: ReuseUIAccordionTitleTheme;
}

export interface ReuseUIAccordionRootTheme {
  base: string;
  flush: ReuseUIBoolean;
}

export interface AccordionProps extends PropsWithChildren<ComponentProps<'div'>> {
  alwaysOpen?: boolean;
  arrowIcon?: FC<ComponentProps<'svg'>>;
  children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[];
  flush?: boolean;
  collapseAll?: boolean;
  theme?: DeepPartial<ReuseUIAccordionRootTheme>;
}

const AccordionComponent: FC<AccordionProps> = ({
  alwaysOpen = false,
  arrowIcon = HiChevronDown,
  children,
  flush = false,
  collapseAll = false,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setOpen] = useState(collapseAll ? -1 : 0);

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

  const theme = mergeDeep(useTheme().theme.accordion.root, customTheme);

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
