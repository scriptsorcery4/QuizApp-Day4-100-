import React from 'react'
import { FaLaptopCode, FaStopwatch } from 'react-icons/fa'

function PreMain({content}) {
  return (
    <div className='py-8 flex justify-between items-center'>
        <div className='flex gap-2'>
            <div className='bg-blue-600 w-16 h-16 rounded-lg flex justify-center items-center'>
            <FaLaptopCode className='text-white' size={30} />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-bold'>{content.title}</h1>
                <p className='text-gray-500 mt-[-4px]'>12 Questions</p>
            </div>
        </div>
        <div className='flex gap-2 items-center'>
            <FaStopwatch className='text-blue-600 mt-[-2px]' size={22} />
            <p className='font-medium text-[18px]'>00:00:27</p>
        </div>
    </div>
  )
}

export default PreMain