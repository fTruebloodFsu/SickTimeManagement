import React from 'react';
import Clock from 'react-live-clock';

function Time(target){

  return(
    <div className='Time'>
      <Clock format={'dddd, MMMM Do YYYY, h:mm:ss a'} ticking={true} timezone={'US/Pacific'} />
    </div>
  );
}

export default Time;

