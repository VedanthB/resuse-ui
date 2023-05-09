import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Carousel } from '~/lib';

const CarouselPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Carousel',
    description:
      'Use the carousel component to slide through multiple elements and images using custom controls, indicators, intervals, and options The carousel component can be used to cycle through a set of elements using custom options, controls, and indicators based on the JavaScript object from ReuseUI.',
    usage: () => `import { Carousel } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default carousel',
      code: (
        <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel>
            <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' alt='...' />
          </Carousel>
        </div>
      ),
    },
    {
      title: 'Sliding interval',
      code: (
        <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel slideInterval={5000}>
            <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' alt='...' />
          </Carousel>
        </div>
      ),
    },
    {
      title: 'Static carousel',
      code: (
        <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel slide={false}>
            <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' alt='...' />
          </Carousel>
        </div>
      ),
    },
    {
      title: 'Custom Controls',
      code: (
        <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel leftControl='left' rightControl='right'>
            <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' alt='...' />
          </Carousel>
        </div>
      ),
    },
    {
      title: 'Indicators',
      code: (
        <div className='grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel>
            <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' alt='...' />
          </Carousel>
          <Carousel indicators={false}>
            <img src='https://flowbite.com/docs/images/carousel/carousel-1.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' alt='...' />
            <img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' alt='...' />
          </Carousel>
        </div>
      ),
    },
    {
      title: 'Slide as anything',
      code: (
        <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel>
            <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
              Slide 1
            </div>
            <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
              Slide 2
            </div>
            <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
              Slide 3
            </div>
          </Carousel>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default CarouselPage;
