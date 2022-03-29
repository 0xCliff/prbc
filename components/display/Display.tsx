import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

const Display = (props: Props) => {
  return (
    <motion.div
      initial={{
        y: '-50vh'
      }}
      animate={{
        y: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 40,
      }}
      className='h-[42vh] w-full flex justify-center items-end pb-4 bg-primary'
    >
      <div className='flex flex-col'>
        <Image src='/logo.png' width='200' height='220' className='' />
        <span className='text-center text-3xl font-semibold text-white'>
          Parkes Railway <br /> Bowling Club <br />
          <span className='text-sm text-gray-400 text-center font-normal'>Est 1954</span>
        </span>
      </div>
    </motion.div>
  );
};

export default Display;
