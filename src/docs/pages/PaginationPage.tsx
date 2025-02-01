import { useState, type FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Pagination } from '~/lib';

const PaginationPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageContent: PageContent = {
    title: 'Pagination',
    description:
      'The Pagination component provides navigation controls for multi-page content, including numbered pages, previous/next buttons, and different layouts to suit table and list views.',
    usage: () => `import { Pagination } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Pagination',
      content: 'A basic pagination component with numbered pages.',
      code: <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />,
    },
    {
      title: 'Pagination with Icons',
      content: 'Pagination with arrow icons for better navigation visibility.',
      code: (
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          showIcons
          totalPages={100}
        />
      ),
    },
    {
      title: 'Previous and Next Buttons Only',
      content:
        'A simpler pagination layout with only previous and next buttons, useful for compact navigation.',
      code: (
        <Pagination
          currentPage={currentPage}
          layout='navigation'
          totalPages={100}
          onPageChange={onPageChange}
        />
      ),
    },
    {
      title: 'Previous and Next Buttons with Icons',
      content: 'Adds icons to the previous and next buttons for better user experience.',
      code: (
        <Pagination
          currentPage={currentPage}
          layout='navigation'
          onPageChange={onPageChange}
          showIcons
          totalPages={100}
        />
      ),
    },
    {
      title: 'Table Data Navigation',
      content: 'A pagination layout specifically designed for tables with large data sets.',
      code: (
        <div className='flex items-center justify-center text-center'>
          <Pagination
            currentPage={currentPage}
            layout='table'
            onPageChange={onPageChange}
            totalPages={1000}
          />
        </div>
      ),
    },
    {
      title: 'Table Data Navigation with Icons',
      content:
        'A table pagination layout with icons for navigating through large sets of tabular data.',
      code: (
        <div className='flex items-center justify-center text-center'>
          <Pagination
            currentPage={currentPage}
            layout='table'
            onPageChange={onPageChange}
            showIcons
            totalPages={1000}
          />
        </div>
      ),
    },
    {
      title: 'Custom Previous and Next Button Labels',
      content:
        'Customizes the text for the previous and next buttons, making navigation more descriptive.',
      code: (
        <div className='flex items-center justify-center text-center'>
          <Pagination
            currentPage={currentPage}
            layout='pagination'
            onPageChange={onPageChange}
            showIcons
            totalPages={1000}
            previousLabel='Go back'
            nextLabel='Go forward'
          />
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default PaginationPage;
