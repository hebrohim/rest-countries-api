import React from "react";
import { MdSearch } from "react-icons/md";
const Input = ({Countries,userInput}) => {


 

    
  return (

    <div className=" my-6 mx-9 shadow-xl">
    <div className=" flex items-center w-full bg-white rounded-md pl-5">
        <MdSearch className="text-gray-500 text-xl"/>
      <input onChange={(event)=>userInput(event)} placeholder="Search for a country..."
        type="text"
        name="search"
        className=" placeholder:text-sm w-full  bg-white rounded-r-md border-none focus:border-white py-2 pl-9 pr-3 shadow-sm "
       
      />
    </div>

    </div>
  );
};

export default Input;
