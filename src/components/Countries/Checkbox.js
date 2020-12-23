
import React from 'react'

export const Checkbox = (props) => {
    return (
      <li>
       <input onClick={(event) => props.onClick(event.target.checked,props.value )} type="checkbox" checked={props.isChecked} value={props.cities} /> {props.cities}
      </li>
    )
}

export default Checkbox;
// onClick={(city) => props.addToBasket(city)}