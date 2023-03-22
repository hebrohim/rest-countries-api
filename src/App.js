import { React, useState } from "react";
import Data from "./data.json";
import Header from "./components/Header";
import Input from "./components/Input";
import SelectOption from "./components/SelectOption";
import Country from "./components/Country";
const App = () => {
  // console.log(Data);
  const [Countries, setCountries] = useState(Data);

  const filterCountry = (regionName) => {
    let newRegions = Data.filter((Country) => Country.region == regionName);
    setCountries(newRegions);
  };


  const userInput= (e) =>{

    let value  = e.target.value.toLowerCase() 
    let newCountries = Countries.filter((country)=>country.name.toLowerCase().includes(value))
setCountries(newCountries)
 }
  return (
    <div className="bg-gray-200">
      <Header />
      <Input Countries = {Countries} userInput = {userInput}/>
      <SelectOption filterCountry={filterCountry} />
      {Countries.map((country, index) => {
        return <Country country={country} key={index} />;
      })}
    </div>
  );
};

export default App;
