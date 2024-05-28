import React from 'react'

function Button(props) {
  return (
    <button onClick={props.onClick} className={`${
        props.type === "simple" ? 'text-white tracking-tight px-6 py-1.5 rounded-md bg-gradient-to-b from-gray-900 to-gray-700' : 'tracking-tight  px-5 py-1.5 rounded-md  border'
    }`}>{props.content}</button>
  )
}

export default Button