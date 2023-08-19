'use client'
import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation(){
  return (
    <TypeAnimation
      sequence={[
        'Our website is coming soon', // Types 'One'
        1000, // Waits 1s
        '', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Our website is coming soon', // Types 'Three' without deleting 'Two'
        // () => {
        //   console.log('Sequence completed');
        // },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: 'inline-block', color: '#1c3678' }}
      className='typeAnimation'
    />
  );
};