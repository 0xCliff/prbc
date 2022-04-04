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
      className='w-full flex justify-center items-end bg-light py-2'
    >
      <div className='flex flex-col'>
        <Image src='/logo.png' width='160' height='160' className='' />
        <h4 className='text-center text-3xl font-semibold text-blue display-font tracking-wide'>
          Parkes Railway <br /> Bowling Club
        </h4>
        <span className='text-xs text-gray-400 text-center font-normal'>Est 1954</span>
      </div>
    </motion.div>
  );
};

export default Display;
