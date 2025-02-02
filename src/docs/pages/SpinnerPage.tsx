import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Button, Spinner } from '~/lib';

const SpinnerPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Spinner',
    description:
      'Use the Spinner component to indicate loading states while fetching data or performing background processes. Built with React and animated using Tailwind CSS.',
    usage: () => `import { Spinner } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Spinner',
      content: 'A basic spinner with default styling.',
      code: <Spinner aria-label='Default status example' />,
    },
    {
      title: 'Spinner Colors',
      content: 'Spinners in different colors: info, success, failure, warning, pink, and purple.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Spinner color='info' aria-label='Info spinner example' />
          <Spinner color='success' aria-label='Success spinner example' />
          <Spinner color='failure' aria-label='Failure spinner example' />
          <Spinner color='warning' aria-label='Warning spinner example' />
          <Spinner color='pink' aria-label='Pink spinner example' />
          <Spinner color='purple' aria-label='Purple spinner example' />
        </div>
      ),
    },
    {
      title: 'Spinner Sizing',
      content: 'Different spinner sizes: extra small, small, medium, large, and extra large.',
      code: (
        <div className='flex flex-wrap items-center gap-2'>
          <Spinner aria-label='Extra small spinner example' size='xs' />
          <Spinner aria-label='Small spinner example' size='sm' />
          <Spinner aria-label='Medium sized spinner example' size='md' />
          <Spinner aria-label='Large spinner example' size='lg' />
          <Spinner aria-label='Extra large spinner example' size='xl' />
        </div>
      ),
    },
    {
      title: 'Spinner Alignment',
      content: 'Examples of left, center, and right-aligned spinners.',
      code: (
        <div className='flex flex-col gap-2'>
          <div className='text-left'>
            <Spinner aria-label='Left-aligned spinner example' />
          </div>
          <div className='text-center'>
            <Spinner aria-label='Center-aligned spinner example' />
          </div>
          <div className='text-right'>
            <Spinner aria-label='Right-aligned spinner example' />
          </div>
        </div>
      ),
    },
    {
      title: 'Spinner in Buttons',
      content: 'Buttons with loading indicators using spinners.',
      code: (
        <div className='flex flex-row gap-3'>
          <Button>
            <Spinner aria-label='Spinner button example' />
            <span className='pl-3'>Loading...</span>
          </Button>
          <Button color='gray'>
            <Spinner aria-label='Alternate spinner button example' />
            <span className='pl-3'>Loading...</span>
          </Button>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default SpinnerPage;
