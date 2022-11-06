import type { FC } from 'react';
import { HiCheck, HiClock } from 'react-icons/hi';
import { Badge } from '../../lib';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const BadgesPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Badges',
    description:
      'The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made. Alternatively, badges can also be used as standalone elements that link to a certain page by using the anchor tag instead of a `span` element.',
    usage: () => `import { Badge } from 'reuseui-react';
    
export default function App() {
return (
    <>
     <Badge>Default</Badge>
    </>
  )
}`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default badge',
      content:
        'Use the following badge elements to indicate counts or labels inside or outside components.',
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
      title: 'Large badge',
      content: 'Use the `text-sm` to create a larger variant of the badges.',
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
      title: 'Badges as links',
      content: 'You can also use badges as anchor elements to link to another page.',
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
      title: 'Badges with icon',
      content: 'You can also use SVG icons inside the badge elements.',
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
      title: 'Badge with icon only',
      content: 'Alternatively you can also use badges which indicate only a SVG icon.',
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
