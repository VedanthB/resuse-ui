import type { FC } from 'react';
import { Spinner } from '~/lib';
import { Button } from '~/lib/components/Button';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const ButtonsPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Button',
    description:
      'Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows. The button component is probably the most widely used element in any user interface or website as it can be used to launch an action but also to link to other pages. ReuseUI provides a large variety of styles and sizes for the button component including outlined buttons, multiple colors, sizes, buttons with icons, and more.',
    usage: () => `import { Button } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default button',
      code: (
        <div className='flex flex-wrap gap-2'>
          <div>
            <Button>Default</Button>
          </div>
          <div>
            <Button color='gray'>Gray</Button>
          </div>
          <div>
            <Button color='dark'>Dark</Button>
          </div>
          <div>
            <Button color='light'>Light</Button>
          </div>
          <div>
            <Button color='success'>Success</Button>
          </div>
          <div>
            <Button color='failure'>Failure</Button>
          </div>
          <div>
            <Button color='warning'>Warning</Button>
          </div>
          <div>
            <Button color='purple'>Purple</Button>
          </div>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button pills',
      code: (
        <div className='flex flex-wrap gap-2'>
          <div>
            <Button color='gray' pill>
              Gray
            </Button>
          </div>
          <div>
            <Button color='dark' pill>
              Dark
            </Button>
          </div>
          <div>
            <Button color='light' pill>
              Light
            </Button>
          </div>
          <div>
            <Button color='success' pill>
              Success
            </Button>
          </div>
          <div>
            <Button color='failure' pill>
              Failure
            </Button>
          </div>
          <div>
            <Button color='warning' pill>
              Warning
            </Button>
          </div>
          <div>
            <Button color='purple' pill>
              Purple
            </Button>
          </div>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Gradient Monochrome',
      code: (
        <div className='flex flex-wrap gap-2'>
          <div>
            <Button gradientMonochrome='info'>Info</Button>
          </div>
          <div>
            <Button gradientMonochrome='success'>Success</Button>
          </div>
          <div>
            <Button gradientMonochrome='cyan'>Cyan</Button>
          </div>
          <div>
            <Button gradientMonochrome='teal'>Teal</Button>
          </div>
          <div>
            <Button gradientMonochrome='lime'>Lime</Button>
          </div>
          <div>
            <Button gradientMonochrome='failure'>Failure</Button>
          </div>
          <div>
            <Button gradientMonochrome='pink'>Pink</Button>
          </div>
          <div>
            <Button gradientMonochrome='purple'>Purple</Button>
          </div>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Gradient duo-tone',
      code: (
        <div className='flex flex-wrap gap-2'>
          <div>
            <Button gradientDuoTone='purpleToBlue'>Purple to Blue</Button>
          </div>
          <div>
            <Button gradientDuoTone='cyanToBlue'>Cyan to Blue</Button>
          </div>
          <div>
            <Button gradientDuoTone='greenToBlue'>Green to Blue</Button>
          </div>
          <div>
            <Button gradientDuoTone='purpleToPink'>Purple to Pink</Button>
          </div>
          <div>
            <Button gradientDuoTone='pinkToOrange'>Pink to Orange</Button>
          </div>
          <div>
            <Button gradientDuoTone='tealToLime'>Teal to Lime</Button>
          </div>
          <div>
            <Button gradientDuoTone='redToYellow'>Red to Yellow</Button>
          </div>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Outline',
      code: (
        <div className='flex flex-wrap items-center gap-2'>
          <div>
            <Button outline gradientDuoTone='purpleToBlue'>
              Purple to Blue
            </Button>
          </div>
          <div>
            <Button outline gradientDuoTone='cyanToBlue'>
              Cyan to Blue
            </Button>
          </div>
          <div>
            <Button outline gradientDuoTone='greenToBlue'>
              Green to Blue
            </Button>
          </div>
          <div>
            <Button outline gradientDuoTone='purpleToPink'>
              Purple to Pink
            </Button>
          </div>
          <div>
            <Button outline gradientDuoTone='pinkToOrange'>
              Pink to Orange
            </Button>
          </div>
          <div>
            <Button outline gradientDuoTone='tealToLime'>
              Teal to Lime
            </Button>
          </div>
          <div>
            <Button outline gradientDuoTone='redToYellow'>
              Red to Yellow
            </Button>
          </div>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button sizes',
      code: (
        <div className='flex flex-wrap items-center gap-2'>
          <div>
            <Button size='xs'>Extra small</Button>
          </div>
          <div>
            <Button size='sm'>Small</Button>
          </div>
          <div>
            <Button size='md'>Base</Button>
          </div>
          <div>
            <Button size='lg'>Large</Button>
          </div>
          <div>
            <Button size='xl'>Extra large</Button>
          </div>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Buttons with icon',
      code: (
        <div className='flex flex-wrap items-center gap-2'>
          <div>
            <Button>
              <HiShoppingCart className='mr-2 h-5 w-5' />
              Buy now
            </Button>
          </div>
          <div>
            <Button>
              Choose plan
              <HiOutlineArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </div>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button with label',
      code: (
        <div className='w-3/12'>
          <Button label='2'>Messages</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Icon buttons',
      code: (
        <div className='flex flex-wrap items-center gap-2'>
          <div>
            <Button>
              <HiOutlineArrowRight className='h-6 w-6' />
            </Button>
          </div>
          <div>
            <Button pill>
              <HiOutlineArrowRight className='h-6 w-6' />
            </Button>
          </div>
          <div>
            <Button outline>
              <HiOutlineArrowRight className='h-6 w-6' />
            </Button>
          </div>
          <div>
            <Button outline pill>
              <HiOutlineArrowRight className='h-6 w-6' />
            </Button>
          </div>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Loader',
      code: (
        <div className='flex flex-wrap items-center gap-2'>
          <div>
            <Button>
              <div className='mr-3'>
                <Spinner size='sm' light />
              </div>
              Loading ...
            </Button>
          </div>
          <div>
            <Button outline>
              <div className='mr-3'>
                <Spinner size='sm' light />
              </div>
              Loading ...
            </Button>
          </div>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Disabled',
      code: (
        <div className='w-3/12'>
          <Button disabled>Disabled button</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default ButtonsPage;
