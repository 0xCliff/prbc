import React from 'react';
import { Display } from '../components';

function Home() {
  return (
    <div className='min-h-[200vh]'>
      <Display />
      <div className='text-lg px-4'>
        <p className='text-center pt-4'>
          The{' '}
          <span className='text-xl font-bold'>Parkes Railway Bowling Club</span>{' '}
          is a lawn bowling & social club that offers{' '}
          <a
            href='/bowls/social'
            className='border-blue-500 border-r border-b pr-[3px] pl-1 pb-[2px] shadow-md'
          >
            barefoot bowls
          </a>{' '}
          and functions for the Parkes community.
        </p>
        {/* <p className='text-center pt-4'>
        Our club President is Tony Latter, and our Bowls Secretary is Paul
        Lewin.
      </p> */}
        <p className='text-center pt-4'>
          Friday night is raffle night, which starts at 7 pm. Also, be sure to
          check out the{' '}
          <a
            href='/restaurant'
            className='border-blue-500 border-r border-b pr-[3px] pl-1 pb-[2px] shadow-md'
          >
            clubhouse eatery
          </a>
          —it's a perfect choice for lunch or dinner! And happy hour starts at
          5:00 pm.
        </p>
        <p className='text-center pt-4'>
          We're always keeping busy here at the Parkes Railway Bowling Club! Be
          sure to check back here for our latest <br />
          <a
            href='/news'
            className='border-blue-500 border-r border-b pr-[3px] pl-1 pb-[2px] shadow-md'
          >
            Club news
          </a>
          ,{' '}
          <a
            href='/draw'
            className='border-blue-500 border-r border-b pr-[3px] pl-1 pb-[2px] shadow-md'
          >
            bowls draw
          </a>
          , and
          <a
            href='/events'
            className='border-blue-500 border-r border-b pr-[3px] pl-1 pb-[2px] shadow-md'
          >
            upcoming events.
          </a>
        </p>
        {/* <p className='text-center pt-4'>
        Or If you'd like to contact us, please feel free to give us a call at
        (02) 6862 2772.
      </p> */}
      </div>
    </div>
  );
}

export default Home;
