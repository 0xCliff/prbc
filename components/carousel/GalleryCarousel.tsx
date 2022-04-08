import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Gallery } from '../../index.dev';

type Props = {
  images: Gallery[];
};

const GalleryCarousel = ({ images }: Props) => {
  const [width, setWidth] = useState(0);
  const carousel: any = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className='flex items-center h-full p-4 pl-2 overflow-hidden cursor-grab'
      whileTap={{ cursor: 'grabbing' }}
    >
      <motion.div
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        className='flex'
      >
        {images?.map((image: Gallery) => (
          <motion.div
            key={image.name}
            className='flex flex-col gallery-item relative shadow-md mr-4 bg-gradient-to-b from-neutral-900/20 via-transparent rounded-lg'
          >
            <Image
              layout='fill'
              alt={image.name}
              src={image.image.url}
              className='pointer-events-none rounded-lg'
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GalleryCarousel;
