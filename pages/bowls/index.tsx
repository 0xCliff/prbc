import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { RecentCarousel } from '../../components';
import { Post } from '../../index.dev';
import { getPosts } from '../../services';
import Image from 'next/image';
import moment from 'moment';

type Props = {
  posts: Post[];
};

const index = ({ posts }: Props) => {
  const filteredPosts: Post[] = posts.filter((post: Post) =>
    post.postType.includes('Bowls')
  );

  return (
    <div className='px-2'>
      <div className='py-6 text-xl font-thin'>
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

      <div className='h-80 w-full px-2'>
        <h4 className='display-font font-semibold text-3xl text-blue-800 my-4'>
          Latest Draw
        </h4>
        <ul className='mb-4'>
          {posts &&
            posts.map(
              (post) =>
                post.postType.includes('Draw') && (
                  <Link href={`posts/${post.slug}`} passHref>
                    <li key={post.id} className='py-1 flex'>
                      <Image
                        src={post.featuredImg.url}
                        alt={post.title}
                        height={50}
                        width={80}
                        className='rounded'
                      />
                      <div className='pl-4'>
                        <p>{post.title}</p>
                        <span>
                          {moment(post.createdAt).format('DD MMM, YYYY')}
                        </span>
                      </div>
                    </li>
                  </Link>
                )
            )}
        </ul>
      </div>

      <div className='pb-4 border-b border-neutral-200'>
        <div className='h-80 w-full px-2'>
          <h4 className='display-font font-semibold text-3xl text-blue-800 my-4'>
            Latest Results
          </h4>
          <ul className='mb-4'>
            {posts &&
              posts.map(
                (post) =>
                  post.postType.includes('Results') && (
                    <Link href={`posts/${post.slug}`} passHref>
                      <li key={post.id} className='py-1 flex'>
                        <Image
                          src={post.featuredImg.url}
                          alt={post.title}
                          height={50}
                          width={80}
                          className='rounded'
                        />
                        <div className='pl-4'>
                          <p>{post.title}</p>
                          <span>
                            {moment(post.createdAt).format('DD MMM, YYYY')}
                          </span>
                        </div>
                      </li>
                    </Link>
                  )
              )}
          </ul>
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-3xl text-blue-800 display-font font-semibold'>
            Bowls News
          </p>
          <Link href='/posts' passHref>
            <span className='text-blue font-thin'>- View all posts</span>
          </Link>
        </div>
        <div className='h-[25rem] w-full pl-2 -mt-8'>
          <RecentCarousel posts={filteredPosts} />
        </div>
      </div>
    </div>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
