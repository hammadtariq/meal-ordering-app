import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import ItemDetail from './itemDetail';
import Dashboard from './dashboard';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="dashboard"
                        component={Dashboard}
                        title="Dashboard"
                        initial
                    />
                    <Scene
                        key="itemDetail"
                        component={ItemDetail}
                        title="ItemDetail"
                    />
                </Scene>
            </Router>
        )
    }
}

export default App
