import React from 'react'
import Icon from '../Icon/Icon'


const Leftwrapper= ({children}) => {
  return (
    <div className='w-2/3 h-full no-scrollbar hidden md:block  bg-white overflow-auto'>
      <div className=' absolute z-10  cursor-pointer hover:scale-125 transition-transform flex justify-between gap-4 items-center  top-8  left-10'>
       <Icon/>
        <span className=' text-sm mt-2 font-semibold'>BLUEPRINT UI</span>
      </div>

      {children}
       
    </div>
  )
}

export default Leftwrapper
