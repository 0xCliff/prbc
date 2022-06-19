import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { Comments, CommentsForm, Loader } from '../../components';
import PostDetail from '../../components/posts/PostDetail';
import { Post } from '../../index.dev';
import { getPostDetails, getPosts } from '../../services';

type Props = {
  post: Post;
};

const PostPage = ({ post }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='px-2 lg:container lg:mx-auto lg:mb-8 lg:px-10'>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8 lg:mr-4'>
          <PostDetail post={post} />
        </div>
        <div className='col-span-1 lg:col-span-4 lg:mr-4'>
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore
  const data: Post = await getPostDetails(params.slug);

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const posts: Post[] = await getPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};
