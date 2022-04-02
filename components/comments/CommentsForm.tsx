import React, {MouseEventHandler, useEffect, useRef, useState} from 'react';
import { postComment } from '../../services';

type Props = {
  slug: string
};

const CommentsForm = ({slug}: Props) => {
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

  const handleCommentSubmission = (): MouseEventHandler<HTMLButtonElement> | undefined => {
    const {value: comment} = commentEl.current;
    const {value: name} = nameEl.current;
    const {value: email} = emailEl.current;
    const {checked: storeData} = storeDataEl.current;

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

    postComment(commentObj)
        .then(() => {
          setShowSuccessMessage(true);

          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        });
  };

  return (
    <div className='color-primary-opacity rounded p-6 mb-2 lg:p-8 lg:mb-8'>
      <h3 className="text-xl mb-8 font-semibold text-secondary border-b pb-4">
        Leave a Reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className='p-4 outline-none w-full rounded focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Comment'
          name='Comment'
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          className='p-2 outline-none w-full rounded focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          type="text" ref={nameEl}
          placeholder='Name' name='Name'
        />
        <input
          className='p-2 outline-none w-full rounded focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          type="text" ref={emailEl}
          placeholder='Email' name='Email'
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-2">
        <div>
          <input type="checkbox" ref={storeDataEl} id='storeData' name='storeDate' />
          <label
            htmlFor="storeData"
            className='ml-2 text-secondary font-semibold lg:text-xl cursor-pointer'
          >Save name and email in local storage for next time?
          </label>
        </div>
      </div>
      {error && <p className='text-red-500'>All fields are required</p>}
      <div className="mt-8">
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='color-secondary display-font text-primary lg:hover:color-secondary lg:color-secondary-opacity inline-block cursor-pointer rounded-lg py-2 px-4 text-xl font-semibold lg:transform lg:transition lg:duration-300'
        >
          Post Comment
        </button>
        {showSuccessMessage && <span
          className='lg:text-2xl float-right mt-3 text-green-800 font-semibold'
        >Comment submitted for review.</span>}
      </div>
    </div>
  );
};

export default CommentsForm;