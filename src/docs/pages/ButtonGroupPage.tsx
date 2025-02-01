import type { FC } from 'react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';
import { Button } from '~/lib';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const ButtonGroupPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Button Group',
    description:
      'The Button Group component allows you to group multiple buttons together, ensuring a consistent layout and spacing. It is useful for actions that are related and need to be visually connected.',
    usage: () => `import { Button } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Basic Button Group',
      content: 'A simple button group with uniform styling for grouped actions.',
      code: (
        <Button.Group>
          <Button color='gray'>Profile</Button>
          <Button color='gray'>Settings</Button>
          <Button color='gray'>Messages</Button>
        </Button.Group>
      ),
    },
    {
      title: 'Button Group with Icons',
      content: 'Enhance buttons with icons for better visual representation of actions.',
      code: (
        <Button.Group>
          <Button color='gray'>
            <HiUserCircle className='mr-3 h-4 w-4' />
            Profile
          </Button>
          <Button color='gray'>
            <HiAdjustments className='mr-3 h-4 w-4' />
            Settings
          </Button>
          <Button color='gray'>
            <HiCloudDownload className='mr-3 h-4 w-4' />
            Messages
          </Button>
        </Button.Group>
      ),
    },
    {
      title: 'Color Variants',
      content: 'Showcase different button color styles within a group.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button.Group>
            <Button color='info'>Profile</Button>
            <Button color='info'>Settings</Button>
            <Button color='info'>Messages</Button>
          </Button.Group>
          <Button.Group>
            <Button gradientMonochrome='info'>Profile</Button>
            <Button gradientMonochrome='info'>Settings</Button>
            <Button gradientMonochrome='info'>Messages</Button>
          </Button.Group>
          <Button.Group>
            <Button gradientDuoTone='greenToBlue'>Profile</Button>
            <Button gradientDuoTone='greenToBlue'>Settings</Button>
            <Button gradientDuoTone='greenToBlue'>Messages</Button>
          </Button.Group>
        </div>
      ),
    },
    {
      title: 'Outlined Buttons',
      content: 'Use an outline style to create a minimalistic button group.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button.Group outline>
            <Button color='gray'>Profile</Button>
            <Button color='gray'>Settings</Button>
            <Button color='gray'>Messages</Button>
          </Button.Group>
          <Button.Group outline>
            <Button gradientMonochrome='info'>Profile</Button>
            <Button gradientMonochrome='info'>Settings</Button>
            <Button gradientMonochrome='info'>Messages</Button>
          </Button.Group>
          <Button.Group outline>
            <Button gradientDuoTone='cyanToBlue'>Profile</Button>
            <Button gradientDuoTone='cyanToBlue'>Settings</Button>
            <Button gradientDuoTone='cyanToBlue'>Messages</Button>
          </Button.Group>
        </div>
      ),
    },
    {
      title: 'Outlined Buttons with Icons',
      content: 'Combine an outlined style with icons for improved clarity and functionality.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button.Group outline>
            <Button color='gray'>
              <HiUserCircle className='mr-3 h-4 w-4' />
              Profile
            </Button>
            <Button color='gray'>
              <HiAdjustments className='mr-3 h-4 w-4' />
              Settings
            </Button>
            <Button color='gray'>
              <HiCloudDownload className='mr-3 h-4 w-4' />
              Messages
            </Button>
          </Button.Group>
          <Button.Group outline>
            <Button gradientMonochrome='info'>
              <HiUserCircle className='mr-3 h-4 w-4' />
              Profile
            </Button>
            <Button gradientMonochrome='info'>
              <HiAdjustments className='mr-3 h-4 w-4' />
              Settings
            </Button>
            <Button gradientMonochrome='info'>
              <HiCloudDownload className='mr-3 h-4 w-4' />
              Messages
            </Button>
          </Button.Group>
          <Button.Group outline>
            <Button gradientDuoTone='cyanToBlue'>
              <HiUserCircle className='mr-3 h-4 w-4' />
              Profile
            </Button>
            <Button gradientDuoTone='cyanToBlue'>
              <HiAdjustments className='mr-3 h-4 w-4' />
              Settings
            </Button>
            <Button gradientDuoTone='cyanToBlue'>
              <HiCloudDownload className='mr-3 h-4 w-4' />
              Messages
            </Button>
          </Button.Group>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default ButtonGroupPage;
