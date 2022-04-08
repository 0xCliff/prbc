import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import { Post } from '../../index.dev';
import Link from 'next/link';

type Props = {
  data: any;
};

const RecentCarousel = ({ data }: Props) => {
  const [width, setWidth] = useState(0);
  const carousel: any = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className='flex items-center h-full cursor-grab rounded-lg'
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        className='flex'
      >
        {data?.map((data: any) => (
          <Link key={data.id} href={`/posts/${data.slug}`} passHref>
            <motion.div className='bg-light flex flex-col bowls-item shadow-md rounded-lg mr-2 overflow-clip'>
              <div className='flex flex-col items-center p-2'>
                <p className='self-start text-blue text-xl'>
                  {data.title}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RecentCarousel;
