import React, { Component } from "react";
import {Header} from "../../components/Header/header";
import {Footer} from "../../components/Footer/footer";
import {SideNav} from "../../components/SideNav/sidenav";

import "./dashboard.css";
export class Dashboard extends Component{

    render(){
        return(
            <div className='container'>
                <div className='sidenav-container'>
                    <SideNav />
                </div>
                <div className='content'>
                    <Header />
                    <Footer />
                </div>
            </div>
        );
    }
}