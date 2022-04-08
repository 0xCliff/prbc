import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getDishes = async () => {
  const query = gql`
    query getDishes {
      restaurantDishes {
        id
        dishName
        description
        price
        vegan
        chefsSpecial
        slug
        featuredImage {
          url
        }
        type
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.restaurantDishes;
};

export default getDishes;
