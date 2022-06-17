import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../nav/Nav';
import Image from 'next/image';
import { faBarsStaggered } from '@fortawesome/pro-light-svg-icons';
import Link from 'next/link';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='sticky z-10 w-full top-0 bg-light px-4 h-16 flex justify-between'>
      <div className=''>Bowlo</div>
      <div className='self-center'>
        <button
          className='text-blue cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBarsStaggered} size='2x' />
        </button>
      </div>
      {isOpen && <Nav setIsOpen={setIsOpen} />}
    </header>
  );
}

export default Header;
