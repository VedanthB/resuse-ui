export * from './ReuseUI';
export * from './Badge';
export * from './DarkThemeToggle';
export * from './Floating';
export * from './Navbar';
export * from './Sidebar';
export * from './Spinner';
export * from './Tooltip';
export * from './Accordion';
export * from './Card';
export * from './Avatar';
export * from './Button';
export * from './Breadcrumb';
export * from './Alert';
export * from './Alert';
export * from './Carousel';
export * from './Dropdown';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
