import {GraphQLClient, gql} from 'graphql-request';
import { NextApiRequest, NextApiResponse } from 'next';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const GraphCMSToken = process.env.GRAPHCMS_TOKEN;

export default async function postCommentAPI(req: NextApiRequest, res: NextApiResponse) {
  const client: GraphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${GraphCMSToken}`,
    },
  });

  const query = gql`
    mutation createComment($name: String!, $email: String!, $slug: String!, $comment: String!) {
      createComment(data: {
        name: $name,
        email: $email,
        comment: $comment,
        post: {
          connect: { slug: $slug }
        }
      })
      {
        comment
        name
        email
      }
    }
  `;

  try {
    const result = await client.request(query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
}