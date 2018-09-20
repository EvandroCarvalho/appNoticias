import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Linking } from 'react-native';

export default class ViewCustomer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imagem : Image.prefetch(this.props.image)
        }
    }

    render (){
        return (
            <View style = {styles.viewComponent} >
                <Image
                    style = {styles.viewImage}
                    source = {{uri: this.props.image, cache: 'force-cache'}}
                />
                <View style = {styles.viewText}>
                    <Text style = {styles.textTitle} >{this.props.title}</Text>
                    <Text style = {styles.textDescription} >{this.props.description}</Text>
                    <Text style = {{color: 'blue', margin: 5}} onPress = { () => Linking.openURL(this.props.url) } >Read more</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    viewComponent: {
        flex: 1,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#002939',
        backgroundColor: '#FFF',
        margin: 5,
        padding: 5,
    },

    viewImage: {
        width: '100%', 
        height: 150, 
        margin: 5
    },

    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5,

    },

    textDescription: {
        fontSize: 15,
        margin: 5,

    },
    viewText: {
        flex: 1
    }
})