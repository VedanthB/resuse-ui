import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Button, Tooltip } from '~/lib';

const TooltipPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Tooltip',
    description:
      'Use the tooltip component to display descriptive text when hovering over an element, such as a button. Customize content, placement, styles, and animations with React and Tailwind CSS.',
    usage: () => `import { Tooltips } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Basic Tooltip',
      content: 'A simple tooltip that appears when hovering over an element.',
      code: (
        <Tooltip content='Tooltip content'>
          <Button>Hover me</Button>
        </Tooltip>
      ),
    },
    {
      title: 'Tooltip Styles',
      content: 'Tooltips with light and dark styles.',
      code: (
        <div className='flex gap-2'>
          <Tooltip content='Tooltip content' style='light'>
            <Button>Light tooltip</Button>
          </Tooltip>
          <Tooltip content='Tooltip content' style='dark'>
            <Button>Dark tooltip</Button>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Tooltip Placement',
      content: 'Position tooltips in different directions.',
      code: (
        <div className='flex gap-2'>
          <Tooltip content='Tooltip content' placement='top'>
            <Button>Tooltip top</Button>
          </Tooltip>
          <Tooltip content='Tooltip content' placement='right'>
            <Button>Tooltip right</Button>
          </Tooltip>
          <Tooltip content='Tooltip content' placement='bottom'>
            <Button>Tooltip bottom</Button>
          </Tooltip>
          <Tooltip content='Tooltip content' placement='left'>
            <Button>Tooltip left</Button>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Triggering',
      content: 'Tooltips can be triggered by hover or click events.',
      code: (
        <div className='flex gap-2'>
          <Tooltip content='Tooltip content' trigger='hover'>
            <Button>Tooltip hover</Button>
          </Tooltip>
          <Tooltip content='Tooltip content' trigger='click'>
            <Button>Tooltip click</Button>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Animations',
      content: 'Customize tooltip animation speed.',
      code: (
        <div className='flex gap-2'>
          <Tooltip content='Tooltip content' animation={false}>
            <Button>Not animated tooltip</Button>
          </Tooltip>
          <Tooltip content='Tooltip content' animation='duration-150'>
            <Button>Fast animation</Button>
          </Tooltip>
          <Tooltip content='Tooltip content' animation='duration-300'>
            <Button>Normal speed animation</Button>
          </Tooltip>
          <Tooltip content='Tooltip content' animation='duration-500'>
            <Button>Slow animation</Button>
          </Tooltip>
          <Tooltip content='Tooltip content' animation='duration-1000'>
            <Button>Really slow animation</Button>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Disable Arrow',
      content: 'Tooltips can be displayed without an arrow.',
      code: (
        <Tooltip content='Tooltip content' arrow={false}>
          <Button>No Arrow</Button>
        </Tooltip>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default TooltipPage;
