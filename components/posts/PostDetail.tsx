import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Post } from '../../index.dev';
import { getContentFragment } from '../../utils';
import { getComments } from '../../services';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClockRotateLeft,
  faMessageDots,
} from '@fortawesome/pro-solid-svg-icons';

type Props = {
  post: Post;
};

const PostDetail = ({ post }: Props) => {
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    getComments(post.slug).then((res) => setComments(res));
  }, [post.slug]);

  return (
    <div className='bg-neutral-50 rounded py-2 mt-4 shadow-lg lg:mb-8 lg:p-8'>
      <div className='relative mx-auto mb-2 w-[85vw] overflow-hidden pb-60 lg:pb-[50vh] rounded'>
        <Image
          src={post.featuredImg.url}
          alt={post.title}
          layout='fill'
          className='object-top'
        />
      </div>

      <div className='flex flex-col lg:px-2 lg:mb-8'>
        <div className='text-blue-600 text-sm mb-2 flex items-center justify-center'>
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            size='lg'
            className='pr-2'
          />
          <span className='text-black'>
            {moment(post.createdAt).format('DD MMM, YYYY')}
          </span>
        </div>

        <div className='text-blue-600 mb-2 flex items-center justify-center text-sm'>
          <FontAwesomeIcon icon={faMessageDots} size='lg' className='pr-2' />
          <p className='text-black'>{comments.length}</p>
        </div>

        <h1 className='my-4 text-dark text-center text-3xl font-semibold display-font tracking-wide lg:text-5xl'>
          {post.title}
        </h1>

        <div className='mb-2 bg-white m-2 p-2 pb-12 font-normal shadow-lg rounded lg:rounded-lg lg:p-8'>
          {post.content.raw.children.map((typeObj: any, index: number) => {
            const children = typeObj.children.map(
              (item: any, itemIndex: number) =>
                getContentFragment(itemIndex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
