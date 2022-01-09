import React from 'react';
import './card.css'
export const Card = props=>(

    <div className='card-container'>
        <img src={`https://robohash.org/${props.ac.id}?set=set1&size=200x200`} />
         <h2 >{props.ac.name}</h2>
         <p>{props.ac.email}</p>
    </div>
)