import React from 'react'
import { Switch, Route, Link } from "react-router-dom"

export default class AboutPage extends React.Component {

    render() {
        const { history, location, match }= this.props;

        return (
            <div>
                <div>Go to <Link to='/about/me'>/about/me</Link> or <Link to='/about/you'>/about/you</Link></div>
                <Switch>
                    <Route path={`${match.path}/me`} component={() => ('about me')} />
                    <Route path={`${match.path}/you`} component={() => ('about you')} />
                </Switch>
            </div>
        )
    }

}
