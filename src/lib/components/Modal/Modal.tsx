import classNames from 'classnames';
import type { ComponentProps, FC, MouseEvent, PropsWithChildren } from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import windowExists from '../../helpers/window-exists';
import type { ReuseUIBoolean, ReuseUIPositions, ReuseUISizes } from '../ReuseUI/ReuseUITheme';
import { useTheme } from '../ReuseUI/ThemeContext';
import type { ReuseUIModalBodyTheme } from './ModalBody';
import { ModalBody } from './ModalBody';
import { ModalContext } from './ModalContext';
import type { ReuseUIModalFooterTheme } from './ModalFooter';
import { ModalFooter } from './ModalFooter';
import type { ReuseUIModalHeaderTheme } from './ModalHeader';
import { ModalHeader } from './ModalHeader';
import useKeyDown from '../../hooks';

export interface ReuseUIModalTheme {
  root: ReuseUIModalRootTheme;
  content: ReuseUIModalContentTheme;
  body: ReuseUIModalBodyTheme;
  header: ReuseUIModalHeaderTheme;
  footer: ReuseUIModalFooterTheme;
}

export interface ReuseUIModalRootTheme {
  base: string;
  show: ReuseUIBoolean;
  sizes: ModalSizes;
  positions: ModalPositions;
}

export interface ReuseUIModalContentTheme {
  base: string;
  inner: string;
}

export interface ModalPositions extends ReuseUIPositions {
  [key: string]: string;
}

export interface ModalSizes extends Omit<ReuseUISizes, 'xs'> {
  [key: string]: string;
}

export interface ModalProps extends PropsWithChildren<ComponentProps<'div'>> {
  onClose?: () => void;
  position?: keyof ModalPositions;
  popup?: boolean;
  root?: HTMLElement;
  show?: boolean;
  size?: keyof ModalSizes;
  dismissible?: boolean;
  theme?: DeepPartial<ReuseUIModalTheme>;
}

const ModalComponent: FC<ModalProps> = ({
  children,
  className,
  dismissible = false,
  onClose,
  popup,
  position = 'center',
  root,
  show,
  size = '2xl',
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.modal, customTheme);

  const [mounted, setMounted] = useState(false);

  // Declare a ref to store a reference to a div element.
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);

    return () => {
      const container = containerRef.current;

      // If a container exists on unmount, it is removed from the DOM and
      // garbage collected.
      if (container) {
        container.parentNode?.removeChild(container);
        containerRef.current = null;
      }
    };
  }, []);

  useKeyDown('Escape', () => {
    if (dismissible && onClose) {
      onClose();
    }
  });

  if (!mounted) {
    return null;
  }

  // If the current value of the ref is falsy (e.g. null), set it to a new div
  // element.
  if (!containerRef.current) {
    containerRef.current = document.createElement('div');
  }

  // If the current value of the ref is not already a child of the root element,
  // append it or replace its parent.
  if (containerRef.current.parentNode !== root && windowExists()) {
    root ||= document.body;
    root.appendChild(containerRef.current);

    // Prevent scrolling of the root element when the modal is shown
    root.style.overflow = show ? 'hidden' : 'auto';
  }

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    if (dismissible && e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ popup, onClose }}>
      <div
        aria-hidden={!show}
        data-testid='modal'
        onClick={handleOnClick}
        role='dialog'
        className={classNames(
          theme.root.base,
          theme.root.positions[position],
          show ? theme.root.show.on : theme.root.show.off,
          className,
        )}
        {...props}
      >
        <div className={classNames(theme.content.base, theme.root.sizes[size])}>
          <div className={theme.content.inner}>{children}</div>
        </div>
      </div>
    </ModalContext.Provider>,
    containerRef.current,
  );
};

ModalComponent.displayName = 'Modal';
ModalHeader.displayName = 'Modal.Header';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
