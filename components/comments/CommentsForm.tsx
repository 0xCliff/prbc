import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { postComment } from '../../services';

type Props = {
  slug: string;
};

const CommentsForm = ({ slug }: Props) => {
  const [error, setError] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const commentEl: any = useRef();
  const nameEl: any = useRef();
  const emailEl: any = useRef();
  const storeDataEl: any = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, []);

  const handleCommentSubmission = ():
    | MouseEventHandler<HTMLButtonElement>
    | undefined => {
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!commentEl || !nameEl || !emailEl) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    postComment(commentObj).then(() => {
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className='bg-neutral-200 rounded p-2 my-4 lg:p-8 lg:mb-8'>
      <h3 className='text-lg mb-6 font-semibold border-b border-blue-800 pb-2'>
        Leave a Reply
      </h3>
      <div className='grid grid-cols-1 gap-2 mb-2'>
        <textarea
          ref={commentEl}
          className='p-2 outline-none w-full rounded focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 placeholder:text-blue-800'
          placeholder='Comment'
          name='Comment'
          rows={5}
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2'>
        <input
          className='p-1 outline-none w-full rounded focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 placeholder:text-blue-800 placeholder:text-sm'
          type='text'
          ref={nameEl}
          placeholder='Name'
          name='Name'
        />
        <input
          className='p-1 outline-none w-full rounded focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 placeholder:text-blue-800 placeholder:text-sm'
          type='text'
          ref={emailEl}
          placeholder='Email'
          name='Email'
        />
      </div>

      <div className='grid grid-cols-1 gap-2 mt-4 mb-2'>
        <div className='flex items-center'>
          <input
            type='checkbox'
            ref={storeDataEl}
            id='storeData'
            name='storeDate'
          />
          <label
            htmlFor='storeData'
            className='ml-2 text-secondary text-xs font-semibold lg:text-xl cursor-pointer'
          >
            Remember Me?
          </label>
        </div>
      </div>
      {error && <p className='text-red-500'>All fields are required</p>}
      <div className=''>
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='bg-blue-800 text-light lg:hover:color-secondary lg:color-secondary-opacity inline-block cursor-pointer rounded px-2 py-1 lg:transform lg:transition lg:duration-300 text-sm'
        >
          Post Reply
        </button>
        {showSuccessMessage && (
          <span className='lg:text-2xl float-right mt-3 text-green-800 font-semibold'>
            Comment submitted for review.
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
