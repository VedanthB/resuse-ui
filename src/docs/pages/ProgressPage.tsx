import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Progress } from '~/lib';

const ProgressPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Progress',
    description:
      'The Progress component visually represents the completion percentage of a task using a progress bar. It supports different sizes, colors, and label options for enhanced clarity.',
    usage: () => `import { Progress } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Progress Bar',
      content: 'A simple progress bar displaying 45% completion.',
      code: <Progress progress={45} />,
    },
    {
      title: 'Progress Bar Sizes',
      content:
        'The progress bar supports different sizes: small, default, large, and extra-large. This is useful for adjusting UI emphasis.',
      code: (
        <div className='flex flex-col gap-2'>
          <div className='text-base font-medium dark:text-white'>Small</div>
          <Progress progress={45} size='sm' color='dark' />
          <div className='text-base font-medium dark:text-white'>Default</div>
          <Progress progress={45} size='md' color='dark' />
          <div className='text-lg font-medium dark:text-white'>Large</div>
          <Progress progress={45} size='lg' color='dark' />
          <div className='text-lg font-medium dark:text-white'>Extra Large</div>
          <Progress progress={45} size='xl' color='dark' />
        </div>
      ),
    },
    {
      title: 'Progress Bar Colors',
      content:
        'Supports multiple colors including dark, blue, red, green, yellow, indigo, and purple to match different UI themes.',
      code: (
        <div className='flex flex-col gap-2'>
          <div className='text-base font-medium'>Dark</div>
          <Progress progress={45} color='dark' />
          <div className='text-base font-medium text-blue-700'>Blue</div>
          <Progress progress={45} color='blue' />
          <div className='text-base font-medium text-red-700'>Red</div>
          <Progress progress={45} color='red' />
          <div className='text-base font-medium text-green-700'>Green</div>
          <Progress progress={45} color='green' />
          <div className='text-base font-medium text-yellow-700'>Yellow</div>
          <Progress progress={45} color='yellow' />
          <div className='text-base font-medium text-indigo-700'>Indigo</div>
          <Progress progress={45} color='indigo' />
          <div className='text-base font-medium text-purple-700'>Purple</div>
          <Progress progress={45} color='purple' />
        </div>
      ),
    },
    {
      title: 'Progress Bar with Labels',
      content:
        'Displays a label inside the progress bar to indicate completion percentage and task name.',
      code: (
        <Progress
          progress={50}
          labelProgress={true}
          textLabel='ReuseUI'
          labelText={true}
          size='lg'
        />
      ),
    },
    {
      title: 'Label Positioning',
      content:
        'Customizes label placement. The progress percentage is placed inside, while the text label appears outside.',
      code: (
        <Progress
          progress={45}
          labelProgress={true}
          progressLabelPosition='inside'
          textLabel='ReuseUI'
          labelText={true}
          textLabelPosition='outside'
          size='lg'
        />
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default ProgressPage;
