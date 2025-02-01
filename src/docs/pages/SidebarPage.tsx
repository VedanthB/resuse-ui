import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Badge, Sidebar } from '~/lib';
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';

const SidebarPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Sidebar',
    description:
      'Use the Sidebar component to display a vertical navigation menu with multiple levels, separators, and interactive elements for dashboards and applications.',
    usage: () => `import { Sidebar } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Sidebar',
      content: 'A basic sidebar with multiple menu items.',
      code: (
        <div className='w-fit'>
          <Sidebar aria-label='Default sidebar example'>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href='#' icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item href='#' icon={HiViewBoards} label='Pro' labelColor='alternative'>
                  Kanban
                </Sidebar.Item>
                <Sidebar.Item href='#' icon={HiInbox} label='3'>
                  Inbox
                </Sidebar.Item>
                <Sidebar.Item href='#' icon={HiUser}>
                  Users
                </Sidebar.Item>
                <Sidebar.Item href='#' icon={HiShoppingBag}>
                  Products
                </Sidebar.Item>
                <Sidebar.Item href='#' icon={HiArrowSmRight}>
                  Sign In
                </Sidebar.Item>
                <Sidebar.Item href='#' icon={HiTable}>
                  Sign Up
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      ),
    },
    {
      title: 'Sidebar with Multi-Level Dropdown',
      content: 'Includes a collapsible section under "E-commerce".',
      code: (
        <div className='w-fit'>
          <Sidebar aria-label='Sidebar with multi-level dropdown example'>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href='#' icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Collapse icon={HiShoppingBag} label='E-commerce'>
                  <Sidebar.Item href='#'>Products</Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item href='#' icon={HiInbox}>
                  Inbox
                </Sidebar.Item>
                <Sidebar.Item href='#' icon={HiUser}>
                  Users
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      ),
    },
    {
      title: 'Sidebar with Content Separator',
      content: 'Demonstrates grouping menu items with a content separator.',
      code: (
        <div className='w-fit'>
          <Sidebar aria-label='Sidebar with content separator example'>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href='#' icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item href='#' icon={HiInbox}>
                  Inbox
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href='#' icon={BiBuoy}>
                  Help
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      ),
    },
    {
      title: 'Sidebar with CTA Button',
      content: 'Includes a call-to-action section for promotions or upgrades.',
      code: (
        <div className='w-fit'>
          <Sidebar aria-label='Sidebar with call to action button example'>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href='#' icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item href='#' icon={HiInbox}>
                  Inbox
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
            <Sidebar.CTA>
              <div className='mb-3 flex items-center'>
                <Badge color='warning'>Beta</Badge>
                <button
                  aria-label='Close'
                  className='ml-auto h-6 w-6 rounded-lg bg-blue-50 p-1 text-blue-900 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800'
                  type='button'
                >
                  ✕
                </button>
              </div>
              <p className='mb-3 text-sm text-blue-900 dark:text-blue-400'>
                Preview the new navigation! You can disable it in your profile settings.
              </p>
              <a
                className='text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
                href='#'
              >
                Turn off new navigation
              </a>
            </Sidebar.CTA>
          </Sidebar>
        </div>
      ),
    },
    {
      title: 'Sidebar with Logo Branding',
      content: 'Adds a brand logo at the top of the sidebar.',
      code: (
        <div className='w-fit'>
          <Sidebar aria-label='Sidebar with logo branding example'>
            <Sidebar.Logo href='#' img='favicon.png' imgAlt='ReuseUI logo'>
              ReuseUI
            </Sidebar.Logo>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href='#' icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item href='#' icon={HiInbox}>
                  Inbox
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default SidebarPage;
