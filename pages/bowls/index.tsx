import request from 'graphql-request';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { BowlsCarousel, RecentCarousel } from '../../components';
import { Post } from '../../index.dev';
import { getPosts } from '../../services';
import Image from 'next/image';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

type Props = {
  draws: any;
  results: any;
  posts: Post[];
};

const index = ({ posts, draws, results }: Props) => {
  const filteredPosts: Post[] = posts.filter((post: Post) =>
    post.postType.includes('Bowls')
  );

  return (
    <div className='px-4'>
      <div className='h-60 w-full px-4'>
          <h4 className='display-font font-semibold text-3xl text-blue-800'>
            Draw
          </h4>
          <ul className=''>
            {posts &&
              posts.map(
                (post) =>
                  post.postType.includes('News') && (
                    <li className='py-1 flex'>
                      <Image
                        src='/logo.png'
                        alt={post.title}
                        height={30}
                        width={30}
                        className='rounded'
                      />
                      <div className='pl-4'>{post.title}</div>
                    </li>
                  )
              )}
          </ul>
        </div>

      <div className='py-8 text-xl font-thin'>
        <p>The Railway Bowling Club is a fun social and recreational club.</p>
        <p className='pt-4 border-b border-neutral-200 pb-8'>
          Bowling at the railway bowling club, you will experience the
          hospitality and friendly atmosphere that is typical of Parkes, We
          provide championship level lawn bowling with great club pride and
          skill. Our great atmosphere and full-featured facility, including cold
          drinks, plenty of shade and seating for everyone, will ensure you have
          a great time.
        </p>
      </div>

      <div className='pb-8 border-b border-neutral-200'>
        <div>
          <div className='flex items-center justify-between'>
            <p className='text-4xl text-gray display-font font-semibold'>
              Results
            </p>
            <Link href='/posts' passHref>
              <span className='text-blue font-thin'>- View all posts</span>
            </Link>
          </div>
          <div className='h-full w-full p-4 pl-2'>
            <BowlsCarousel data={results} />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-4xl text-gray display-font font-semibold'>
            Bowls News
          </p>
          <Link href='/posts' passHref>
            <span className='text-blue font-thin'>- View all posts</span>
          </Link>
        </div>
        <div className='h-full w-full p-4 pl-2'>
          <RecentCarousel posts={filteredPosts} />
        </div>
      </div>
    </div>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = (await getPosts()) || [];
  const draws: any =
    (await request(
      graphqlAPI,
      `query {
        posts(where: {postType_contains_some: Results}, orderBy: createdAt_DESC) {
          id
          title
          slug
        }
      }`
    ).then((result) => result.posts)) || [];

  const results: any =
    (await request(
      graphqlAPI,
      `query {
        posts(where: {postType_contains_some: Results}, orderBy: createdAt_DESC) {
          id
          title
          slug
        }
      }`
    ).then((result) => result.posts)) || [];

  return {
    props: {
      posts,
      draws,
      results,
    },
    revalidate: 60,
  };
};
