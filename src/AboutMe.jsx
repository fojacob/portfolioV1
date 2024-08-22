import { Technologies } from './Technologies';
import React from "react";

export function AboutMe({ about, img1 }) {

  return <section id="about me" className=' flex flex-col-reverse md:p-48 md:flex-row'>
      <div className='flex flex-col w-1/2'>
        <h1>About Me</h1>
        <p>{about.presentation}</p>

        <Technologies  />
      </div>
      
      <img src={img1} alt="personal photo" className=' aspect-square w-[15rem] rounded-full border-solid border-white border-4 object-cover object-top' />
    </section>;
}
  