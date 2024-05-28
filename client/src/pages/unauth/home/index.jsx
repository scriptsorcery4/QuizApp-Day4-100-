import React from 'react'
import Button from '../../../components/ui/Button'
import { Link } from 'react-router-dom'

function index() {
  return (
    <div className='w-full h-screen py-40 '>
      <div className='w-fit mx-auto mt-28'>
        <h1 className='text-6xl font-bold leading-[120%]'>Learn 10x <span className='text-blue-500'>Faster!</span></h1>
        <p className='text-lg text-center text-gray-500'>Unclock Your Potential with Personalied Quizzes</p>
        <div className='w-fit mx-auto py-4 flex gap-4'>
          <Link to='/login'><Button type='simple' content='Get Started'/></Link>
          <Link to='/quizzes'><Button type='ghost' content='Find Quiz'/></Link> 
        </div>
      </div>
    </div>
  )
}

export default index