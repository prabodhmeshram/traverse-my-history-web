import React, { Component } from "react";
import {Header} from "../../components/Header/header";
import {Footer} from "../../components/Footer/footer";
import {SideNav} from "../../components/SideNav/sidenav";

import "./dashboard.css";
export class Dashboard extends Component{

    render(){
        return(
            <div className='container-wrapper'>
                <div className='sidenav-container'>
                    <SideNav />
                </div>
                <div className='container'>
                    <div className='header-container'>
                        <Header />
                    </div>
                    <div className='main-content'>

                    </div>
                    <div className='footer-container'>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}