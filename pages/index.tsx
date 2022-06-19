import { faQuoteLeft, faQuoteRight } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { GalleryCarousel, RecentCarousel } from '../components';
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
        <Link href={`posts/${recentPosts[0].slug}`} passHref>
          <div
            key={recentPosts[0].id}
            className='h-[17rem] w-full relative shadow-md
            bg-gradient-to-t from-neutral-900 via-transparent col-span-2 flex border-b border-white'
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
        </Link>

        <Link href={`posts/${recentPosts[1].slug}`} passHref>
          <div
            key={recentPosts[1].id}
            className='h-[15rem] w-full relative shadow-md
            bg-gradient-to-t from-neutral-900 via-transparent flex border-r border-white'
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
        </Link>

        <Link href={`posts/${recentPosts[2].slug}`} passHref>
          <div
            key={recentPosts[2].id}
            className='h-[15rem] w-full relative shadow-md
            bg-gradient-to-t from-neutral-900 via-transparent flex'
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
        </Link>
      </div>

      {/* Introduction */}

      <div className='text-xl text-center font-thin border-b py-6 border-blue-900 mx-3'>
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

      {/* Posts */}

      <div className='py-2'>
        <div className='h-full w-full px-4 mb-2'>
          <h4 className='display-font font-semibold text-3xl text-blue-800'>
            Club News
          </h4>
          <div className='h-[25rem] -mt-8'>
            <RecentCarousel posts={posts} />
          </div>
        </div>

        <div className='h-60 w-full px-4'>
          <h4 className='display-font font-semibold text-3xl text-blue-800 pb-6'>
            Upcoming Events
          </h4>
          <ul className=''>
            {posts &&
              posts.map(
                (post) =>
                  post.postType.includes('Events') && (
                    <Link href={`posts/${post.slug}`} passHref>
                      <li className='py-1 flex'>
                        <Image
                          src={post.featuredImg.url}
                          alt={post.title}
                          height={50}
                          width={80}
                          className='rounded'
                        />
                        <div className='pl-4'>{post.title}</div>
                      </li>
                    </Link>
                  )
              )}
          </ul>
        </div>
      </div>

      {/* Quote */}

      <div className='flex flex-col py-6 border-b border-blue-900 mx-3'>
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
      </div>

      {/* Call to action */}

      {/* <button className='self-center p-4 mt-8 rounded-lg bg-primary text-light font-semibold text-lg'>
          <Link href='/bowls'>Learn More</Link>
        </button> */}

      {/* Gallery */}

      <div className='h-full py-8 mx-3'>
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
