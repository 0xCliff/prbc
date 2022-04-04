import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-duotone-svg-icons';
import Nav from '../nav/Nav';
import Image from 'next/image';

type Props = {};

function Header(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='sticky z-10 w-full top-0 bg-light px-4'>
      <div className='flex w-full h-20 items-center justify-between'>
        <div className=''>
          <a href='/'>
            <Image src='/logo.png' height={70} width={70} />
          </a>
        </div>
        <button
          className='text-blue cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} size='2x' />
        </button>
      </div>
      {isOpen && <Nav />}
    </header>
  );
}

export default Header;
