import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Carousel } from '~/lib';

const CarouselPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Carousel',
    description:
      "The Carousel component provides a seamless way to showcase multiple items in a sliding format. Whether it's an image slider, a testimonial rotator, or a product showcase, the Carousel is fully customizable with slide intervals, navigation controls, and indicators. Enhance user engagement with smooth transitions and an intuitive interface.",
    usage: () => `import { Carousel } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Basic Carousel',
      content:
        'A simple rotating carousel that cycles through images automatically. Perfect for hero banners, image galleries, and slideshows where smooth transitions are key.',
      code: (
        <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel>
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-1_n3vlkd.svg'
              alt='Slide 1'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-2_cr55u1.svg'
              alt='Slide 2'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-3_cu56mb.svg'
              alt='Slide 3'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-4_h5vfqr.svg'
              alt='Slide 4'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-5_rcdzxc.svg'
              alt='Slide 5'
            />
          </Carousel>
        </div>
      ),
    },
    {
      title: 'Custom Slide Interval',
      content:
        'Adjust the duration of each slide using a custom interval. In this example, slides change every 5 seconds (5000ms) instead of the default speed. Useful when content requires longer visibility.',
      code: (
        <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel slideInterval={5000}>
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-1_n3vlkd.svg'
              alt='Slide 1'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-2_cr55u1.svg'
              alt='Slide 2'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-3_cu56mb.svg'
              alt='Slide 3'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-4_h5vfqr.svg'
              alt='Slide 4'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-5_rcdzxc.svg'
              alt='Slide 5'
            />
          </Carousel>
        </div>
      ),
    },
    {
      title: 'Static Carousel (No Auto-Sliding)',
      content:
        'Disable automatic sliding and let users navigate manually. This is useful for product carousels, testimonials, or interactive showcases where user control is preferred over automatic transitions.',
      code: (
        <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel slide={false}>
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-1_n3vlkd.svg'
              alt='Slide 1'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-2_cr55u1.svg'
              alt='Slide 2'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-3_cu56mb.svg'
              alt='Slide 3'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-4_h5vfqr.svg'
              alt='Slide 4'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-5_rcdzxc.svg'
              alt='Slide 5'
            />
          </Carousel>
        </div>
      ),
    },
    {
      title: 'Custom Navigation Controls',
      content:
        'Replace default arrows with custom navigation buttons. This example uses simple text-based arrows (◀ ▶), but you can implement icons or buttons to match your UI.',
      code: (
        <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel leftControl='◀' rightControl='▶'>
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-1_n3vlkd.svg'
              alt='Slide 1'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-2_cr55u1.svg'
              alt='Slide 2'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-3_cu56mb.svg'
              alt='Slide 3'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-4_h5vfqr.svg'
              alt='Slide 4'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-5_rcdzxc.svg'
              alt='Slide 5'
            />
          </Carousel>
        </div>
      ),
    },
    {
      title: 'With and Without Indicators',
      content:
        'Indicators (dots below the carousel) help users track their current slide. This example compares a carousel with and without indicators.',
      code: (
        <div className='grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel>
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-1_n3vlkd.svg'
              alt='Slide 1'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-2_cr55u1.svg'
              alt='Slide 2'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-3_cu56mb.svg'
              alt='Slide 3'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-4_h5vfqr.svg'
              alt='Slide 4'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-5_rcdzxc.svg'
              alt='Slide 5'
            />
          </Carousel>
          <Carousel indicators={false}>
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-1_n3vlkd.svg'
              alt='Slide 1'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-2_cr55u1.svg'
              alt='Slide 2'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-3_cu56mb.svg'
              alt='Slide 3'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-4_h5vfqr.svg'
              alt='Slide 4'
            />
            <img
              src='https://res.cloudinary.com/supertramp69420/image/upload/v1738449525/carousel-5_rcdzxc.svg'
              alt='Slide 5'
            />
          </Carousel>
        </div>
      ),
    },
    {
      title: 'Carousel with Custom Content',
      content:
        'You’re not limited to images! The carousel supports text, icons, or any custom components. This is useful for displaying testimonials, announcements, or feature highlights.',
      code: (
        <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
          <Carousel>
            <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white text-lg font-bold'>
              "Slide 1: Custom Content"
            </div>
            <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white text-lg font-bold'>
              "Slide 2: Custom Content"
            </div>
            <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white text-lg font-bold'>
              "Slide 3: Custom Content"
            </div>
          </Carousel>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default CarouselPage;
