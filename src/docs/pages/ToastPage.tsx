import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Button, Toast } from '~/lib';
import { MdLoop } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { HiCheck, HiExclamation, HiFire, HiX } from 'react-icons/hi';

const ToastPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Toast',
    description:
      'Push notifications to your website visitors using the toast component with multiple sizes, colors, styles, positions, and icons based on React and Tailwind CSS.',
    usage: () => `import { Toast } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Toast',
      content: 'A simple toast notification with an icon.',
      code: (
        <Toast>
          <ToastIconWrapper color='blue'>
            <HiFire className='h-5 w-5' />
          </ToastIconWrapper>
          <ToastMessage>Set yourself free.</ToastMessage>
          <Toast.Toggle />
        </Toast>
      ),
    },
    {
      title: 'Colors',
      content: 'Toasts with different colors to indicate various statuses.',
      code: (
        <div className='flex flex-col gap-4'>
          {toastMessages.map(({ color, icon, message }, index) => (
            <Toast key={index}>
              <ToastIconWrapper color={color}>{icon}</ToastIconWrapper>
              <ToastMessage>{message}</ToastMessage>
              <Toast.Toggle />
            </Toast>
          ))}
        </div>
      ),
    },
    {
      title: 'Simple Toast',
      content: 'A toast notification with minimal content.',
      code: (
        <Toast>
          <FaTelegramPlane className='h-5 w-5 text-blue-600 dark:text-blue-500' />
          <ToastMessage>Message sent successfully.</ToastMessage>
        </Toast>
      ),
    },
    {
      title: 'Undo Button',
      content: 'A toast notification with an interactive undo button.',
      code: (
        <Toast>
          <ToastMessage>Conversation archived.</ToastMessage>
          <div className='ml-auto flex items-center space-x-2'>
            <a
              className='rounded-lg p-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-700'
              href='/toast'
            >
              Undo
            </a>
            <Toast.Toggle />
          </div>
        </Toast>
      ),
    },
    {
      title: 'Interactive Toast',
      content: 'A toast notification with buttons for user action.',
      code: (
        <Toast>
          <div className='flex !items-start'>
            <ToastIconWrapper color='blue'>
              <MdLoop className='h-5 w-5' />
            </ToastIconWrapper>
            <div className='ml-3 text-sm font-normal'>
              <span className='mb-1 text-sm font-semibold text-gray-900 dark:text-white'>
                Update available
              </span>
              <div className='mb-2 text-sm font-normal'>
                A new software version is available for download.
              </div>
              <div className='flex gap-2'>
                <Button size='xs'>Update</Button>
                <Button color='light' size='xs'>
                  Not now
                </Button>
              </div>
            </div>
            <Toast.Toggle />
          </div>
        </Toast>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

// ✅ Reusable Components for Clean Code
const ToastIconWrapper: FC<{ color: string; children: React.ReactNode }> = ({
  color,
  children,
}) => (
  <div
    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-${color}-100 text-${color}-500 dark:bg-${color}-800 dark:text-${color}-200`}
  >
    {children}
  </div>
);

const ToastMessage: FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className='ml-3 text-sm font-normal'>{children}</div>
);

// ✅ Toast Data (Refactored for Maintainability)
const toastMessages = [
  { color: 'green', icon: <HiCheck className='h-5 w-5' />, message: 'Item moved successfully.' },
  { color: 'red', icon: <HiX className='h-5 w-5' />, message: 'Item has been deleted.' },
  {
    color: 'orange',
    icon: <HiExclamation className='h-5 w-5' />,
    message: 'Improve password difficulty.',
  },
];

export default ToastPage;
