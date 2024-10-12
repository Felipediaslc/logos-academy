import React from 'react'

const Button = (props) => {
  return (
    <button className=' bg-transparent 
    text-gray-950 font-cooper-bold border-2 mx-5 
     tracking-widest text-[1.3rem] lg:text-[0.9rem]
      border-gray-950 py-2 px-[4rem] lg:-my-1
       md:px-3 md:my-6 lg:mx-3  lg:px-6 mb-[8.5rem] lg:mb-0
      rounded-2xl hover:bg-gray-950
       hover:text-orange-500 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button
