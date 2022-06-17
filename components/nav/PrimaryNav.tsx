import {
  faForkKnife,
  faHouseChimney,
  faScrubber,
} from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PrimaryNav = () => {
  return (
    <div className='fixed bottom-0 flex items-center w-full h-20 bg-light text-blue'>
      <div className='flex flex-col text-md items-center justify-center w-[33%] h-full'>
        <span>Bowls</span>
        <a href='/bowls'>
          <FontAwesomeIcon icon={faScrubber} size='2x' />
        </a>
      </div>
      <div className='flex flex-col text-md items-center justify-center w-[33%] h-full'>
        <span>Home</span>
        <a href='/'>
          <FontAwesomeIcon
            icon={faHouseChimney}
            size='2x'
            swapOpacity
            transform='shrink-1'
          />
        </a>
      </div>
      <div className='flex flex-col text-md items-center justify-center w-[33%] h-full'>
        <span>Restaurant</span>
        <a href='/restaurant'>
          <FontAwesomeIcon
            icon={faForkKnife}
            size='2x'
            swapOpacity
            transform='shrink-2'
          />
        </a>
      </div>
    </div>
  );
};

export default PrimaryNav;
