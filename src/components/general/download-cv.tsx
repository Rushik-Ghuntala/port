'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Rushik_Ghuntala_BTech_IT.pdf', '_blank')} className='p-3'>
      Download Resume
    </Button>
  );
};

export default DownloadCV;
