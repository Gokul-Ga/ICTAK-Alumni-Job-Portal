import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import { Button } from 'react-bootstrap'
import "./SearchBar.css"

const SearchBar = () => {
  return (
   <>
   <div>
   <input className="search-field rounded"type="text" placeholder='Search Jobs'/>
   <Button><BiSearchAlt/></Button>
   </div>
   </>
  )
}

export default SearchBar