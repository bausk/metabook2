import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-router'

export default class Root extends Component {
    static propTypes = {
        store: React.PropTypes.object,
        history: React.PropTypes.object,
        routes: React.PropTypes.func
    }

    authCheck(nextState, replace, callback) {
        let {store} = this.props
        let {loggedIn} = store.getState().auth
        let authPath = '/auth'
        if (!loggedIn) {
            replace(authPath)
        }

        callback()
    }

    render() {
        const {store, history, routes} = this.props
        // key={Math.random()} = hack for HMR from https://github.com/webpack/webpack-dev-server/issues/395
        return (
            <Provider store={store} key={Math.random()}>
                <Router history={history} key={Math.random()}>
                    {routes(::this.authCheck)}
                </Router>
            </Provider>
        );
    }
}
