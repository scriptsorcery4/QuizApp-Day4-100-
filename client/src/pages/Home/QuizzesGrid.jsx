import React from 'react'
import Card from './components/Card'
import AddCard from './components/AddCard'

function QuizzesGrid() {
  return (
    <div className='py-7 grid grid-cols-4 gap-6 '>
        <Card  id={1} title='Code Quiz' icon='code' author='Max Williams'/>
        <Card  id={2} title='Steam Quiz' icon='steam' author='Kevin Love'/>
        <Card  id={3} title='Tiktok Quiz' icon='tiktok' author='Michael James'/>
        <AddCard/>
    </div>
  )
}

export default QuizzesGrid