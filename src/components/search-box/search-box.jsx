import React from 'react'
import './search-box.css';

export const SearchBox=({placeholder,handleChange
})=>(
    <input type="search"
    className="search-box"
    placeholder={placeholder}
    onChange={handleChange}/>
)