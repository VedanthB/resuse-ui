import { cleanup, render, screen } from '@testing-library/react';
import type { FC } from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { describe, expect, it } from 'vitest';
import { ReuseUI } from '../ReuseUI';
import { Footer } from './Footer';

describe('Components / Footer', () => {
  describe('Rendering', () => {
    it('should render an `<a>` with an `<img>` on `Footer.Brand href=".."`', () => {
      render(
        <Footer>
          <Footer.Brand alt='ReuseUI' href='https://ReuseUI.com' src=''>
            ReuseUI
          </Footer.Brand>
        </Footer>,
      );
      const a = screen.getByTestId('ReuseUI-footer-brand');
      const img = screen.getByAltText('ReuseUI');

      expect(a).toBeInTheDocument();
      expect(a).toContainElement(img);
    });
  });

  it('should render an `<img>` on `Footer.Brand src=".."`', () => {
    render(
      <Footer>
        <Footer.Brand alt='ReuseUI' src=''>
          ReuseUI
        </Footer.Brand>
      </Footer>,
    );
    const img = screen.getByAltText('ReuseUI');

    expect(img).toBeInTheDocument();
  });

  it('should render an `<a>` on `Footer.Copyright href=".."`', () => {
    render(
      <Footer>
        <Footer.Copyright by='ReuseUI' href='https://ReuseUI.com' year={2022}>
          ReuseUI
        </Footer.Copyright>
      </Footer>,
    );

    expect(copyright()).toContainElement(screen.getByRole('link'));
  });

  it('should render an `<a>` on `Footer.Icon href=".."`', () => {
    render(
      <Footer>
        <Footer.Icon ariaLabel='Icon' href='/' icon={BsFacebook} />
      </Footer>,
    );
    const iconLink = screen.getAllByRole('link')[0];

    expect(iconLink).toContainElement(icon());
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        footer: {
          root: {
            base: 'text-gray-100',
          },
        },
      };
      render(
        <ReuseUI theme={{ theme }}>
          <TestFooter />
        </ReuseUI>,
      );

      expect(footer()).toHaveClass('text-gray-100');
    });

    it('should use `bgDark` classes', () => {
      const theme = {
        footer: {
          root: {
            bgDark: 'text-gray-100',
          },
        },
      };
      render(
        <ReuseUI theme={{ theme }}>
          <TestFooter />
        </ReuseUI>,
      );

      expect(footer()).toHaveClass('text-gray-100');
    });

    it('should use `container` classes', () => {
      const theme = {
        footer: {
          root: {
            container: 'text-gray-100',
          },
        },
      };
      render(
        <ReuseUI theme={{ theme }}>
          <TestFooter />
        </ReuseUI>,
      );

      expect(footer()).toHaveClass('text-gray-100');
    });

    describe('`Footer.Brand`', () => {
      it('should use `brand` classes', () => {
        const theme = {
          footer: {
            brand: {
              base: 'text-gray-100',
              img: 'text-gray-200',
              span: 'text-gray-300',
            },
          },
        };
        render(
          <ReuseUI theme={{ theme }}>
            <Footer>
              <Footer.Brand alt='ReuseUI' href='https://ReuseUI.com' src=''>
                ReuseUI
              </Footer.Brand>
            </Footer>
          </ReuseUI>,
        );

        expect(brand()).toHaveClass('text-gray-100');
        expect(screen.getByRole('img')).toHaveClass('text-gray-200');

        cleanup();
        render(
          <ReuseUI theme={{ theme }}>
            <Footer>
              <Footer.Brand href='/' src=''>
                ReuseUI
              </Footer.Brand>
            </Footer>
          </ReuseUI>,
        );

        expect(screen.getByTestId('ReuseUI-footer-brand-span')).toHaveClass('text-gray-300');
      });
    });

    describe('`Footer.Copyright`', () => {
      it('should use `copyright` classes', () => {
        const theme = {
          footer: {
            copyright: {
              base: 'text-gray-100',
              href: 'text-gray-200',
              span: 'text-gray-300',
            },
          },
        };
        render(
          <ReuseUI theme={{ theme }}>
            <Footer>
              <Footer.Copyright by='ReuseUI' year={2022}>
                Test
              </Footer.Copyright>
            </Footer>
          </ReuseUI>,
        );

        expect(copyright()).toHaveClass('text-gray-100');
        expect(screen.getByTestId('ReuseUI-footer-copyright-span')).toHaveClass('text-gray-300');

        cleanup();
        render(
          <ReuseUI theme={{ theme }}>
            <Footer>
              <Footer.Copyright by='ReuseUI' href='/' year={2022}>
                Test
              </Footer.Copyright>
            </Footer>
          </ReuseUI>,
        );

        expect(screen.getByRole('link')).toHaveClass('text-gray-200');
      });
    });

    describe('`Footer.Icon`', () => {
      it('should use `icon` classes', () => {
        const theme = {
          footer: {
            icon: {
              base: 'text-gray-800',
              size: 'text-gray-900',
            },
          },
        };
        render(
          <ReuseUI theme={{ theme }}>
            <Footer>
              <Footer.Icon ariaLabel='Icon' href='/' icon={BsFacebook} />
            </Footer>
          </ReuseUI>,
        );

        expect(icon()).toHaveClass('text-gray-800');

        cleanup();
        render(
          <ReuseUI theme={{ theme }}>
            <Footer>
              <Footer.Icon ariaLabel='Icon' icon={BsFacebook} />
            </Footer>
          </ReuseUI>,
        );

        expect(icon()).toHaveClass('text-gray-900');
      });
    });

    describe('`Footer.Title`', () => {
      it('should use `title` classes', () => {
        const theme = {
          footer: {
            title: {
              base: 'text-gray-100',
            },
          },
        };
        render(
          <ReuseUI theme={{ theme }}>
            <Footer.Title title='ReuseUI' />
          </ReuseUI>,
        );

        expect(title()).toHaveClass('text-gray-100');
      });
    });
  });
});

const TestFooter: FC = () => (
  <Footer bgDark container>
    <div className='w-full'>
      <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
        <div>
          <Footer.Brand
            href='https://ReuseUI.com'
            src='https://ReuseUI.com/docs/images/logo.svg'
            alt='ReuseUI Logo'
            name='ReuseUI'
          />
        </div>
        <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
          <div>
            <Footer.Title title='about' />
            <Footer.LinkGroup col>
              <Footer.Link href='#'>ReuseUI</Footer.Link>
              <Footer.Link href='#'>Tailwind CSS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title='Follow us' />
            <Footer.LinkGroup col>
              <Footer.Link href='#'>Github</Footer.Link>
              <Footer.Link href='#'>Discord</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title='Legal' />
            <Footer.LinkGroup col>
              <Footer.Link href='#'>Privacy Policy</Footer.Link>
              <Footer.Link href='#'>Terms & Conditions</Footer.Link>
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
);

const brand = () => screen.getByTestId('ReuseUI-footer-brand');

const copyright = () => screen.getByTestId('ReuseUI-footer-copyright');

const footer = () => screen.getByTestId('ReuseUI-footer');

const icon = () => screen.getByTestId('ReuseUI-footer-icon');

const title = () => screen.getByTestId('ReuseUI-footer-title');
