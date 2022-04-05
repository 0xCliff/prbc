import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Post } from '../../index.dev';
import Link from 'next/link';

type Props = {
  posts: Post[];
};

const RecentCarousel = ({ posts }: Props) => {
  const [width, setWidth] = useState(0);
  const carousel: any = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className='flex items-center h-[42vh] overflow-hidden cursor-grab rounded-lg'
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        className='flex'
      >
        {posts?.map((post: Post) => (
          <motion.div
            key={post.id}
            className='flex flex-col item relative shadow-md rounded-lg mr-4 bg-gradient-to-b from-neutral-900/20 via-transparent'
          >
            <Image
              height={120}
              width={100}
              alt={post.title}
              src={post.featuredImg.url}
              className='-z-10  rounded-t-lg pointer-events-none object-cover'
            />
            <div className='h-40 flex flex-col items-center absolute bottom-2 text-sm text-dark p-2'>
              <p className='self-start text-blue text-xl pb-2'>{post.title}</p>
              <p className='text-gray pb-4'>{post.excerpt}..</p>
              <span className='shadow-md text-center bg-primary w-20 rounded text-light py-1'>
                <Link href={`/posts/${post.slug}`}>Read</Link>
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RecentCarousel;
