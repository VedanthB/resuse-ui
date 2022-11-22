import type { FC } from 'react';
import { Avatar } from '../../lib';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const AvatarPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Accordion',
    description:
      'The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes and JavaScript from ReuseUI. A popular use case would be the "Frequently Asked Questions" section of a website or page when you can show questions and answers for each child element.',
    usage: () => `import { Avatar } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Avatar',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Avatar img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' rounded />
          <Avatar img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' />
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default AvatarPage;
