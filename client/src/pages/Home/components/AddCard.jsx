import React from 'react'
import { FaPlus } from 'react-icons/fa'

function AddCard() {
  return (
    <div className='flex items-center justify-center gap-5 w-full p-4 border rounded-lg shadow-sm bg-gray-100 text-gray-300 hover:bg-gray-200 hover:text-gray-400 transition-colors cursor-pointer'>
        <FaPlus size={50} />
    </div>
  )
}

export default AddCard