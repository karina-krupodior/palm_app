import React,{Component} from "react";



class Countries extends React.Component {
    render() {
        return (
            <Fragment>
                <p>{props.name}</p>
                { props.info.map(el => {
                    <div>{el.title} {el.size}</div>
                })}
            </Fragment>
        )
    }
}
export default Countries;












