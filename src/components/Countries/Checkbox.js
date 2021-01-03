
import React from 'react'
import './GenericCountry.css'

export const Checkbox = (props) => {
    return (


      <li>
       <input  className={'checkbox_cities'} type="checkbox"  onClick={(event) => props.onClick(event.target.checked,props.value )} checked={props.isChecked} value={props.cities} /> {props.cities}
      </li>
    )
}

export default Checkbox;
