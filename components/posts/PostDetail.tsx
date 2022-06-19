import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {Post} from '../../index.dev';
import {getContentFragment} from '../../utils';
import {getComments} from '../../services';
import Image from 'next/image';

type Props = {
  post: Post;
};

const PostDetail = ({post}: Props) => {
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    getComments(post.slug).then((res) => setComments(res));
  }, [post.slug]);

  return (
    <div className="color-primary-opacity rounded pb-2 shadow-lg lg:mb-8 lg:p-8">
      <div className="relative mx-auto mb-2 w-full overflow-hidden shadow-lg pb-60 lg:pb-[50vh]">
        <Image
          src={post.featuredImg.url}
          alt={post.title}
          layout='fill'
          className="rounded-t object-top"
        />
      </div>
      <div className="flex flex-col lg:px-2 lg:mb-8">
        <div className="text-secondary mb-2 flex items-center justify-center text-lg">
          {/* svg */}
          <span className="ml-4 font-semibold">
            {moment(post.createdAt).format('DD MMM, YYYY')}
          </span>
        </div>
        <div className="text-secondary mb-2 flex items-center justify-center text-lg">
          {/* svg */}
          <p className="ml-4 mt-[2.25px] font-semibold">{comments.length}</p>
        </div>

        <h1 className="text-secondary my-4 text-center text-5xl font-semibold display-font tracking-wide lg:text-5xl">
          {post.title}
        </h1>

        <div className="mb-2 bg-white px-4 py-4 pb-12 text-base font-normal shadow-lg lg:rounded-lg lg:p-8">
          {post.content.raw.children.map((typeObj: any, index: number) => {
            const children = typeObj.children.map(
                (item: any, itemIndex: number) =>
                  getContentFragment(itemIndex, item.text, item),
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
