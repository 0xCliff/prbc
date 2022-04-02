import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='bg-primary'>
      <div className='text-white h-40 flex flex-col items-center justify-center py-4'>
        <h2 className='text-5xl display-font'>PRBC</h2>
        <p className='text-center pt-4 text-white px-4'>
        If you'd like to contact us, please feel free to give us a call at
        (02) 6862 2772.
      </p>
      </div>
      <div className='gmap_canvas'>
        <iframe
          width='390'
          height='400'
          id='gmap_canvas'
          src='https://maps.google.com/maps?q=parkes%20railway%20bowling%20club&t=&z=17&ie=UTF8&iwloc=&output=embed'
          frameBorder='0'
          scrolling='no'
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
