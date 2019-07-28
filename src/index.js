import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import './index.styl'

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"

ReactDOM.render(
    <Router basename="/">
        <header>
            <nav>
                <Link to="/">Home</Link> <Link to="/about">About</Link>
            </nav>
        </header>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about/:target?" component={AboutPage} />
        </Switch>
    </Router>,
    document.getElementById('app')
)
