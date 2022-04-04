import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { Dish } from '../../index.dev';
import { motion } from 'framer-motion';

type Props = {
  specials?: Dish[];
};

const SpecialsCarousel = ({ specials }: Props) => {
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
        {specials?.map((special: Dish) => (
          <motion.div
            key={special.id}
            className='item relative shadow-md rounded-lg mr-4 p-2
            bg-gradient-to-b from-neutral-900 via-transparent'
          >
            <span className='text-light text-xl'>{special.dishName}</span>
            <Image
              layout='fill'
              src={special.featuredImage.url}
              className='-z-10 rounded-lg pointer-events-none object-cover'
            />
            <span className='absolute bottom-2 right-2 text-xs text-gray p-1 rounded-lg bg-light shadow-md'>${special.price.toFixed(2)}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SpecialsCarousel;
