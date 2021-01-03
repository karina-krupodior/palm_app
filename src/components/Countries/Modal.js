import React from "react";
import "./Modal.css";


export default class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal" id="modal">

                <div className={'popup_body'}>

                    <div className="modal_content">{this.props.children}

                    </div>

                </div>

            </div>
        );
    }
}
