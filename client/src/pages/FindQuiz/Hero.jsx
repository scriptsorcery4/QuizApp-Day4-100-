import React from 'react'
import FilterArea from './FilterArea'

function Hero() {
  return (
    <div className='pt-20 border-b '>
        <h1 className='text-5xl font-bold'>Find a best <span className='text-blue-500'>quiz</span> for you!</h1>
        <p className='pt-2 text-gray-500'>Search over a 20,000+ quizzes</p>
        <FilterArea/>
    </div>
  )
}

export default Hero