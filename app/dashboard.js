import React, { Component, PropTypes } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#bb0000',
            },
            welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
                color: '#ffffff',
            },
        });

        return (
            <View style={styles.container}>
                <Text
                style={styles.welcome}
                onPress={() => Actions.itemDetail()}
                >
                    Dashboard Screen
                </Text>
            </View>
        )
    }
}

Dashboard.propTypes = propTypes

Dashboard.defaultProps = defaultProps

export default Dashboard
