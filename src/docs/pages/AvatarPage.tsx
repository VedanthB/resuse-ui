import type { FC } from 'react';
import { Avatar } from '../../lib';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const AvatarPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Avatar – User Profile Representation',
    description:
      'The Avatar component serves as a visual representation of user profiles. It is fully customizable with Tailwind CSS utility classes, allowing modifications to size, shape, and additional styling options. ReuseUI provides various avatar configurations, including placeholders, initials, and status indicators.',
    usage: () => `import { Avatar } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Basic Avatar',
      content: 'A circular and square avatar for user profile images.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            rounded
          />
          <Avatar img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png' />
        </div>
      ),
    },
    {
      title: 'Avatar with Border',
      content: 'Apply a subtle border around the avatar using Tailwind CSS `ring-{color}` classes.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            rounded
            bordered
          />
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            bordered
          />
        </div>
      ),
    },
    {
      title: 'Placeholder Avatar',
      content: 'Displays a default placeholder when no user image is provided.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Avatar />
          <Avatar rounded />
        </div>
      ),
    },
    {
      title: 'Avatar with Initials',
      content: 'Displays user initials when an image is not available.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Avatar placeholderInitials='RR' />
        </div>
      ),
    },
    {
      title: 'Status Indicator',
      content: 'Shows a small dot to represent the user’s online/offline status.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            status='online'
          />
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            rounded
            status='busy'
            statusPosition='top-right'
          />
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            status='offline'
            statusPosition='bottom-left'
          />
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            rounded
            status='away'
            statusPosition='bottom-right'
          />
        </div>
      ),
    },
    {
      title: 'Stacked Avatars',
      content: 'Overlapping avatars to represent multiple users or teams.',
      code: (
        <>
          <Avatar.Group>
            <Avatar
              img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
              rounded
              stacked
            />
            <Avatar
              img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448850/00062-254488923_g5spen.png'
              rounded
              stacked
            />
            <Avatar
              img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448872/GTA_wnrn1i.png'
              rounded
              stacked
            />
          </Avatar.Group>
          <Avatar.Group>
            <Avatar
              img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
              rounded
              stacked
            />
            <Avatar
              img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448850/00062-254488923_g5spen.png'
              rounded
              stacked
            />
            <Avatar
              img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448872/GTA_wnrn1i.png'
              rounded
              stacked
            />
            <Avatar
              img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
              rounded
              stacked
            />
            <Avatar
              img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448850/00062-254488923_g5spen.png'
              rounded
              stacked
            />
            <Avatar
              img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448872/GTA_wnrn1i.png'
              rounded
              stacked
            />
            <Avatar.Counter total={99} href='#' />
          </Avatar.Group>
        </>
      ),
    },
    {
      title: 'Avatar with Text',
      content: 'Includes additional user details like name and registration date.',
      code: (
        <Avatar
          img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
          rounded
        >
          <div className='space-y-1 font-medium dark:text-white'>
            <div>Jese Leos</div>
            <div className='text-sm text-gray-500 dark:text-gray-400'>Joined in August 2014</div>
          </div>
        </Avatar>
      ),
    },
    {
      title: 'Avatar Sizing',
      content: 'Different avatar sizes ranging from extra small to extra large.',
      code: (
        <div className='flex flex-wrap items-center gap-2'>
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            size='xs'
          />
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            size='sm'
          />
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            size='md'
          />
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            size='lg'
          />
          <Avatar
            img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
            size='xl'
          />
        </div>
      ),
    },
    {
      title: 'Avatar with Alternative Text',
      content: 'Provides an accessible description for screen readers.',
      code: (
        <Avatar
          alt='Default avatar with alternative text'
          img='https://res.cloudinary.com/supertramp69420/image/upload/v1738448777/Watercolor3_ajahhc.png'
          rounded
        />
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default AvatarPage;
