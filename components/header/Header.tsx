import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../nav/Nav';
import Image from 'next/image';
import { faBarsStaggered } from '@fortawesome/pro-light-svg-icons';
import {
  faForkKnife,
  faHouseChimney,
  faScrubber,
} from '@fortawesome/pro-duotone-svg-icons';
import Link from 'next/link';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className='sticky z-10 w-full top-0 bg-blue-900 px-4 h-12 flex justify-between'>
        <div className='text-light self-center'>PRBC</div>
        <div className='self-center'>
          <button
            className='text-light cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBarsStaggered} size='lg' />
          </button>
        </div>
        {isOpen && <Nav setIsOpen={setIsOpen} />}
      </header>

      <div className='h-10 bg-blue-800 text-light flex items-center'>
        <div className='flex text-xs items-center justify-center w-[33%] h-full'>
          <Link href='/bowls' passHref>
            <p>
              <FontAwesomeIcon icon={faScrubber} size='lg' />
              <span className='pl-2'>Bowls</span>
            </p>
          </Link>
        </div>
        <div className='flex text-xs items-center justify-center w-[33%] h-full'>
          <span className='pr-6 text-sm'>|</span>
          <Link href='/' passHref>
            <p>
              <FontAwesomeIcon icon={faHouseChimney} size='lg' swapOpacity />
              <span className='pl-2 pr-6'>Home</span>
            </p>
          </Link>
          <span className='text-sm'>|</span>
        </div>
        <div className='flex text-xs items-center justify-center w-[33%] h-full'>
          <Link href='/restaurant' passHref>
            <p>
              <FontAwesomeIcon icon={faForkKnife} size='lg' swapOpacity />
              <span className='pl-2'>Restaurant</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
