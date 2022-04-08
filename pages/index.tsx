import { faQuoteLeft, faQuoteRight } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { GalleryCarousel, RecentCarousel } from '../components';
import { Gallery, Post } from '../index.dev';
import { getPosts } from '../services';
import getGalleryImages from '../services/graphql/getGalleryImages';

type Props = {
  posts: Post[];
  images: Gallery[];
};

function Home({ posts, images }: Props) {
  return (
    <div className='relative min-h-screen px-4'>
      <div className='h-80 w-full'></div>

      <div className='text-xl my-4 font-thin border-b py-8 border-neutral-200'>
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
          Club! Be sure to check back here for our latest <br />
          Club news , bowls draw , and upcoming events.
        </p>
      </div>

      <div className='border-b py-6 border-neutral-200'>
        <span className='text-lg text-blue font-thin'>the most</span>
        <p className='text-4xl text-gray mb-4 outback-text font-bold'>
          Recent Posts
        </p>
        <RecentCarousel posts={posts} />
      </div>

      <div className='flex flex-col py-4'>
        <p className='text-2xl font-thin py-6'>
          <span className='p-4 text-blue'>
            <FontAwesomeIcon icon={faQuoteLeft} size='2x' />
          </span>
          Bowling at the Railway Bowling Club is an experience to remember. Our
          beautiful greens and club house provide a magnificent setting for
          social and competitive lawn bowls. You can enjoy a relaxed atmosphere
          and plenty of shade, cold drinks, great food, entertaining facilities
          and plenty of seating space. Come and see how fun it is!
          <span className='p-4 text-blue'>
            <FontAwesomeIcon icon={faQuoteRight} size='2x' />
          </span>
        </p>

        <button className='self-center px-4 py-2 rounded-lg bg-primary text-white'>
          <Link href='/bowls'>Find Out more</Link>
        </button>
      </div>

      <div className='pt-2 border-b pb-8 border-neutral-200'>
        <span className='text-lg text-blue font-thin'>Images from around</span>
        <p className='text-4xl text-gray mb-4 outback-text font-bold'>
          The Club
        </p>
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
