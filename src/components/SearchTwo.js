import React,{useState,useEffect} from 'react';

const Persons = [
   {id:1,name:'Sumanth'},
   {id:2,name:'Hemanth'},
   {id:3,name:'Rajesh'},
   {id:4,name:'Manjunath'},
   {id:5,name:'Ravi'},
   {id:6,name:'Devank'},
   {id:7,name:'Nandini'},
   {id:8,name:'Usha'},
   {id:9,name:'Eswara'}
]

function SearchTwo() {
    const[name,setNames]=useState([]);
    const[search,setSearch] = useState('');
    const[searchname,setSearchNames] = useState([]);

   useEffect(()=>{
      setSearchNames(Persons.filter(person =>(
          person.name.toLowerCase().includes(search.toLowerCase())
      )))
   },[search,name]);


  const  handleChange = (e) =>{
        setSearch(e.target.value)
    }
    return (
        <div>
            <h1>Persons List</h1>
            
            <h4>Search Names: <input type="text" 
                                     value={search}
                                     placeholder="enter your name..."
                                     onChange={handleChange}
                                     /></h4>
            {searchname.map(person => (
                <p>{person.name}</p>
            ))} 
        </div>
    )
}

export default SearchTwo
