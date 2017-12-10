import React from "react";
import './header.css';
import AppBar from 'material-ui/AppBar';

export const Header = (props) => {

    return(
        <div>
            <AppBar
                title={props.content}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </div>
    )
}