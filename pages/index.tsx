import {
  faClock,
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { GalleryCarousel } from '../components';
import { Gallery, Post } from '../index.dev';
import { getPosts } from '../services';
import getGalleryImages from '../services/graphql/getGalleryImages';
import Image from 'next/image';
import { faClockRotateLeft } from '@fortawesome/pro-solid-svg-icons';
import moment from 'moment';

type Props = {
  posts: Post[];
  images: Gallery[];
};

function Home({ posts, images }: Props) {
  let recentPosts = Array.from(posts.reverse());

  return (
    <div className='relative min-h-screen'>
      {/* Recent */}

      <div className='w-full grid grid-cols-2'>
        <div
          key={recentPosts[0].id}
          className='h-80 w-full relative shadow-md
            bg-gradient-to-t from-black via-black/30 col-span-2 flex border-b border-white'
        >
          <Image
            layout='fill'
            alt={recentPosts[0].title}
            src={recentPosts[0].featuredImg.url}
            className='-z-10 pointer-events-none object-cover'
          />
          <div className='self-end pb-4 w-full text-center'>
            <p className='text-md text-light p-1 font-bold'>
              {recentPosts[0].title}
            </p>
            <p className='text-light text-xs'>
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                size='lg'
                className='pr-2'
                swapOpacity
              />{' '}
              {moment(recentPosts[0].createdAt).format('MMMM Do YYYY')}
            </p>
          </div>
        </div>

        <div
          key={recentPosts[1].id}
          className='h-64 w-full relative shadow-md
            bg-gradient-to-t from-black via-black/30 flex border-r border-white'
        >
          <Image
            layout='fill'
            alt={recentPosts[1].title}
            src={recentPosts[1].featuredImg.url}
            className='-z-10 pointer-events-none object-cover'
          />
          <div className='self-end pb-4 w-full text-center px-4'>
            <p className='text-md text-light p-1 font-bold'>
              {recentPosts[1].title}
            </p>
            <p className='text-light text-xs'>
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                size='lg'
                className='pr-2'
                swapOpacity
              />{' '}
              {moment(recentPosts[1].createdAt).format('MMMM Do YYYY')}
            </p>
          </div>
        </div>

        <div
          key={recentPosts[2].id}
          className='h-64 w-full relative shadow-md
            bg-gradient-to-t from-black via-black/30 flex'
        >
          <Image
            layout='fill'
            alt={recentPosts[2].title}
            src={recentPosts[2].featuredImg.url}
            className='-z-10 pointer-events-none object-cover'
          />
          <div className='self-end pb-4 w-full text-center px-4'>
            <p className='text-md text-light p-1 font-bold'>
              {recentPosts[2].title}
            </p>
            <p className='text-light text-xs'>
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                size='lg'
                className='pr-2'
                swapOpacity
              />{' '}
              {moment(recentPosts[2].createdAt).format('MMMM Do YYYY')}
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}

      <div className='text-xl font-thin border-b py-6 border-blue-900 mx-3'>
        <p className=''>
          <span className='text-blue text-2xl'>
            Parkes Railway Bowling Club
          </span>{' '}
          is a lawn bowling & social club that offers barefoot bowls and
          functions for the Parkes community.
        </p>
        <p className='pt-4'>
          Friday night is raffle night, which starts at 7 pm. Also, be sure to
          check out the clubhouse eatery —it&apos;s a perfect choice for dinner!
          And happy hour starts at 5:00 pm.
        </p>
        <p className='pt-4'>
          We&apos;re always keeping busy here at the Parkes Railway Bowling
          Club! Be sure to check back here for our latest Club news , bowls draw
          , and upcoming events.
        </p>
      </div>

      {/* Quote */}

      <div className='flex flex-col py-8 border-b border-blue-900 mx-3'>
        <p className='text-xl font-thin'>
          <span className='text-blue-900'>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size='2x'
              pull='left'
              transform='shrink-1'
            />
          </span>
          Bowling at the Railway Bowling Club is an experience to remember. Our
          beautiful greens and club house provide a magnificent setting for
          social and competitive lawn bowls. You can enjoy a relaxed atmosphere
          and plenty of shade, cold drinks, great food, entertaining facilities
          and plenty of seating space. Come and see how fun it is!
          <span className='text-blue'>
            <FontAwesomeIcon
              icon={faQuoteRight}
              size='lg'
              transform='down-4 grow-8 right-10'
            />
          </span>
        </p>

        {/* Call to action */}

        <button className='self-center p-4 mt-8 rounded-lg bg-primary text-light font-semibold text-lg'>
          <Link href='/bowls'>Learn More</Link>
        </button>
      </div>

      {/* Gallery */}

      <div className='h-full py-8 border-b border-blue-900 mx-3'>
        <div className='flex items-center justify-between'>
          <p className='flex flex-col text-4xl text-gray outback-text font-bold'>
            <span className='text-lg text-blue font-thin'>
              Images from around
            </span>{' '}
            The Club
          </p>
          <Link href='/gallery' passHref>
            <p className='text-blue font-thin'>- View all images</p>
          </Link>
        </div>
        <GalleryCarousel images={images} />
      </div>
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = (await getPosts()) || [];
  const images: Gallery[] = (await getGalleryImages()) || [];

  return {
    props: {
      posts,
      images,
    },
    revalidate: 60,
  };
};
