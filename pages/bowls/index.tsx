import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { RecentCarousel } from '../../components';
import { Gallery, Post } from '../../index.dev';
import { getLatestImages, getPosts } from '../../services';
import Image from 'next/image';
import moment from 'moment';
import { motion } from 'framer-motion';

type Props = {
  posts: Post[];
  images: Gallery[];
};

const index = ({ posts, images }: Props) => {
  const filteredPosts: Post[] = posts.filter((post: Post) =>
    post.postType.includes('Bowls')
  );

  return (
    <div className='px-2'>
      <div className='h-full w-full grid grid-cols-2 px-0 py-2 gap-1'>
        {images &&
          images.map((image) => (
            <motion.div
              key={image.name}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: 1,
                rotate: Math.floor(Math.random() * 10),
                scale: 1,
              }}
              transition={{ type: 'spring', stiffness: 80 }}
            >
              <Image
                height={165}
                width={260}
                alt={image.name}
                src={image.image.url}
                className='pointer-events-none object-cover shadow-md overflow-hidden'
              />
            </motion.div>
          ))}
      </div>

      <div className='py-6 text-center border-b border-blue-800'>
        <p className='text-xl'>
          The Railway Bowling Club is an entertaining social, and recreational
          bowling club.
        </p>
        <p className='text-xl py-2 border-b border-blue-800'>
          You will experience the hospitality and friendly atmosphere typical of
          Parkes when bowling at the railway bowling club. We offer social
          barefoot bowls organised by the club; on Wednesdays and Saturdays at 1
          pm, make sure to phone the club and have your name entered by 12:30
          pm.
        </p>
        
        <div className='h-80 w-full border-b border-blue-800 my-4'>
        <div className='flex items-center justify-between'>
          <p className='flex flex-col text-3xl text-gray outback-text font-bold mb-4'>
            <span className='text-lg text-blue font-thin'>Latest</span> Draw
          </p>
        </div>
        <ul className='mb-4'>
          {posts &&
            posts.map(
              (post) =>
                post.postType.includes('Draw') && (
                  <Link href={`/posts/${post.slug}`} passHref>
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
        
        <p className='text-xl pt-4'>
          We also boast competitive club championship tournaments and pennants
          teams. Our club has had many successful members over the years,
          representing our club with tremendous pride and skill. We constantly
          seek new members to join our fantastic club.
        </p>
        <p className='text-xl pt-2'>
          Our great atmosphere and full-featured facility, including cold
          drinks, plenty of shade and seating for everyone, will ensure you have
          a great time.
        </p>
        <p className='text-xl pt-4'>
          <span className='text-blue'>Club President:</span> Tony Latter
          <br />
          <span className='text-blue'>Bowls Secretary:</span> Paul Lewin
        </p>
      </div>

      <div className='my-4'>
        <div className='h-80 w-full'>
          <div className='flex items-center justify-between'>
            <p className='flex flex-col text-3xl text-gray outback-text font-bold mb-4'>
              <span className='text-lg text-blue font-thin'>Latest</span>{' '}
              Results
            </p>
          </div>
          <ul className='mb-4'>
            {posts &&
              posts.map(
                (post) =>
                  post.postType.includes('Results') && (
                    <Link href={`/posts/${post.slug}`} passHref>
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
          <div className='flex items-center justify-between'>
            <p className='flex flex-col text-3xl text-gray font-bold mb-4'>
              <span className='text-lg text-blue font-thin'>Latest</span> Bowls
              News
            </p>
          </div>
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
  const images: Gallery[] = (await getLatestImages()) || [];

  return {
    props: {
      posts,
      images,
    },
    revalidate: 60,
  };
};
