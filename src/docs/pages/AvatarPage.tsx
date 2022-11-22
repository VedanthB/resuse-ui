import type { FC } from 'react';
import { Avatar } from '../../lib';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const AvatarPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Avatar',
    description:
      'The avatar component can be used as a visual identifier for a user profile on your website and you can use the examples from ReuseUI to modify the styles and sizes of these components using the utility classes from Tailwind CSS.',
    usage: () => `import { Avatar } from 'ResueUI-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Avatar',
      content: 'Use this example to create a circle and rounded avatar on an image element.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Avatar img='https://ReuseUI.com/docs/images/people/profile-picture-5.jpg' rounded />
          <Avatar img='https://ReuseUI.com/docs/images/people/profile-picture-5.jpg' />
        </div>
      ),
    },
    {
      title: 'Bordered Avatar',
      content:
        'Apply a border around the avatar component you can use the `ring-{color}` class from Tailwind CSS.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Avatar
            img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
            rounded
            bordered
          />
          <Avatar img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' bordered />
        </div>
      ),
    },
    {
      title: 'Placeholder',
      content:
        'Use this example as a placeholder icon for the user profile when there is no custom image available.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Avatar />
          <Avatar rounded />
        </div>
      ),
    },
    {
      title: 'Placeholder Initials',
      content: '',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Avatar placeholderInitials='RR' />
        </div>
      ),
    },
    {
      title: 'Dot indicator',
      content:
        'Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Avatar
            img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
            status='online'
          />
          <Avatar
            img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
            rounded
            status='busy'
            statusPosition='top-right'
          />
          <Avatar
            img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
            status='offline'
            statusPosition='bottom-left'
          />
          <Avatar
            img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
            rounded
            status='away'
            statusPosition='bottom-right'
          />
        </div>
      ),
    },
    {
      title: 'Stacked',
      content:
        'Use this example if you want to stack a group of users by overlapping the avatar components.',
      code: (
        <>
          <Avatar.Group>
            <Avatar
              img='https://flowbite.com/docs/images/people/profile-picture-1.jpg'
              rounded
              stacked
            />
            <Avatar
              img='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
              rounded
              stacked
            />
            <Avatar
              img='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
              rounded
              stacked
            />
            <Avatar
              img='https://flowbite.com/docs/images/people/profile-picture-4.jpg'
              rounded
              stacked
            />
            <Avatar
              img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              rounded
              stacked
            />
          </Avatar.Group>
          <Avatar.Group>
            <Avatar
              img='https://flowbite.com/docs/images/people/profile-picture-1.jpg'
              rounded
              stacked
            />
            <Avatar
              img='https://flowbite.com/docs/images/people/profile-picture-2.jpg'
              rounded
              stacked
            />
            <Avatar
              img='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
              rounded
              stacked
            />
            <Avatar
              img='https://flowbite.com/docs/images/people/profile-picture-4.jpg'
              rounded
              stacked
            />
            <Avatar.Counter total={99} href='#' />
          </Avatar.Group>
        </>
      ),
    },
    {
      title: 'Avatar text',
      content:
        'This example can be used if you want to show additional information in the form of text elements such as the users name and join date.',
      code: (
        <Avatar img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' rounded>
          <div className='space-y-1 font-medium dark:text-white'>
            <div>Jese Leos</div>
            <div className='text-sm text-gray-500 dark:text-gray-400'>Joined in August 2014</div>
          </div>
        </Avatar>
      ),
    },
    {
      title: 'Sizing',
      content: 'Choose from multiple sizing options for the avatar component from this example.',
      code: (
        <div className='flex flex-wrap items-center gap-2'>
          <Avatar img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' size='xs' />
          <Avatar img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' size='sm' />
          <Avatar img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' size='md' />
          <Avatar img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' size='lg' />
          <Avatar img='https://flowbite.com/docs/images/people/profile-picture-5.jpg' size='xl' />
        </div>
      ),
    },
    {
      title: 'Alternative text',
      code: (
        <Avatar
          alt='Default avatar with alt text'
          img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
          rounded
        />
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default AvatarPage;
