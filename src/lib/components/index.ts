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

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
