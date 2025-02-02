import type { Meta, Story } from '@storybook/react/types-6-0';
import type { CarouselProps } from './Carousel';
import { Carousel } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

const Template: Story<CarouselProps> = (args) => (
  <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
    <Carousel {...args}>
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
);

export const Default = Template.bind({});
Default.args = {};

export const SlideInterval = Template.bind({});
SlideInterval.storyName = 'Slide interval';
SlideInterval.args = {
  slideInterval: 5000,
};

export const Static = Template.bind({});
Static.args = {
  slide: false,
};

export const CustomControls = Template.bind({});
CustomControls.storyName = 'With custom controls';
CustomControls.args = {
  leftControl: '<',
  rightControl: '>',
};

export const WithNoIndicators = Template.bind({});
WithNoIndicators.storyName = 'With no indicators';
WithNoIndicators.args = {
  indicators: false,
};
