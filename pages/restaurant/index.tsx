import { GetStaticProps } from 'next';
import React from 'react';
import { Dish } from '../../index.dev';
import { getDishes } from '../../services';

type Props = {
  dishes: Dish[];
};

const Restaurant = ({ dishes }: Props) => {
  console.log(dishes);
  return (
    <div>
      {dishes.map((dish) => (
        <h1>{dish.dishName}</h1>
      ))}
    </div>
  );
};

export default Restaurant;

export const getStaticProps: GetStaticProps = async () => {
  const dishes: Dish[] = (await getDishes()) || [];

  return {
    props: {
      dishes,
    },
    revalidate: 60,
  };
};
