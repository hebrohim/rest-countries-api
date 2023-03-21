import React from 'react'

import {MdOutlineDarkMode} from "react-icons/md";

const Header = () => {
  return (
    <div className='bg-slate-50 h-[10vh] flex justify-between items-center px-5'>

<p className='font-bold'>Where in the world?</p>

<div className='flex items-center'>

<MdOutlineDarkMode />   
<h5 className='pl-1  text-xs font-medium'>Dark Mode</h5>
</div>
    </div>
  )
}

export default Header