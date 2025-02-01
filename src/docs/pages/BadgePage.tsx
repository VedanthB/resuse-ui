import type { FC } from 'react';
import { HiCheck, HiClock } from 'react-icons/hi';
import { Badge } from '../../lib';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const BadgesPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Badges – Status Indicators & Labels',
    description:
      'Badges are versatile UI elements used to display counts, labels, statuses, or indicators for components such as buttons, text, or navigation items. They can also serve as standalone elements linking to other pages using an anchor tag instead of a `span` element.',
    usage: () => `import { Badge } from 'reuseui-react';

export default function App() {
  return (
    <>
      <Badge>Default</Badge>
    </>
  );
}`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Basic Badge',
      content:
        'Use badges to highlight information such as labels, counts, or statuses. These can be used inside or outside components.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Badge color='info'>Default</Badge>
          <Badge color='gray'>Dark</Badge>
          <Badge color='failure'>Failure</Badge>
          <Badge color='success'>Success</Badge>
          <Badge color='warning'>Warning</Badge>
          <Badge color='indigo'>Indigo</Badge>
          <Badge color='purple'>Purple</Badge>
          <Badge color='pink'>Pink</Badge>
        </div>
      ),
    },
    {
      title: 'Large Badges',
      content: 'Apply the `text-sm` class to create a larger badge variant for better visibility.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Badge color='info' size='sm'>
            Default
          </Badge>
          <Badge color='gray' size='sm'>
            Dark
          </Badge>
          <Badge color='failure' size='sm'>
            Failure
          </Badge>
          <Badge color='success' size='sm'>
            Success
          </Badge>
          <Badge color='warning' size='sm'>
            Warning
          </Badge>
          <Badge color='indigo' size='sm'>
            Indigo
          </Badge>
          <Badge color='purple' size='sm'>
            Purple
          </Badge>
          <Badge color='pink' size='sm'>
            Pink
          </Badge>
        </div>
      ),
    },
    {
      title: 'Clickable Badges',
      content: 'Turn badges into interactive elements by linking them to another page.',
      code: (
        <div className='flex flex-wrap items-center gap-2'>
          <Badge href='/badges'>Default</Badge>
          <Badge size='sm' href='/badges'>
            Default
          </Badge>
        </div>
      ),
    },
    {
      title: 'Badges with Icons',
      content: 'Enhance badges with icons to indicate status or additional context.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Badge icon={HiCheck}>2 minutes ago</Badge>
          <Badge color='gray' icon={HiClock}>
            3 days ago
          </Badge>
        </div>
      ),
    },
    {
      title: 'Icon-Only Badges',
      content: 'Use badges as standalone icons for minimalist visual indicators.',
      code: (
        <div className='flex flex-wrap items-center gap-2'>
          <Badge icon={HiCheck} />
          <Badge color='gray' icon={HiCheck} />
          <Badge size='sm' icon={HiCheck} />
          <Badge color='gray' size='sm' icon={HiCheck} />
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default BadgesPage;
