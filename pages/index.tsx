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
    <div className='relative min-h-screen'>

      {/* Hero image */}

      <div className='h-80 w-full bg-blue-900/80'></div>

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

      {/* Recent carousel */}

      <div className='h-full border-b py-8 border-blue-900 mx-3'>
        <div className='flex items-center justify-between'>
          <p className='text-4xl text-gray display-font font-semibold'>
            Recent Posts
          </p>
          <Link href='/posts' passHref>
            <p className='text-blue font-thin'>- View all posts</p>
          </Link>
        </div>
        <RecentCarousel posts={posts} />
      </div>

      
      {/* Quote */}

      <div className='flex flex-col py-8 border-b border-blue-900 mx-3'>
        <p className='text-xl font-thin'>
          <span className='text-blue-900'>
            <FontAwesomeIcon icon={faQuoteLeft} size='2x' pull='left' transform='shrink-1' />
          </span>
          Bowling at the Railway Bowling Club is an experience to remember. Our
          beautiful greens and club house provide a magnificent setting for
          social and competitive lawn bowls. You can enjoy a relaxed atmosphere
          and plenty of shade, cold drinks, great food, entertaining facilities
          and plenty of seating space. Come and see how fun it is!
          <span className='text-blue'>
            <FontAwesomeIcon icon={faQuoteRight} size='lg' transform='down-4 grow-8 right-10' />
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
