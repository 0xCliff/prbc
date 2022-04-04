import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Post } from '../../index.dev';

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
            className='item relative shadow-md rounded-lg mr-4 p-2
            bg-gradient-to-b from-neutral-900 via-transparent'
          >
            <span className='text-light text-xl'>{post.title}</span>
            <Image
              layout='fill'
              src={post.featuredImage.url}
              className='-z-10 rounded-lg pointer-events-none object-cover'
            />
            
            <span className='bg-red absolute bottom-2 right-2 text-xs text-light p-1 rounded-lg shadow-md'>
              {post.excerpt}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RecentCarousel;
