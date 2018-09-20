import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ViewCustomer from '../ui/ViewCustomer'


class NewsPage extends Component {

    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            dataSource: ds.cloneWithRows(this.props.articles)
        }
    }



    renderRow(dataSource) {
        return (
            <ViewCustomer
                image = { dataSource.urlToImage }
                title = { dataSource.title }
                description = { dataSource.description }
                url = { dataSource.url }
            />
        )
    }

    render() {
        return (
            <ListView
            enableEmptySections
            dataSource = {this.state.dataSource}
            renderRow = {this.renderRow}
            />
        )
    }
}

mapStateToProps = state => {
    const articles = Object.values(state);
    return {
        articles: articles[0].news,
        loading: state.AppReducer.loading
    }
}

export default connect(mapStateToProps, null)(NewsPage)