import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const getGalleryImages = async () => {
  const query = gql`
    query getGalleryImages {
      galleryImages(last: 4, orderBy: createdAt_DESC) {
        imageName
        description
        image {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.galleryImages;
};

export default getGalleryImages;
