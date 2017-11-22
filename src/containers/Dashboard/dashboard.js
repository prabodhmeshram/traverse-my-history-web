import React, { Component } from "react";
import {Header} from "../../components/Header/header";
import {Footer} from "../../components/Footer/footer";
export class Dashboard extends Component{

    render(){
        return(
            <div>
                <header>
                    <Header />

                    <Footer />
                </header>
            </div>
        );
    }
}