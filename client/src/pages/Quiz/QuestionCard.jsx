import React from 'react'

function QuestionCard(props) {
  return (
    <div onClick={props.onClick} className={`border-[1.5px] border-blue-700 ${props.sel === 1 ? 'bg-blue-600 text-white' : 'text-black hover:bg-blue-100'}  p-4 rounded-lg cursor-pointer  transition-colors`}>
      <p className='select-none'>{props.title}</p>
    </div>
  )
}

export default QuestionCard