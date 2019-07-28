import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import './index.styl'

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"

ReactDOM.render(
    <Router basename="/">
    </Router>,
    document.getElementById('app')
)
