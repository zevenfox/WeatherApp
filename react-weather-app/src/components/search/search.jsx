import {useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'


function Search({onSearchChange}){

  const [search,setSeearch] = useState('')

  function handleChange(value){
    setSeearch(value)
    onSearchChange(value)
  }



  return (
    <AsyncPaginate
    placeholder="Search for a city"
    debounceTimeout={600}
    value={search}
    onChange={handleChange}
    />
  )
}

export default Search