import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import TopNav from './Navigation/TopNavigationComponent'
import Footer from './Footer/FooterComponent'

class Main extends Component {
    state = {
        myState: ""
    }

    render () {
        return (
            <>
                <TopNav />
                <div className="MainPage">This is the main page</div>
                <Footer />
            </>
        )
    }

}

export default Main;