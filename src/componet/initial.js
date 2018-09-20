import React, { Component } from 'react';
import { ListView, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { mashable, nationalGeograph, techCrunch, theNewYorkTimes, ign, espn } from '../img/index';
import ButtomCustomer from '../ui/ButtomCustomer';

class Initial extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            dataSource: ds.cloneWithRows(Object.values({ mashable, nationalGeograph, techCrunch, theNewYorkTimes, ign, espn }))
        }
    }

    _onLoading = () => {
        if(this.props.loading) {
            return (
                <ActivityIndicator  size='large' style = {{flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
            )
        } else {
            return (
                <View style = {{flex: 1}}>
                    <ListView
                        dataSource = {this.state.dataSource}
                        renderRow = { this.renderRow }
                    />
                </View>
            )
        }
    }

    renderRow(dataSource) {
        return(
            <ButtomCustomer
                source = { dataSource.name }
                image = { dataSource.img }
            />
        )
    }

    render () {
        return (
            this._onLoading()
        )
    }
}

mapStateToProps = (state) => (
    { loading: state.AppReducer.loading }
)

export default connect(mapStateToProps, null)(Initial)

