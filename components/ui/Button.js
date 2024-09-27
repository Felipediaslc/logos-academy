import React from 'react'

const Button = (props) => {
  return (
    <button className=' bg-transparent text-gray-950 font-cooper-bold border-2 tracking-widest border-gray-950 py-2 px-6 rounded-2xl md:ml-8 hover:bg-gray-950 hover:text-orange-500 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button
