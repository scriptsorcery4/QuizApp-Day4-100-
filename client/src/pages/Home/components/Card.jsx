import React from 'react'
import { FaEllipsisV, FaLaptopCode, FaPlay, FaSteam, FaTiktok,  } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className='flex flex-col gap-5 w-full p-4 border rounded-lg shadow-sm'>
        <div className='relative h-30 rounded-md flex justify-center items-center py-14 bg-blue-600'>
            {props.icon === 'code' && <FaLaptopCode className='text-white' size={50} />}
            {props.icon === 'steam' && <FaSteam className='text-white' size={50} />}
            {props.icon === 'tiktok' && <FaTiktok className='text-white' size={50} />}
            <FaEllipsisV className='text-white absolute top-3 right-3' />
        </div>
        <div className='flex flex-col gap-3'>
            <div>
                <h1 className='text-2xl font-semibold'>{props.title}</h1>
                <p className='mt-[-4px] text-gray-700'>12 Questions</p>
            </div>
            <div className='flex justify-between items-end'>
                <div className='flex flex-col'>
                    <p className='text-[12px] text-gray-500'>Author</p>
                    <p className='text-sm font-medium mt-[-3px]'>{props.author}</p>
                </div>
                <Link to={`/quiz/${props.id}`}><div className='w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center'>
                    <FaPlay className='text-white' size={12} />
                </div></Link>
            </div>
        </div>
    </div>
  )
}

export default Card