import React from 'react'
import { LuChevronDown, LuX, LuPlus } from "react-icons/lu";

function FilterButton(props) {
  return (
    <>
    {props.type === 'main' && <button className='pl-4 pr-2 py-1.5 text-white bg-black rounded-md flex gap-2 items-center'>
            <p>Filter</p>
            <LuChevronDown size={20} className='mt-[3px]' />
        </button>}

     {props.type === 'semi-main' && <button className=' pl-4 pr-2 py-1.5 text-black bg-white border rounded-md flex gap-2.5 items-center'>
                <p>{props.title}</p>
                <LuX className='mt-[1px]'/>
            </button>} 

      {props.type === 'mainn' &&  <button className='w-fit pl-4 pr-2 py-1.5 text-gray-900 font-medium bg-white border-gray-500 border rounded-md flex gap-2 items-center'>
            <p>Sort by</p>
            <LuPlus size={18} className='mt-[2px]' />
            </button>}        
    </>
  )
}

export default FilterButton