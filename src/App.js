import { React, useState } from "react";
import Data from "./data.json";
import Header from "./components/Header";
import Input from "./components/Input";
import SelectOption from "./components/SelectOption";
import Country from "./components/Country";
import { MdSearch } from "react-icons/md";
const App = () => {
  // console.log(Data);
  const [Countries, setCountries] = useState(Data);
  const [Query, setQuery] = useState("");
  const filterCountry = (regionName) => {
    let newRegions = Data.filter((Country) => Country.region == regionName);
    setCountries(newRegions);
  };

  const displayFull = (e) => {
    console.log("display");
  };
  return (
    <div className="bg-gray-200">
      <Header />
<section className="md:flex items-center justify-between w-[80vw]">
      <div className=" my-6 mx-9 shadow-xl">
        <div className=" my-6  shadow-xl flex items-center w-full bg-white rounded-md pl-5">
          <MdSearch className="text-gray-500 text-xl" />

          <input
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            placeholder="Search for a country..."
            type="text"
            name="search"
            className=" placeholder:text-sm w-full  bg-white rounded-r-md border-none focus:border-white py-2 pl-9 pr-3 shadow-sm "
          />
        </div>
      </div>

      <SelectOption filterCountry={filterCountry} />

      </section>

      <section className="md:grid grid-cols-3">
      {Countries.filter((country) =>
        country.name.toLowerCase().includes(Query)
      ).map((country, index) => {
        return (
          <Country country={country} key={index} displayFull={displayFull} />
        );
      })}

</section>
    </div>
  );
};

export default App;
