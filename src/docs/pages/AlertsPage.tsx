import type { FC } from 'react';
import { Alert } from '~/lib';
import { HiEye, HiInformationCircle } from 'react-icons/hi';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const AlertsPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Alerts – Contextual Notifications for Users',
    description:
      'The Alert component provides contextual notifications to users. It is built with Tailwind CSS and can be used for displaying success messages, warnings, errors, and general information. ReuseUI supports customizable and dismissible alerts, allowing users to manage notifications efficiently.',
    usage: () => `import { Alert } from 'reuseui-react';`,
  };

  const alertText = (
    <span>
      <span className='font-medium'>Information:</span> Please check the details and try again.
    </span>
  );

  const examples: CodeExample[] = [
    {
      title: 'Basic Alert',
      code: <Alert color='info'>{alertText}</Alert>,
    },
    {
      title: 'Alert with Icon',
      code: (
        <Alert color='failure' icon={HiInformationCircle}>
          {alertText}
        </Alert>
      ),
    },
    {
      title: 'Dismissible Alert',
      code: (
        <Alert color='success' onDismiss={() => alert('Alert dismissed!')}>
          {alertText}
        </Alert>
      ),
      codeStringifierOptions: { functionValue: (fn) => fn },
    },
    {
      title: 'Rounded Alert',
      code: (
        <Alert color='warning' rounded>
          {alertText}
        </Alert>
      ),
    },
    {
      title: 'Alert with Border Accent',
      code: (
        <Alert color='warning' withBorderAccent>
          {alertText}
        </Alert>
      ),
    },
    {
      title: 'Alert with Additional Content',
      code: (
        <Alert
          color='info'
          additionalContent={
            <>
              <div className='mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800'>
                This alert provides more details and guidance on a particular action. The content
                inside can be extended to include descriptions, buttons, and links.
              </div>
              <div className='flex'>
                <button
                  type='button'
                  className='mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900'
                >
                  <HiEye className='-ml-0.5 mr-2 h-4 w-4' />
                  View Details
                </button>
                <button
                  type='button'
                  className='rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white'
                >
                  Dismiss
                </button>
              </div>
            </>
          }
          icon={HiInformationCircle}
        >
          <h3 className='text-lg font-medium text-blue-700 dark:text-blue-800'>
            Important Information
          </h3>
        </Alert>
      ),
    },
    {
      title: 'Fully Customizable Alert',
      code: (
        <Alert
          color='success'
          rounded={false}
          withBorderAccent
          onDismiss={() => alert('Alert dismissed!')}
          additionalContent={
            <>
              <div className='mt-2 mb-4 text-sm text-green-700 dark:text-green-800'>
                This alert contains extended details and additional actions. It helps in providing
                users with clear instructions or status updates.
              </div>
              <div className='flex'>
                <button
                  type='button'
                  className='mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900'
                >
                  <HiEye className='-ml-0.5 mr-2 h-4 w-4' />
                  Learn More
                </button>
                <button
                  type='button'
                  className='rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white'
                >
                  Dismiss
                </button>
              </div>
            </>
          }
          icon={HiInformationCircle}
        >
          <h3 className='text-lg font-medium text-green-700 dark:text-green-800'>
            Success Notification
          </h3>
        </Alert>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default AlertsPage;
