import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { requestNews } from '../actions/appActions'

class ButtomCustomer extends Component {


    render() {
        return (
            <TouchableHighlight
                underlayColor = {'#FFF'}
                style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', margin:5 }}
                onPress = { () => this.props.requestNews( this.props.source ) }
            >
                <Image
                    source = { this.props.image }
                />
            </TouchableHighlight>
        )
    }
}


export default connect(null, { requestNews })(ButtomCustomer)