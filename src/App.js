import React from "react";
import Data from "./data.json";
import Header from "./components/Header";
import Input from "./components/Input";
import SelectOption from "./components/SelectOption";
import Country from "./components/Country";
const App = () => {
  console.log(Data);
  return (
    <div className="bg-gray-200">
      <Header />
      <Input />
      <SelectOption />
      {
        Data.map((country,index)=>{
         return <Country country ={country} key ={index} />
        })
      }
    </div>
  );
};

export default App;
