import React from 'react';

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className='bg-light fixed top-20 left-0 w-full min-h-screen z-20'>
      <nav className=''>
        <li>
          <a className='' href='/bowls'>
            Bowls
          </a>
        </li>
        <li>
          <a className='' href='/restaurant'>
            Clubhouse Eatery
          </a>
        </li>
        <li>
          <a className='' href='/news'>
            Club News
          </a>
        </li>
        <li>
          <a className='' href='/events'>
            Events
          </a>
        </li>
      </nav>
    </div>
  );
};

export default Nav;
