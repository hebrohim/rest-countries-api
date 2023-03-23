import React from 'react'

const Country = ({country,displayFull}) => {
    let {name,population,capital,region,flag} = country
  
  return (
    <div className='card w-[80vw] mx-10 my-10 ' onClick={(event)=>displayFull(event)}>
     <img src= {flag} className="w-[80vw] h-1/2 rounded-t-md"/>
     <div className='bg-white px-10 py-10 rounded-b-md'>
        <h1 className=' mb-5 font-bold text-xl'>{name}</h1>
        <p><span className='font-medium'>Population: </span>{population}</p>
        <p><span className='font-medium'>Region: </span>{region}</p>
        <p><span className='font-medium'>Capital: </span>{capital}</p>
     </div>
    </div>
  )
}

export default Country