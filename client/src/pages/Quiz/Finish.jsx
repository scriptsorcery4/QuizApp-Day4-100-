import React from 'react'
import { FaSmile } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Finish() {
  return (
    
            <div className='bg-gray-50 px-24 py-8 rounded-lg border'>
                <div className='flex justify-center'><FaSmile size={50} className='text-blue-600' /></div>
                <h1 className='text-2xl text-center pt-2 font-medium'>Your Score</h1>
                <p className='text-center font-semibold'>5/5</p>
                <div className='flex justify-center'><button  className='mt-6 text-white bg-blue-600 px-4 py-1.5 font-medium text-sm rounded-lg'>Try Again</button></div>
                <Link to='/quizzes'><p className='text-center mt-4 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer'>Select Another Quiz</p></Link>
            </div>

  )
}

export default Finish