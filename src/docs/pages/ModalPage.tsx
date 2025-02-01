import { useState, type FC } from 'react';
import type { CodeExample, PageContent } from './DemoPage';
import { DemoPage } from './DemoPage';
import { Button, Checkbox, Label, Modal, Select, TextInput } from '~/lib';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const ModalPage: FC = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [modalSize, setModalSize] = useState<string>('md');
  const [modalPlacement, setModalPlacement] = useState<string>('center');

  const pageContent: PageContent = {
    title: 'Modal',
    description:
      'The Modal component provides an interactive dialog box that overlays the main content. It supports various sizes, placements, and styles to suit different UI needs.',
    usage: () => `import { Modal } from 'reuseui-react';`,
  };

  const examples: CodeExample[] = [
    {
      title: 'Default Modal',
      content: 'A standard modal that overlays the main content and requires user interaction.',
      code: (
        <>
          <Button onClick={() => setOpenModal('default')}>Toggle modal</Button>
          <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
            <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Body>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                With less than a month to go before the European Union enacts new consumer privacy
                laws for its citizens, companies around the world are updating their terms of
                service agreements to comply.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenModal(undefined)}>I accept</Button>
              <Button color='gray' onClick={() => setOpenModal(undefined)}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ),
    },
    {
      title: 'Dismissible Modal',
      content:
        'A modal that users can close by clicking outside the dialog or pressing the escape key.',
      code: (
        <>
          <Button onClick={() => setOpenModal('dismissible')}>Toggle modal</Button>
          <Modal
            dismissible
            show={openModal === 'dismissible'}
            onClose={() => setOpenModal(undefined)}
          >
            <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Body>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect
                on May 25 and is meant to ensure a common set of data rights in the European Union.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setOpenModal(undefined)}>I accept</Button>
              <Button color='gray' onClick={() => setOpenModal(undefined)}>
                Decline
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ),
    },
    {
      title: 'Pop-up Modal',
      content: 'A compact pop-up modal for alert messages or quick user confirmations.',
      code: (
        <>
          <Button onClick={() => setOpenModal('pop-up')}>Toggle modal</Button>
          <Modal
            show={openModal === 'pop-up'}
            size='md'
            popup
            onClose={() => setOpenModal(undefined)}
          >
            <Modal.Body>
              <div className='text-center'>
                <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
                <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                  Are you sure you want to delete this product?
                </h3>
                <div className='flex justify-center gap-4'>
                  <Button color='failure' onClick={() => setOpenModal(undefined)}>
                    Yes, I'm sure
                  </Button>
                  <Button color='gray' onClick={() => setOpenModal(undefined)}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
      ),
    },
    {
      title: 'Modal with Form Elements',
      content:
        'A modal that includes input fields, checkboxes, and buttons, commonly used for authentication or form submission.',
      code: (
        <>
          <Button onClick={() => setOpenModal('form-elements')}>Toggle modal</Button>
          <Modal
            show={openModal === 'form-elements'}
            size='md'
            popup
            onClose={() => setOpenModal(undefined)}
          >
            <Modal.Body>
              <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                Sign in to our platform
              </h3>
              <div className='mb-4'>
                <Label htmlFor='email' value='Your email' />
                <TextInput id='email' placeholder='name@company.com' required />
              </div>
              <div className='mb-4'>
                <Label htmlFor='password' value='Your password' />
                <TextInput id='password' type='password' required />
              </div>
              <div className='flex justify-between mb-4'>
                <Checkbox id='remember' />
                <Label htmlFor='remember'>Remember me</Label>
              </div>
              <Button>Log in</Button>
            </Modal.Body>
          </Modal>
        </>
      ),
    },
    {
      title: 'Modal Sizing',
      content:
        'Change the modal size dynamically. Available sizes include sm, md, lg, xl, and 2xl to 7xl.',
      code: (
        <>
          <Select defaultValue='md' onChange={(event) => setModalSize(event.target.value)}>
            <option value='sm'>Small</option>
            <option value='md'>Medium</option>
            <option value='lg'>Large</option>
            <option value='xl'>Extra Large</option>
          </Select>
          <Button onClick={() => setOpenModal('size')}>Toggle modal</Button>
          <Modal
            show={openModal === 'size'}
            size={modalSize}
            onClose={() => setOpenModal(undefined)}
          >
            <Modal.Header>Custom Sized Modal</Modal.Header>
            <Modal.Body>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                Modify the size of this modal using the dropdown above.
              </p>
            </Modal.Body>
          </Modal>
        </>
      ),
    },
    {
      title: 'Modal Placement',
      content:
        'Position the modal in different areas of the screen, such as top-left, center, or bottom-right.',
      code: (
        <>
          <Select defaultValue='center' onChange={(event) => setModalPlacement(event.target.value)}>
            <option value='center'>Center</option>
            <option value='top-left'>Top left</option>
            <option value='top-center'>Top center</option>
            <option value='top-right'>Top right</option>
            <option value='bottom-left'>Bottom left</option>
            <option value='bottom-center'>Bottom center</option>
            <option value='bottom-right'>Bottom right</option>
          </Select>
          <Button onClick={() => setOpenModal('placement')}>Toggle modal</Button>
          <Modal
            show={openModal === 'placement'}
            position={modalPlacement}
            onClose={() => setOpenModal(undefined)}
          >
            <Modal.Header>Modal Placement</Modal.Header>
            <Modal.Body>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                This modal position can be adjusted using the dropdown above.
              </p>
            </Modal.Body>
          </Modal>
        </>
      ),
    },
  ];

  return <DemoPage examples={examples} pageContent={pageContent} />;
};

export default ModalPage;
