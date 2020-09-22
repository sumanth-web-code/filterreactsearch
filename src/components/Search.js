import React, {useState,useEffect} from 'react'

function Search() {
    const[countries,setCountries] = useState([]);
  const [search,setSearch] = useState('');
  const [filterCountries,setfilterCountries] = useState([]);

  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setCountries(data)
      
    })
  },[]);

  useEffect(() => {
    setfilterCountries(countries.filter(country => (
      country.name.toLowerCase().includes(search.toLowerCase())
    )))
  },[countries,search])

  const handleChange = (e) =>{
     setSearch(e.target.value);
    }

   /* const filteredCountries = countries.filter(country => (
       country.name.toLowerCase().includes(search.toLowerCase())
    ))*/

  return (
    <div>
     <h1>Countries List</h1>
     
     <h2>Search for Countries:<input type="text" 
                                   placeholder="Enter a country name..." 
                                   value={search}
                                   onChange={handleChange}
                                   /></h2>
     {
       filterCountries.map((country,i) =>(
         <div key={i}>
           <h3>Country:{country.name}</h3>
           <h4>Capital:{country.capital}</h4>
           <h5>Flag: <img src={country.flag} alt="Flag"  width="75px" height="50px"/></h5>
           <h6>Borders:{country.borders.join(',')}</h6>
         </div>
       ))

     }
    </div>
  );
}

export default Search
