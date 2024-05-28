import React from 'react'
import Header from '../../components/Header'
import QuizzesGrid from './QuizzesGrid'
import FilterArea from './FilterArea'
import Hero from './Hero'
import Footer from '../../components/Footer'

function index() {
  return (
    <>
    <Header/>
    <div className='max-w-[1200px] mx-auto'>
        
        <div className='flex flex-col mt-16'>
            <Hero/>
            <QuizzesGrid/>
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default index