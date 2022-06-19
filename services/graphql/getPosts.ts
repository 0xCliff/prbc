import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getPosts = async () => {
  const query = gql`
    query getPosts {
      posts(last: 5) {
        id
        title
        excerpt
        content {
          raw
        }
        slug
        featuredImg {
          url
        }
        createdAt
        postType
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};

export default getPosts;
