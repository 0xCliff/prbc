import { faCaretCircleDown } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { SpecialsCarousel } from '../../components';
import { Dish } from '../../index.dev';
import { getDishes, getSpecials } from '../../services';

type Props = {
  dishes: Dish[];
  specials: Dish[];
};

const Restaurant = ({ dishes, specials }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mealType, setMealType] = useState<string>('Dinner');

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 px-4'>
      <h4 className='text-center outback-text text-5xl py-10 font-bold'>
        Outback Eatery
      </h4>
      <div className='h-[50vh] w-full mb-8'>
        <span className='text-lg text-red font-thin'>From the</span>
        <h4 className='text-5xl text-gray mb-4 outback-text font-bold'>
          Chefs Specials
        </h4>
        <SpecialsCarousel specials={specials} />
      </div>

      <p className='text-lg text-dark pb-2'>
        <span className='text-red text-xl'>Welcome to the Outback Eatery,</span>{' '}
        the place to be for delicious homecooked meals. Whether you're looking
        for a romantic evening out, a birthday party for your kids, or a fun
        family outing for the whole gang, we've got you covered. Our catered
        functions are perfect for any occasion and we're excited to meet you!
      </p>
      <p className='text-lg text-dark pb-2'>
        We know you'll love our social bar and raffles as much as our
        scrumptious menu items. Come in and try our famous chicken Schnitznel or
        our succulent steaks today!
      </p>

      <div className='my-4'>
        <span className='text-lg text-red font-thin'>From the</span>
        <h4 className='text-5xl text-gray mb-4 outback-text font-bold'>Menu</h4>

        <div className='flex items-center justify-center'>
          <div className='relative'>
            <button
              className='bg-primary px-10 h-10 rounded-lg flex items-center text-light text-lg'
              type='button'
              onClick={() => setIsOpen(!isOpen)}
            >
              Choose a Meal type
              <FontAwesomeIcon
                icon={faCaretCircleDown}
                size='lg'
                className='pl-4'
              />
            </button>
            {isOpen && (
              <ul className='p-2' aria-labelledby='dropdownMenuButton1'>
                <li className='border-b border-slate-900 p-2 text-center text-lg'>
                  Lunch
                </li>
                <li className='border-b border-slate-900 p-2 text-center text-lg'>
                  Dinner
                </li>
                <li className='border-b border-slate-900 p-2 text-center text-lg'>
                  Deserts
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className='border w-full min-h-[60vh] rounded-lg p-2'>
        {dishes.map((dish) => (
          <p>{dish.dishName}</p>
        ))}
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
