import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='bg-light'>
      <div className='text-blue flex flex-col items-center justify-center py-4'>
        <h2 className='text-5xl display-font font-semibold py-6'>PRBC</h2>
        <table className='table-fixed mb-6 w-80'>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>1:00pm - 10:00pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>1:00pm - 10:00pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>1:00pm - late</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>1:00pm - late</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>1:00pm - 10:00pm</td>
            </tr>
          </tbody>
        </table>

        <div className='flex'>
          <a href='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F642402229175922%2F'>
            <FontAwesomeIcon icon={faFacebookSquare} size='4x' className='' />
          </a>
        </div>
        <p className='text-center text-lg pt-4 px-4'>
          If you'd like to contact us, please feel free to give us a call at
          (02) 6862 2772.
        </p>
      </div>
      <div className='gmap_canvas'>
        <iframe
          width='100%'
          height='400'
          id='gmap_canvas'
          src='https://maps.google.com/maps?q=parkes%20railway%20bowling%20club&t=&z=17&ie=UTF8&iwloc=&output=embed'
          frameBorder='0'
          scrolling='no'
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
