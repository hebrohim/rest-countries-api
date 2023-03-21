import React from 'react'

const SelectOption = () => {
  return (
    <div className=''>


        <select className=' w-1/2 flex justify-between py-3 ml-9 pl-5 rounded-md text-sm'>
            
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
    </div>
  )
}

export default SelectOption