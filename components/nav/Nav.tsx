import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot } from '@fortawesome/pro-duotone-svg-icons';
import { faArrowRightFromArc } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import request from 'graphql-request';
import Link from 'next/link';
import React, { useState } from 'react';
import useSWR from 'swr';
import RecentCarousel from '../carousel/RecentCarousel';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const fetcher = (query: string) => request(graphqlAPI, query);

type Props = {
  setIsOpen: any;
};

const Nav = ({ setIsOpen }: Props) => {
  const [openMap, setOpenMap] = useState<boolean>(false);
  const { data, error } = useSWR(
    `{
      posts(last: 4) {
        id,
        title,
        excerpt,
        slug,
        featuredImg {
          url
        },
        createdAt,
      }
    }`,
    fetcher
  );

  if (error) return <div>Error</div>;

  return (
    <div className='flex flex-col justify-center bg-light fixed top-0 left-0 w-full min-h-screen z-20'>
      <FontAwesomeIcon
        onClick={() => setIsOpen(false)}
        icon={faArrowRightFromArc}
        size='2x'
        className='fixed top-6 right-4 text-blue'
      />

      <div className='my-8 h-60 list-none'>
        <nav className='flex flex-col items-center justify-center'>
          <li className='text-4xl display-font mb-1'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-6 py-1 bg-primary rounded-lg text-light font-semibold shadow-md'
            >
              <Link href='/'>Home</Link>
            </button>
          </li>
          <li className='text-4xl display-font mb-1'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-6 py-1 bg-primary rounded-lg text-light font-semibold shadow-md'
            >
              <Link href='/bowls'>Bowls</Link>
            </button>
          </li>
          <li className='text-4xl display-font mb-1'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-6 py-1 bg-primary rounded-lg text-light font-semibold shadow-md'
            >
              <Link href='/restaurant'>Restaurant</Link>
            </button>
          </li>
          <li className='text-4xl display-font mb-1'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-6 py-1 bg-primary rounded-lg text-light font-semibold shadow-md'
            >
              <Link href='/posts'>Club News</Link>
            </button>
          </li>
          <li className='text-4xl display-font mb-1'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-6 py-1 bg-primary rounded-lg text-light font-semibold shadow-md'
            >
              <Link href='/posts/events'>Events</Link>
            </button>
          </li>
        </nav>
      </div>

      <div className='flex justify-center'>
        <a href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F642402229175922%2F'>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size='4x'
            className='text-blue'
          />
        </a>
        <button
            onClick={() => setOpenMap(!openMap)}
            className='pl-4 text-blue'>
            <FontAwesomeIcon icon={faMapLocationDot} size='3x' swapOpacity />
          </button>
      </div>
      
      <motion.div
        className={`gmap-canvas ${openMap ? '' : 'hidden'}`}
        animate={{
          opacity: openMap ? 1 : 0,
          marginBottom: '20px',
          marginTop: '20px',
        }}
        transition={{
          type: 'spring',
          stiffness: 40,
        }}
      >
        <iframe
          width='100%'
          height='350'
          id='gmap_canvas'
          src='https://maps.google.com/maps?q=parkes%20railway%20bowling%20club&t=&z=17&ie=UTF8&iwloc=&output=embed'
          frameBorder='0'
          scrolling='no'
        ></iframe>
      </motion.div>

      <p
        className={`text-center text-dark text-lg pb-14 px-4 ${
          openMap ? '' : 'pt-4'
        }`}
      >
        If you&apos;d like to contact us, please feel free to give us a call at{' '}
        <span className='text-blue'>(02) 6862 2772</span>.
      </p>
    </div>
  );
};

export default Nav;
