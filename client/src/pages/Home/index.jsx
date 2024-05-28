import React from 'react'
import Header from '../../components/Header'
import Unauth from '../unauth/home'
import Hero from './Hero'
import Footer from '../../components/Footer'
import QuizzesGrid from './QuizzesGrid'
import { useAuthContext } from '../../hooks/useAuthContext'

function index() {
  const { user } = useAuthContext();
  return (
    <div>
        <Header/>
       {!user ? <Unauth/> : <>
       <div className='max-w-[1200px] mx-auto'> 
        <div className='flex flex-col mt-16'>
          <Hero/>
          </div>
          <QuizzesGrid/>
        </div>
       </>}
       <Footer/>
    </div>
  )
}

export default index