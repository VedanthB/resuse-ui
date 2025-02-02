import type { FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Footer } from '~/lib';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterPage: FC = () => {
  const pageContent: PageContent = {
    title: 'Footer',
    description:
      'The Footer component is a structured section typically placed at the bottom of a page. It helps provide navigation, branding, legal links, and social media integration. Built with React and Tailwind CSS, it is fully customizable to fit different layouts and styles.',
    usage: () => `import { Footer } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Basic Footer',
      content:
        'A simple footer with copyright information and quick navigation links. Suitable for minimal layouts.',
      code: (
        <Footer container>
          <Footer.Copyright href='#' by='ReuseUI™' year={2022} />
          <Footer.LinkGroup>
            <Footer.Link href='#'>About</Footer.Link>
            <Footer.Link href='#'>Privacy Policy</Footer.Link>
            <Footer.Link href='#'>Licensing</Footer.Link>
            <Footer.Link href='#'>Contact</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      ),
    },
    {
      title: 'Footer with Logo',
      content:
        'This version includes a brand logo along with navigation links, reinforcing brand identity while maintaining clarity.',
      code: (
        <Footer container>
          <div className='w-full text-center'>
            <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
              <Footer.Brand
                href='https://reuseUI.com' //TODO: update the link here
                src='https://reuseUI.com/docs/images/logo.svg'
                alt='ReuseUI Logo'
                name='ReuseUI'
              />
              <Footer.LinkGroup>
                <Footer.Link href='#'>About</Footer.Link>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Licensing</Footer.Link>
                <Footer.Link href='#'>Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <Footer.Divider />
            <Footer.Copyright href='#' by='ReuseUI™' year={2022} />
          </div>
        </Footer>
      ),
    },
    {
      title: 'Footer with Social Media Icons',
      content:
        'Enhance user engagement by including social media icons, allowing visitors to connect with external platforms directly.',
      code: (
        <Footer container>
          <div className='w-full'>
            <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
              <div>
                <Footer.Brand
                  href='https://reuseUI.com' //TODO: update the link here
                  src='https://reuseUI.com/docs/images/logo.svg'
                  alt='reuseUI Logo'
                  name='reuseUI'
                />
              </div>
              <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                  <Footer.Title title='About' />
                  <Footer.LinkGroup col>
                    <Footer.Link href='#'>ReuseUI</Footer.Link>
                    <Footer.Link href='#'>Tailwind CSS</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title='Follow Us' />
                  <Footer.LinkGroup col>
                    <Footer.Link href='#'>GitHub</Footer.Link>
                    <Footer.Link href='#'>Discord</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title='Legal' />
                  <Footer.LinkGroup col>
                    <Footer.Link href='#'>Privacy Policy</Footer.Link>
                    <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
              <Footer.Copyright href='#' by='ReuseUI™' year={2022} />
              <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
                <Footer.Icon href='#' icon={BsFacebook} />
                <Footer.Icon href='#' icon={BsInstagram} />
                <Footer.Icon href='#' icon={BsTwitter} />
                <Footer.Icon href='#' icon={BsGithub} />
                <Footer.Icon href='#' icon={BsDribbble} />
              </div>
            </div>
          </div>
        </Footer>
      ),
    },
    {
      title: 'Footer with Sitemap Links',
      content:
        'A structured sitemap with categorized links, making it easier for users to navigate different sections of a website.',
      code: (
        <Footer bgDark>
          <div className='w-full'>
            <div className='grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4'>
              <div>
                <Footer.Title title='Company' />
                <Footer.LinkGroup col>
                  <Footer.Link href='#'>About</Footer.Link>
                  <Footer.Link href='#'>Careers</Footer.Link>
                  <Footer.Link href='#'>Brand Center</Footer.Link>
                  <Footer.Link href='#'>Blog</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Help Center' />
                <Footer.LinkGroup col>
                  <Footer.Link href='#'>Discord Server</Footer.Link>
                  <Footer.Link href='#'>Twitter</Footer.Link>
                  <Footer.Link href='#'>Facebook</Footer.Link>
                  <Footer.Link href='#'>Contact Us</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Legal' />
                <Footer.LinkGroup col>
                  <Footer.Link href='#'>Privacy Policy</Footer.Link>
                  <Footer.Link href='#'>Licensing</Footer.Link>
                  <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title='Download' />
                <Footer.LinkGroup col>
                  <Footer.Link href='#'>iOS</Footer.Link>
                  <Footer.Link href='#'>Android</Footer.Link>
                  <Footer.Link href='#'>Windows</Footer.Link>
                  <Footer.Link href='#'>MacOS</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <div className='w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between'>
              <Footer.Copyright href='#' by='ReuseUI™' year={2022} />
              <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
                <Footer.Icon href='#' icon={BsFacebook} />
                <Footer.Icon href='#' icon={BsInstagram} />
                <Footer.Icon href='#' icon={BsTwitter} />
                <Footer.Icon href='#' icon={BsGithub} />
                <Footer.Icon href='#' icon={BsDribbble} />
              </div>
            </div>
          </div>
        </Footer>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default FooterPage;
