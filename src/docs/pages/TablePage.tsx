import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Checkbox, Table } from '~/lib';

const TablePage: FC = () => {
  const pageContent: PageContent = {
    title: 'Table',
    description:
      'Use the Table component to display structured data, including text, numbers, images, and links. Supports features like striped rows, hover states, and checkboxes.',
    usage: () => `import { Table } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Table',
      content: 'A basic table displaying product details.',
      code: (
        <Table>
          <Table.Head>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className='sr-only'>Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {[
              { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
              {
                name: 'Microsoft Surface Pro',
                color: 'White',
                category: 'Laptop PC',
                price: '$1999',
              },
              { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
            ].map((product, index) => (
              <Table.Row key={index} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {product.name}
                </Table.Cell>
                <Table.Cell>{product.color}</Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>
                  <a
                    href='/tables'
                    className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ),
    },
    {
      title: 'Striped Rows',
      content: 'A table with alternating row colors for better readability.',
      code: (
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className='sr-only'>Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {[
              { name: 'Google Pixel Phone', color: 'Gray', category: 'Phone', price: '$799' },
              { name: 'Apple Watch 5', color: 'Red', category: 'Wearables', price: '$999' },
            ].map((product, index) => (
              <Table.Row key={index} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {product.name}
                </Table.Cell>
                <Table.Cell>{product.color}</Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>
                  <a
                    href='/tables'
                    className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ),
    },
    {
      title: 'Hover State',
      content: 'Rows highlight on hover for better interactivity.',
      code: (
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className='sr-only'>Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {[
              { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
              {
                name: 'Microsoft Surface Pro',
                color: 'White',
                category: 'Laptop PC',
                price: '$1999',
              },
            ].map((product, index) => (
              <Table.Row key={index} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {product.name}
                </Table.Cell>
                <Table.Cell>{product.color}</Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>
                  <a
                    href='/tables'
                    className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ),
    },
    {
      title: 'Table with Checkboxes',
      content: 'Includes checkboxes for selecting multiple rows.',
      code: (
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className='!p-4'>
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className='sr-only'>Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {[
              { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: '$2999' },
              { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
            ].map((product, index) => (
              <Table.Row key={index} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell className='!p-4'>
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                  {product.name}
                </Table.Cell>
                <Table.Cell>{product.color}</Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>
                  <a
                    href='/tables'
                    className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default TablePage;
