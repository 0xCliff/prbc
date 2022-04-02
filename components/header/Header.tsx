import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-duotone-svg-icons';
import Nav from '../nav/Nav';

type Props = {};

function Header(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='sticky z-10 w-full top-0 bg-primary px-6'>
      <div className='flex w-full h-16 items-center justify-between'>
        <div className=''>
          <h1 className='text-white font-semibold text-4xl tracking-wide display-font'><a href='/'>PRBC</a></h1>
        </div>
        <button
          className='text-white cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} size='xl' />
        </button>
      </div>
      {isOpen && <Nav />}
    </header>
  );
}

export default Header;
