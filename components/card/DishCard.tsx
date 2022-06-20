import React from 'react';
import Image from 'next/image';
import { Dish } from '../../index.dev';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/pro-duotone-svg-icons';

type Props = {
  dish: Dish;
};

const DishCard = ({ dish }: Props) => {
  return (
    <div className='flex items-center w-full h-[18%] bg-light rounded-lg mb-4 overflow-clip shadow-md'>
      <div className='flex h-full w-40'>
        <Image
          height='100'
          width='120'
          alt={dish.dishName}
          src={dish.featuredImage.url}
          className='pointer-events-none object-cover'
        />
      </div>
      <div className='w-60 h-full'>
        <p className='text-red font-semibold'>{dish.dishName}</p>
        <p className='text-xs text-gray'>
          {dish.vegan && (
            <FontAwesomeIcon
              icon={faSeedling}
              size='lg'
              className='text-green-500 pr-2'
            />
          )}
          ${dish.price.toFixed(2)}
        </p>
        <p className='text-sm text-dark overflow-hidden'>{dish.description}</p>
      </div>
    </div>
  );
};

export default DishCard;
