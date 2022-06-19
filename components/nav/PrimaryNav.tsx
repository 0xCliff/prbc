import {
  faForkKnife,
  faHouseChimney,
  faScrubber,
} from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const PrimaryNav = () => {
  return (
    <div className='sticky top-10 flex items-center w-full h-20 bg-light text-blue'>
      <div className='flex flex-col text-md items-center justify-center w-[33%] h-full'>
        <span>Bowls</span>
        <Link href='/bowls' passHref>
          <FontAwesomeIcon icon={faScrubber} size='2x' />
        </Link>
      </div>
      <div className='flex flex-col text-md items-center justify-center w-[33%] h-full'>
        <span>Home</span>
        <Link href='/' passHref>
          <FontAwesomeIcon
            icon={faHouseChimney}
            size='2x'
            swapOpacity
            transform='shrink-1'
          />
        </Link>
      </div>
      <div className='flex flex-col text-md items-center justify-center w-[33%] h-full'>
        <span>Restaurant</span>
        <Link href='/restaurant' passHref>
          <FontAwesomeIcon
            icon={faForkKnife}
            size='2x'
            swapOpacity
            transform='shrink-2'
          />
        </Link>
      </div>
    </div>
  );
};

export default PrimaryNav;
