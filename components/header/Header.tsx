import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-duotone-svg-icons';

type Props = {};

function Header(props: Props) {
  return (
    <header className='sticky z-10 w-full top-0 bg-primary px-6'>
      <div className='flex w-full h-20 items-center justify-between'>
        <div className=''>
          <h1 className='text-white font-semibold text-5xl tracking-wide display-font'>PRBC</h1>
        </div>
        <button
          className='text-white cursor-pointer'
          onClick={() => console.log('clicked')}
        >
          <FontAwesomeIcon icon={faBars} size='2x' />
        </button>
      </div>
    </header>
  );
}

export default Header;
