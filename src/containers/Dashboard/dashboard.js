import React, { Component } from "react";
import {Header} from "../../components/Header/header";
import {Footer} from "../../components/Footer/footer";
import {SideNav} from "../../components/SideNav/sidenav";
import {MainContent} from "../../components/MainContent/mainContent";

import "./dashboard.css";
export class Dashboard extends Component{
    state = {
        content : 'Default dashboard',
        footer: 'Footer Text',
        header: 'Traverse My History'
    }
    render(){
        return(
            <div className='container-wrapper'>
                <div className='sidenav-container'>
                    <SideNav />
                </div>
                <div className='container'>
                    <div className='header-container'>
                        <Header content={this.state.header}/>
                    </div>
                    <div className='main-content'>
                        <MainContent content={this.state.content} />
                    </div>
                    <div className='footer-container'>
                        <Footer content={this.state.footer}/>
                    </div>
                </div>
            </div>
        );
    }
}