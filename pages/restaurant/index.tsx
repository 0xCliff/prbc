import { faCaretCircleDown } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { DishCard, SpecialsCarousel } from '../../components';
import { Dish } from '../../index.dev';
import { getDishes, getSpecials } from '../../services';

type Props = {
  dishes: Dish[];
  specials: Dish[];
};

const Restaurant = ({ dishes, specials }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mealType, setMealType] = useState<string>('Mains');

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 px-4'>
      <h4 className='text-center outback-text text-6xl py-8 font-bold'>
        Clubhouse Catering
      </h4>

      <div className='h-full w-full py-8'>
        <span className='text-lg text-red font-thin'>From the</span>
        <p className='text-4xl text-gray outback-text font-bold'>Specials</p>
        <SpecialsCarousel specials={specials} />
      </div>

      <p className='text-lg text-dark'>
        <span className='text-red text-xl'>
          Welcome to the Clubhouse Bar & Eatery,
        </span>{' '}
        the place to be for delicious homecooked meals. Whether you&apos;re
        looking for a romantic evening out, a birthday party for your kids, or a
        fun family outing for the whole gang, we&apos;ve got you covered. Our
        catered functions are perfect for any occasion and we&apos;re excited to
        meet you!
      </p>
      <p className='text-lg text-dark pt-4'>
        We know you&apos;ll love our social bar and raffles as much as our
        scrumptious menu items. Come in and try our famous chicken Schnitznel or
        our succulent steaks today!
      </p>

      <div className='border-b border-neutral-200 py-8'>
        <p className='text-4xl text-center text-gray outback-text font-bold underline decoration-red-400'>
          Open Hours
        </p>
        <table className='p-2 my-8 table-fixed w-full text-red '>
          <tbody>
            <tr className='flex flex-col w-full'>
              <td className='text-dark underline decoration-red-400'>Friday</td>
              <td className='w-40'>6:00pm - 8:30pm</td>
            </tr>
            <tr className='flex flex-col w-full pt-4'>
              <td className='text-dark underline decoration-red-400'>Saturday</td>
              <td>12:00pm - 2:30pm,</td>
              <td>6:00pm - 8:30pm</td>
            </tr>
            <tr className='flex flex-col w-full pt-4'>
              <td className='text-dark underline decoration-red-400'>Sunday</td>
              <td>12:00pm - 2:30pm</td>
            </tr>
          </tbody>
        </table>

        <p className='text-center text-lg'>
          Dine In or Takeaway. For reservations or enquires contact us on{' '}
          <span className='text-red'>0419 355 914</span>
        </p>
      </div>

      <div className='py-8'>
        <span className='text-lg text-red font-thin'>From the</span>
        <p className='text-4xl text-gray display-font font-semibold'>Menu</p>

        <div className='flex items-center justify-center'>
          <div className=''>
            <button
              className='bg-red p-4 mt-4 rounded-lg flex items-center text-light text-lg'
              type='button'
              onClick={() => setIsOpen(!isOpen)}
            >
              Choose from the menu
              <FontAwesomeIcon
                icon={faCaretCircleDown}
                size='lg'
                className='pl-4'
              />
            </button>
            {isOpen && (
              <motion.ul
                initial={{
                  opacity: 0,
                  y: '-5vh',
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 60,
                  },
                }}
                onClick={() => setIsOpen(!isOpen)}
                className='p-2'
                aria-labelledby='dropdownMenuButton1'
              >
                <li className='border-b border-slate-900 p-2 text-center text-lg'>
                  <button
                    className='w-full h-full'
                    onClick={() => setMealType('Breads')}
                  >
                    Breads
                  </button>
                </li>
                <li className='border-b border-slate-900 p-2 text-center text-lg'>
                  <button
                    className='w-full h-full'
                    onClick={() => setMealType('Kids')}
                  >
                    Kids Meals
                  </button>
                </li>
                <li className='border-b border-slate-900 p-2 text-center text-lg'>
                  <button
                    className='w-full h-full'
                    onClick={() => setMealType('Mains')}
                  >
                    Mains
                  </button>
                </li>
                <li className='border-b border-slate-900 p-2 text-center text-lg'>
                  <button
                    className='w-full h-full'
                    onClick={() => setMealType('Desert')}
                  >
                    Desert
                  </button>
                </li>
                <li className='border-b border-slate-900 p-2 text-center text-lg'>
                  <button
                    className='w-full h-full'
                    onClick={() => setMealType('Sides' || 'Sauces')}
                  >
                    Sides & Sauces
                  </button>
                </li>
              </motion.ul>
            )}
          </div>
        </div>
      </div>

      <div className='border w-full min-h-[80vh] rounded-lg p-2 overflow-hidden'>
        {dishes.map(
          (dish) => dish.type.includes(mealType) && <DishCard dish={dish} />
        )}
      </div>
    </div>
  );
};

export default Restaurant;

export const getStaticProps: GetStaticProps = async () => {
  const dishes: Dish[] = (await getDishes()) || [];
  const specials: Dish[] = (await getSpecials()) || [];

  return {
    props: {
      dishes,
      specials,
    },
    revalidate: 60,
  };
};
