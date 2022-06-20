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
import { motion } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset - 2;
      if (prevScrollpos > currentScrollPos) {
        setScroll(false);
      } else {
        setScroll(true);
      }
      prevScrollpos = currentScrollPos;
    };
  }

  return (
    <header className='sticky z-10 w-full top-0'>
      <div className='w-full bg-blue-900 px-4 h-12 flex justify-between'>
        <div className='text-light flex items-center'>
          <Image src='/logo.png' alt='Logo' height={40} width={44} />
          <span className='text-light pl-2'>PRBC</span>
        </div>
        <div className='self-center'>
          <button
            className='text-light cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBarsStaggered} size='lg' />
          </button>
        </div>
        {isOpen && <Nav setIsOpen={setIsOpen} />}
      </div>

      <motion.div
        animate={{ opacity: scroll ? 0 : 1, y: scroll ? -10 : 0 }}
        transition={{ type: 'spring', stiffness: 60 }}
        className='h-10 sticky top-12 w-full bg-blue-800 text-light flex items-center mb-[0.25px]'
      >
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
      </motion.div>
    </header>
  );
}

export default Header;
