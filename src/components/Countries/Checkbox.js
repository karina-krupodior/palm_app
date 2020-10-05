
import React from 'react'

export const Checkbox = props => {
    return (
      <li>
       <input key={props.cities} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.cities} /> {props.cities}
      </li>
    )
}

export default Checkbox;