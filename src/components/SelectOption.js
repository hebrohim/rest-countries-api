import React from "react";
import Data from "../data.json";


const SelectOption = ({ filterCountry }) => {
  var Regions = ["Filter by Region",...new Set(Data.map((country) => country.region))];
  //    console.log(Regions)
  return (
    <div className="">
      <select
        onChange={(e) => filterCountry(e.target.value)}
        className=" w-1/2 flex justify-between py-3 ml-9 pl-5 rounded-md text-sm"
      >
        {Regions.map((region,index) => {
          return (
            <option value={region} id={region} key = {index}>
              {region}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectOption;
