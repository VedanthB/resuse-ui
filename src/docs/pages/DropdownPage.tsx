import type { FC } from 'react';
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';
import { Dropdown } from '../../lib';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';

const DropdownPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Dropdown',
    description:
      'The Dropdown component provides an interactive way to display menu items in a compact, collapsible format. It can be used for navigation, settings, or quick actions triggered by a button or any other UI element. Customize layouts, styles, icons, and placements for a seamless user experience.',
    usage: () => `import { Dropdown } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Basic Dropdown',
      content:
        'A simple dropdown that expands when clicked, revealing a list of menu items. Ideal for navigation menus or quick actions.',
      code: (
        <Dropdown label='Dropdown button' dismissOnClick={false}>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown with Divider',
      content:
        'Use dividers to separate items within the dropdown, making it visually easier to differentiate sections.',
      code: (
        <Dropdown label='Dropdown button'>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown with Header',
      content:
        'A dropdown can include a header section with additional information, such as a user profile summary or metadata.',
      code: (
        <Dropdown label='Dropdown button'>
          <Dropdown.Header>
            <span className='block text-sm'>Vedanth Bora</span>
            <span className='block truncate text-sm font-medium'>vedanthbora@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Inline Dropdown',
      content:
        'The inline dropdown appears within the flow of the page instead of as a popover. Useful for toolbars and in-line actions.',
      code: (
        <Dropdown label='Dropdown' inline>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown with Icons',
      content:
        'Enhance dropdown items with icons for better visual representation. Icons can indicate action types and improve clarity.',
      code: (
        <Dropdown label='Dropdown'>
          <Dropdown.Header>
            <span className='block text-sm'>Vedanth Bora</span>
            <span className='block truncate text-sm font-medium'>vedanthbora@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
          <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
          <Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown with Click Handlers',
      content:
        'Each dropdown item can trigger an action when clicked. This is useful for performing quick operations without navigating to another page.',
      code: (
        <Dropdown label='Dropdown'>
          <Dropdown.Item onClick={() => alert('Dashboard!')}>Dashboard</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Settings!')}>Settings</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Earnings!')}>Earnings</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Sign out!')}>Sign out</Dropdown.Item>
        </Dropdown>
      ),
    },
    {
      title: 'Dropdown Sizes',
      content:
        'Dropdowns can be adjusted for different sizes to match UI needs. This example shows both a small and large dropdown.',
      code: (
        <div className='flex items-center gap-4'>
          <Dropdown label='Small dropdown' size='sm'>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Dropdown label='Large dropdown' size='lg'>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      ),
    },
    {
      title: 'Dropdown Placement',
      content:
        'Position the dropdown in different directions based on available space and UI preferences. Options include top, right, bottom, and left placements.',
      code: (
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-4'>
            <Dropdown label='Dropdown top' placement='top'>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label='Dropdown right' placement='right'>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label='Dropdown bottom' placement='bottom'>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label='Dropdown left' placement='left'>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
          <div className='flex items-center gap-4'>
            <Dropdown label='Dropdown left start' placement='left-start'>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Dropdown label='Dropdown right start' placement='right-start'>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default DropdownPage;
