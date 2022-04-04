import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getSpecials = async () => {
  const query = gql`
    query getSpecials {
      restaurantDishes(where: { chefsSpecial: true }) {
        featuredImage {
          url
        }
        slug
        id
        dishName
        vegan
        price
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.restaurantDishes;
};

export default getSpecials;
