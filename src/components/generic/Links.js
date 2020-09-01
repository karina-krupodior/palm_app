import React, {Component} from "react";

class Links extends Component {
    render() {
        const url = '/' + this.props.label.toLowerCase().trim().replace('','-');
        return <div>
            <a href = {url}>{this.props.label} </a>
        </div>
    }
}
 export default Links;