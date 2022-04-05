import { GetStaticProps } from 'next';
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
      <div className='h-80 w-full border-b pb-8 border-neutral-200'></div>

      <div className='text-xl my-4 font-thin border-b pb-8 border-neutral-200'>
        <p className=''>
          <span className='text-blue text-2xl'>
            Parkes Railway Bowling Club
          </span>{' '}
          is a lawn bowling & social club that offers barefoot bowls and
          functions for the Parkes community.
        </p>
        <p className='pt-4'>
          Friday night is raffle night, which starts at 7 pm. Also, be sure to
          check out the clubhouse eatery —it&apos;s a perfect choice for dinner! And
          happy hour starts at 5:00 pm.
        </p>
        <p className='pt-4'>
          We&apos;re always keeping busy here at the Parkes Railway Bowling Club! Be
          sure to check back here for our latest <br />
          Club news , bowls draw , and upcoming events.
        </p>
      </div>

      <div className='mb-8 border-b pb-8 border-neutral-200'>
        <span className='text-lg text-blue font-thin'>The</span>
        <p className='text-4xl text-gray mb-4 outback-text font-bold'>
          Latest Posts
        </p>
        <RecentCarousel posts={posts} />
      </div>

      <div className='w-full border-b pb-8 border-neutral-200'>
        <span className='text-lg text-blue font-thin'>From the</span>
        <p className='text-4xl text-gray mb-4 outback-text font-bold'>
          Gallery
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
