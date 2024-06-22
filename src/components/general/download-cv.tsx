'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/BtechIT_Rushik_Ghuntala.pdf', '_blank')} className='p-3'>
      Download Resume
    </Button>
  );
};

export default DownloadCV;
