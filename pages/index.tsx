import React from 'react';
import { Display } from '../components';

function Home() {
  return (
    <div className='min-h-[200vh]'>
      <Display />
      <p className='text-center pt-4 px-2'>
        The Parkes Railway Bowling Club is located in Hooley Street in the
        township of Parkes, NSW. The club President is Tony Latter, Bowls
        Secretary is Paul Lewin, and the Bar Manager is Jo Cross. Social
        bowls is played Wednesday and Saturday afternoons. Have your name in by
        12:30pm for a 1:00pm start, although you are welcome for a bowl any day.
        Friday night is raffle night with Robyn's nest restaurant open from
        Friday night to Sunday lunch. So come and see the best bowls and company
        Parkes has to offer. Happy hour starts at 5:00pm and goes to 7:00pm
        cheers. Be sure to check back here for our latest Club news, bowls draw,
        and upcoming events.
      </p>
    </div>
  );
}

export default Home;
