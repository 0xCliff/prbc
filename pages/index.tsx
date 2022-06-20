import { faQuoteLeft, faQuoteRight } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { GalleryCarousel, RecentCarousel } from '../components';
import { Gallery, Post } from '../index.dev';
import Image from 'next/image';
import { faClockRotateLeft } from '@fortawesome/pro-solid-svg-icons';
import moment from 'moment';
import { getGalleryImages, getRecentPosts } from '../services';

type Props = {
  posts: Post[];
  images: Gallery[];
};

function Home({ posts, images }: Props) {
  return (
    <div className='relative min-h-screen'>
      {/* Recent */}

      <div className='w-full grid grid-cols-2'>
        <Link href={`posts/${posts[0].slug}`} passHref>
          <div
            key={posts[0].id}
            className='h-[17rem] w-full relative shadow-md
             gradient col-span-2 flex border-b border-white'
          >
            <Image
              layout='fill'
              priority
              alt={posts[0].title}
              src={posts[0].featuredImg.url}
              className='-z-10 pointer-events-none object-cover'
            />
            <div className='self-end pb-4 w-full text-center'>
              <p className='text-md text-light p-1 font-bold'>
                {posts[0].title}
              </p>
              <p className='text-light text-xs'>
                <FontAwesomeIcon
                  icon={faClockRotateLeft}
                  size='lg'
                  className='pr-2'
                />{' '}
                {moment(posts[0].createdAt).format('MMMM Do YYYY')}
              </p>
            </div>
          </div>
        </Link>

        <Link href={`posts/${posts[1].slug}`} passHref>
          <div
            key={posts[1].id}
            className='h-[16rem] w-full relative shadow-md
             gradient flex border-r border-white'
          >
            <Image
              layout='fill'
              alt={posts[1].title}
              src={posts[1].featuredImg.url}
              className='-z-10 pointer-events-none object-cover'
            />
            <div className='self-end pb-4 w-full text-center px-2'>
              <p className='text-md text-light p-1 font-bold'>
                {posts[1].title}
              </p>
              <p className='text-light text-xs'>
                <FontAwesomeIcon
                  icon={faClockRotateLeft}
                  size='lg'
                  className='pr-2'
                  swapOpacity
                />{' '}
                {moment(posts[1].createdAt).format('MMMM Do YYYY')}
              </p>
            </div>
          </div>
        </Link>

        <Link href={`posts/${posts[2].slug}`} passHref>
          <div
            key={posts[2].id}
            className='h-[16rem] w-full relative shadow-md
            gradient flex'
          >
            <Image
              layout='fill'
              alt={posts[2].title}
              src={posts[2].featuredImg.url}
              className='-z-10 pointer-events-none object-cover'
            />
            <div className='self-end pb-4 w-full text-center px-2'>
              <p className='text-md text-light p-1 font-bold'>
                {posts[2].title}
              </p>
              <p className='text-light text-xs'>
                <FontAwesomeIcon
                  icon={faClockRotateLeft}
                  size='lg'
                  className='pr-2'
                  swapOpacity
                />{' '}
                {moment(posts[2].createdAt).format('MMMM Do YYYY')}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Introduction */}

      <div className='text-xl text-center font-thin border-b py-8 border-blue-800 mx-2 mb-2'>
        <p className=''>
          The Parkes Railway Bowling Club is located at 70/78 Hooley Street,
          Parkes, and is open Wednesday to Sunday. We offer barefoot bowls,
          social events, and functions for the Parkes community.
        </p>
        <p className='pt-4'>
          Our Friday night raffle is a great place to have fun and win some
          fantastic prizes. It starts at 7 pm. You could also stop by our
          clubhouse eatery —it&apos;s a perfect choice for dinner! Happy hour
          begins at 5:00 pm.
        </p>
        <p className='pt-4'>
          We&apos;re always keeping busy here at the Parkes Railway Bowling
          Club! Check back here for our latest Club news, bowls draw, and
          upcoming events.
        </p>
      </div>

      {/* Posts */}

      <div className='py-2'>
        <div className='h-full w-full px-2 mb-2'>
          <div className='flex items-center justify-between'>
            <p className='flex flex-col text-3xl text-gray outback-text font-bold mb-4'>
              <span className='text-lg text-blue font-thin'>Latest</span> Posts
            </p>
            <Link href='/posts' passHref>
              <p className='text-blue font-thin'>- View all Posts</p>
            </Link>
          </div>
          <div className='h-[25rem] -mt-8'>
            <RecentCarousel posts={posts} />
          </div>
        </div>

        <div className='h-80 w-full px-2'>
          <div className='flex items-center justify-between'>
            <p className='flex flex-col text-3xl text-gray outback-text font-bold mb-4'>
              <span className='text-lg text-blue font-thin'>Upcoming</span>{' '}
              Events
            </p>
            <Link href='/events' passHref>
              <p className='text-blue font-thin'>- View all Events</p>
            </Link>
          </div>
          <ul className=''>
            {posts &&
              posts.map(
                (post) =>
                  post.postType.includes('Events') && (
                    <Link key={post.id} href={`posts/${post.slug}`} passHref>
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
      </div>

      {/* Call to action */}

      {/* <button className='self-center p-4 mt-8 rounded-lg bg-primary text-light font-semibold text-lg'>
          <Link href='/bowls'>Learn More</Link>
        </button> */}

      {/* Gallery */}

      <div className='h-full py-4 mx-3'>
        <div className='flex items-center justify-between mb-4'>
          <p className='flex flex-col text-3xl text-gray outback-text font-bold'>
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

      {/* Quote */}

      <div className='flex flex-col mx-3 text-center pb-6'>
        <p className='text-xl font-thin'>
          <span className='text-blue'>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size='lg'
              transform='shrink-1 left-6'
            />
          </span>
          Parkes Railway Bowling Club is a family-friendly club that provides an
          excellent atmosphere for social and competitive bowls, an extensive
          social calendar, and a fully equipped bar. The clubhouse eatery offers
          a magnificent setting for your upcoming function, with plenty of
          dining and seating space—a short walk from the town centre. Come and
          see how fun it is!
          <span className='text-blue'>
            <FontAwesomeIcon
              icon={faQuoteRight}
              size='lg'
              transform='right-10'
            />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = (await getRecentPosts()) || [];
  const images: Gallery[] = (await getGalleryImages()) || [];

  return {
    props: {
      posts,
      images,
    },
    revalidate: 60,
  };
};
