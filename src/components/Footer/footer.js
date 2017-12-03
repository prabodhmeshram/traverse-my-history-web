import React from "react";
import './footer.css';
export const Footer = (props) => {

    return (
        <div className='footer-content'>
            {props.content}
        </div>
    )

}