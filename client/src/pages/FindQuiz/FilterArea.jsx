import React from 'react'
import { LuChevronDown, LuX, LuPlus } from "react-icons/lu";
import FilterButton from './components/ui/FilterButton';

function FilterArea() {
  return (
    <div className='flex py-5 mt-3  items-center justify-between'>
        <div className='flex gap-4 items-center'>
        <FilterButton type='main'/>
        <div className='w-[1px] h-[30px] rounded-lg bg-black'></div>
        <div className='flex gap-3'>
        <FilterButton type='semi-main' title='Cooding'/>
        <FilterButton type='semi-main' title='React'/>
        <FilterButton type='semi-main' title='Social Media'/>
        </div>
        </div>
        <FilterButton type='mainn'/>
        </div>
  )
}

export default FilterArea