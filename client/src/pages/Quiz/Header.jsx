import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='shadow-sm fixed top-0 left-0 z-10 w-full bg-white'>
        <div className='max-w-[1400px] mx-auto flex justify-between items-center h-16'>
            <div className='flex gap-12 items-center'>
                <Link to='/'><div className='flex items-center gap-2.5 font-bold'>
                    <img className='h-7' src="/logo.svg" alt="" />
                    <p className='text-2xl'>Quiz<span className='text-blue-500'>App</span></p>
                </div></Link>
            </div>
            <Link to='/'><button className='border border-red-400 text-red-700 font-medium px-4 py-1.5 rounded-lg hover:bg-red-600 hover:text-white transition-colors'>Exit Quiz</button></Link>
        </div>
    </div>
  )
}

export default Header