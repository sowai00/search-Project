import React from "react";
import './card-list.css'
import {Card} from '../card/card'

export  const CardList =props => {

return <div className="card-list">       
 {props.accounts.map((ac) => (
    <Card key={ac.id} ac={ac}/>
  ))}</div>
}