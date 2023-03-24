import { React, useState } from "react";
import Data from "./data.json";
import Header from "./components/Header";
import Input from "./components/Input";
import SelectOption from "./components/SelectOption";
import Country from "./components/Country";
import { MdSearch, MdKeyboardBackspace } from "react-icons/md";

const App = () => {
  // console.log(Data);
  const [Countries, setCountries] = useState(Data);
  const [Query, setQuery] = useState("");

  // FILTER COUNTRY BY THEIR REGION/COUNTRY NAME
  const filterCountry = (regionName) => {
    let newRegions = Data.filter((Country) => Country.region == regionName);
    setCountries(newRegions);
  };

  // POPUP CONTENT

  const [popupContent, setpopupContent] = useState([]);
  const [displayFullDetail, setdisplayFullDetail] = useState(false);


  // DISPLAY POPUP ON CLCIK OF A COUNTRY CARD
  const displayFull = (country) => {
    setpopupContent([country]);
    setdisplayFullDetail(true);
  };


  //SET DARK MODE 
const [darkMode, setdarkMode] = useState(false)
  const toggleDarkMode = () =>{
    setdarkMode(!darkMode)
  }

  return (
    <main className = {darkMode?"dark":""} >
    <div className='bg-gray-200 dark:bg-black h-screen'>
      <Header toggleDarkMode = {toggleDarkMode} />
      {displayFullDetail ? null : (
        <section className="md:flex items-center justify-between w-[80vw] dark:bg-black ">
          <div className=" my-6 mx-9 shadow-xl ">
            <div className=" my-6  shadow-xl flex items-center w-full bg-white rounded-md pl-5 md:my-0">
              <MdSearch className="text-gray-500 text-xl" />

              <input autoComplete="off"
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
                placeholder="Search for a country..."
                type="text"
                name="search"
                className=" placeholder:text-sm w-full  bg-white rounded-r-md border-none focus:border-white py-2 pl-9 pr-3 shadow-sm  "
              />
              
            </div>
          </div>

          <SelectOption filterCountry={filterCountry} />
        </section>
      )}
      {displayFullDetail ? (
        <div>
          {popupContent.map((pop) => {
            let {
              name,
              nativeName,
              population,
              region,
              subregion,
              capital,
              topLevelDomain,
              currencies,
              languages,
              borders,
            } = pop;

            return (
              <section
                className="card w-[80vw]  mx-10 my-10 md:w-[25vw] dark:text-white"
                key={name}
              >
                <button
                  onClick={() => setdisplayFullDetail(!displayFullDetail)}
                  className="bg-white rounded-md px-3 mb-3 flex items-center dark:bg-gray-800"
                >
                  <MdKeyboardBackspace />
                  Back
                </button>

                <img src={pop.flag} className="w-[100vw] h-1/2 rounded-t-md" />
                <h1 className="font-bold my-5">{name}</h1>
                <h1 className="text-xs mb-1">
                  <span className="font-medium">Native Name : </span>
                  {nativeName}
                </h1>
                <h1 className="text-xs mb-1">
                  <span className="font-medium">Population : </span>
                  {population}
                </h1>
                <h1 className="text-xs mb-1">
                  <span className="font-medium">Region : </span>
                  {region}
                </h1>
                <h1 className="text-xs mb-1">
                  <span className="font-medium">Sub Region : </span>
                  {subregion}
                </h1>
                <h1 className="text-xs mb-5">
                  <span className="font-medium">Capital : </span>
                  {capital}
                </h1>
                <h1 className="text-xs mb-1">
                  <span className="font-medium">Top Level Domain : </span>
                  {topLevelDomain}
                </h1>
                {/* <h1 className="text-xs mb-1">
                  <span className="font-medium">Currencies : </span>
                  {currencies[0].name}
                </h1>
                <h1 className="text-xs mb-1">
                  <span className="font-medium">Languages : </span>
                  {languages[0].name},{languages[1].name},{languages[2].name}
                </h1> */}

                {/* <div className="border_countries">
                  <h1 className="font-bold mt-5 -mb-1 ">Border Countries:</h1>

                  <button className="bg-white px-5 py-1 mr-5 my-4 text-xs capitalize">
                    {borders[0]}
                  </button>
                  <button className="bg-white px-5 py-1 mr-5 my-4 text-xs capitalize">
                    {borders[1]}
                  </button>
                  <button className="bg-white px-5 py-1 mr-5 my-4 text-xs capitalize">
                    {borders[2]}
                  </button>
                </div> */}
              </section>
            );
          })}
        </div>
      ) : (
        <section className="md:grid grid-cols-3">
          {Countries.filter((country) =>
            country.name.toLowerCase().includes(Query.toLowerCase())
          ).map((country, index) => {
            return (
              <Country
                country={country}
                key={index}
                displayFull={displayFull}
              />
            );
          })}
        </section>
      )}
    </div>
    </main>
  );
};

export default App;
