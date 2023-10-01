'use client';

import { Modal } from '@/components/ui/modal';
import { UserButton } from '@clerk/nextjs';

const SetupPage = () => {
  return (
    <div className='p-4'>
      <Modal
        title='Test'
        description='test desc'
        isOpen
        onClose={() => {}}>
        children
      </Modal>
    </div>
  );
};

export default SetupPage;
