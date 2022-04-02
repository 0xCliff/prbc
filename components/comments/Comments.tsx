import React, {useEffect, useState} from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import {getComments} from '../../services';

type Props = {
  slug: string;
};

const Comments = ({slug}: Props) => {
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    getComments(slug)
        .then((res) => setComments(res));
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div className='color-primary-opacity rounded p-8 mb-2 lg:mb-8 lg:pb-12'>
          <h3 className='text-xl text-secondary mb-4 font-semibold border-b pb-4'>
            {comments.length }
            {' '}
            Comments
          </h3>
          {comments.map((comment: any) => (
            <div key={comment.createdAt} className='border-b border-gray-100 mb-2 pb-2'>
              <p className="mb-2 text-sm">
                <span className='text-secondary text-xl font-semibold'>
                  {comment.name}
                </span>
                {' '}
                  -
                {' '}
                {moment(comment.createdAt).format('DD MMM YYYY')}

              </p>
              <p className="whitespace-pre-line text-white text-2xl font-semibold w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )
      }
    </>
  );
};

export default Comments;