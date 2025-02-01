import type { FC } from 'react';
import { Button, Spinner } from '~/lib';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const ButtonsPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Button',
    description:
      'The Button component is one of the most commonly used UI elements for triggering actions, navigating, and submitting forms. ReuseUI provides a variety of button styles, including solid, outlined, gradient, and icon buttons, along with multiple sizes and interaction states.',
    usage: () => `import { Button } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Basic Buttons',
      content: 'Standard buttons in various colors for different actions.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button>Default</Button>
          <Button color='gray'>Gray</Button>
          <Button color='dark'>Dark</Button>
          <Button color='light'>Light</Button>
          <Button color='success'>Success</Button>
          <Button color='failure'>Failure</Button>
          <Button color='warning'>Warning</Button>
          <Button color='purple'>Purple</Button>
        </div>
      ),
    },
    {
      title: 'Pill-shaped Buttons',
      content: 'Use the `pill` prop to create rounded buttons.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button color='gray' pill>
            Gray
          </Button>
          <Button color='dark' pill>
            Dark
          </Button>
          <Button color='light' pill>
            Light
          </Button>
          <Button color='success' pill>
            Success
          </Button>
          <Button color='failure' pill>
            Failure
          </Button>
          <Button color='warning' pill>
            Warning
          </Button>
          <Button color='purple' pill>
            Purple
          </Button>
        </div>
      ),
    },
    {
      title: 'Gradient Monochrome Buttons',
      content: 'Apply single-tone gradient backgrounds using `gradientMonochrome`.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button gradientMonochrome='info'>Info</Button>
          <Button gradientMonochrome='success'>Success</Button>
          <Button gradientMonochrome='cyan'>Cyan</Button>
          <Button gradientMonochrome='teal'>Teal</Button>
          <Button gradientMonochrome='lime'>Lime</Button>
          <Button gradientMonochrome='failure'>Failure</Button>
          <Button gradientMonochrome='pink'>Pink</Button>
          <Button gradientMonochrome='purple'>Purple</Button>
        </div>
      ),
    },
    {
      title: 'Gradient Duo-tone Buttons',
      content: 'Dual-tone gradient buttons for a more dynamic look.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button gradientDuoTone='purpleToBlue'>Purple to Blue</Button>
          <Button gradientDuoTone='cyanToBlue'>Cyan to Blue</Button>
          <Button gradientDuoTone='greenToBlue'>Green to Blue</Button>
          <Button gradientDuoTone='purpleToPink'>Purple to Pink</Button>
          <Button gradientDuoTone='pinkToOrange'>Pink to Orange</Button>
          <Button gradientDuoTone='tealToLime'>Teal to Lime</Button>
          <Button gradientDuoTone='redToYellow'>Red to Yellow</Button>
        </div>
      ),
    },
    {
      title: 'Outlined Buttons',
      content: 'Buttons with an outline instead of a solid background.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button outline gradientDuoTone='purpleToBlue'>
            Purple to Blue
          </Button>
          <Button outline gradientDuoTone='cyanToBlue'>
            Cyan to Blue
          </Button>
          <Button outline gradientDuoTone='greenToBlue'>
            Green to Blue
          </Button>
          <Button outline gradientDuoTone='purpleToPink'>
            Purple to Pink
          </Button>
          <Button outline gradientDuoTone='pinkToOrange'>
            Pink to Orange
          </Button>
          <Button outline gradientDuoTone='tealToLime'>
            Teal to Lime
          </Button>
          <Button outline gradientDuoTone='redToYellow'>
            Red to Yellow
          </Button>
        </div>
      ),
    },
    {
      title: 'Button Sizes',
      content: 'Buttons available in different sizes for flexibility.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button size='xs'>Extra Small</Button>
          <Button size='sm'>Small</Button>
          <Button size='md'>Default</Button>
          <Button size='lg'>Large</Button>
          <Button size='xl'>Extra Large</Button>
        </div>
      ),
    },
    {
      title: 'Buttons with Icons',
      content: 'Buttons that include icons for better visual representation.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button>
            <HiShoppingCart className='mr-2 h-5 w-5' />
            Buy now
          </Button>
          <Button>
            Choose plan
            <HiOutlineArrowRight className='ml-2 h-5 w-5' />
          </Button>
        </div>
      ),
    },
    {
      title: 'Button with Label Badge',
      content: 'Attach a label to a button to display additional information.',
      code: (
        <div className='w-3/12'>
          <Button label='2'>Messages</Button>
        </div>
      ),
    },
    {
      title: 'Icon Buttons',
      content: 'Minimal buttons that only display an icon.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button>
            <HiOutlineArrowRight className='h-6 w-6' />
          </Button>
          <Button pill>
            <HiOutlineArrowRight className='h-6 w-6' />
          </Button>
          <Button outline>
            <HiOutlineArrowRight className='h-6 w-6' />
          </Button>
          <Button outline pill>
            <HiOutlineArrowRight className='h-6 w-6' />
          </Button>
        </div>
      ),
    },
    {
      title: 'Loading Indicator (Spinner)',
      content: 'Use a spinner inside a button to indicate a loading state.',
      code: (
        <div className='flex flex-wrap gap-2'>
          <Button>
            <Spinner size='sm' light className='mr-3' />
            Loading...
          </Button>
          <Button outline>
            <Spinner size='sm' light className='mr-3' />
            Loading...
          </Button>
        </div>
      ),
    },
    {
      title: 'Disabled Button',
      content: 'A button in a disabled state, preventing interaction.',
      code: (
        <div className='w-3/12'>
          <Button disabled>Disabled</Button>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default ButtonsPage;
