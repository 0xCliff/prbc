import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightFromArc } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import request from 'graphql-request';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import RecentCarousel from '../carousel/RecentCarousel';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const fetcher = (query: string) => request(graphqlAPI, query);

type Props = {
  setIsOpen: any;
};

const Nav = ({ setIsOpen }: Props) => {
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

      <div className='mb-8 h-60 list-none'>
        <nav className='flex flex-col items-center justify-center'>
          <li className='text-4xl display-font mb-1'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-6 py-1 bg-primary rounded-lg text-light shadow-md'
            >
              <Link href='/'>Home</Link>
            </button>
          </li>
          <li className='text-4xl display-font mb-1'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-6 py-1 bg-primary rounded-lg text-light shadow-md'
            >
              <Link href='/bowls'>Bowls</Link>
            </button>
          </li>
          <li className='text-4xl display-font mb-1'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-6 py-1 bg-primary rounded-lg text-light shadow-md'
            >
              <Link href='/restaurant'>Restaurant</Link>
            </button>
          </li>
          <li className='text-4xl display-font mb-1'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-6 py-1 bg-primary rounded-lg text-light shadow-md'
            >
              <Link href='/news'>Club News</Link>
            </button>
          </li>
          <li className='text-4xl display-font mb-1'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-6 py-1 bg-primary rounded-lg text-light shadow-md'
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
      </div>
      <p className='text-center text-lg text-blue pt-4 px-4 mb-4'>
        If you&apos;d like to contact us, please feel free to give us a call at
        (02) 6862 2772.
      </p>
    </div>
  );
};

export default Nav;
