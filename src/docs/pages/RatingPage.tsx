import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Rating } from '~/lib';

const RatingPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Rating',
    description:
      'Use the Rating component to display user reviews and testimonials with star ratings, labels, and advanced layouts.',
    usage: () => `import { Rating } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Rating',
      content: 'A simple star rating component with 4 filled stars and 1 empty star.',
      code: (
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
        </Rating>
      ),
    },
    {
      title: 'Rating with Text',
      content: 'Adds a text label indicating the rating score.',
      code: (
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>4.95 out of 5</p>
        </Rating>
      ),
    },
    {
      title: 'Rating with Count and Reviews',
      content: 'Displays the numerical rating, a separator dot, and a clickable review count link.',
      code: (
        <Rating>
          <Rating.Star />
          <p className='ml-2 text-sm font-bold text-gray-900 dark:text-white'>4.95</p>
          <span className='mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400'></span>
          <a
            href='#'
            className='text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white'
          >
            73 reviews
          </a>
        </Rating>
      ),
    },
    {
      title: 'Star Sizing',
      content:
        'Demonstrates different sizes for the star rating component: small, medium, and large.',
      code: (
        <>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
          <Rating size='md'>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
          <Rating size='lg'>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
        </>
      ),
    },
    {
      title: 'Advanced Rating with Breakdown',
      content: 'Shows a breakdown of ratings with percentage-filled bars for each star level.',
      code: (
        <>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
              4.95 out of 5
            </p>
          </Rating>
          <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
            1,745 global ratings
          </p>
          <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
          <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
          <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
          <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
          <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
        </>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default RatingPage;
