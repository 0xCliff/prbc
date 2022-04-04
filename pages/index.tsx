import { GetStaticProps } from 'next';
import React from 'react';
import { RecentCarousel } from '../components';
import { Post } from '../index.dev';
import { getPosts } from '../services';

type Props = {
  posts: Post[];
};

function Home({ posts }: Props) {
  return (
    <div className='relative min-h-screen'>
      <div className='text-lg px-4'>
        <p className=''>
          The{' '}
          <span className='text-blue text-xl font-bold'>Parkes Railway Bowling Club</span>{' '}
          is a lawn bowling & social club that offers barefoot bowls and
          functions for the Parkes community.
        </p>
        <p className='pt-4'>
          Friday night is raffle night, which starts at 7 pm. Also, be sure to
          check out the clubhouse eatery —it's a perfect choice for dinner! And
          happy hour starts at 5:00 pm.
        </p>
        <p className='pt-4'>
          We're always keeping busy here at the Parkes Railway Bowling Club! Be
          sure to check back here for our latest <br />
          Club news , bowls draw , and upcoming events.
        </p>
      </div>

      <RecentCarousel posts={posts} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
