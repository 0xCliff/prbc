import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getPosts = async () => {
  const query = gql`
    query getPosts {
      id
      title
      excerpt
      content {
        raw
      }
      categories {
        name
        slug
      }
      contentEditor {
        id
        fullName
        image {
          url
        }
        bio
      }
      slug
      featuredImg {
        url
      }
      createdAt
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};

export default getPosts;
