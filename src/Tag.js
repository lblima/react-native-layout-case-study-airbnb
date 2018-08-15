//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// create a component
class Tag extends Component {
    render() {
        return (
            <View 
                style={{ 
                minWidth: 20, 
                minHeight: 40, 
                padding: 5, 
                backgroundColor: 'white', 
                borderColor: '#dddddd',
                borderWidth: 1,
                borderRadius: 2,
                marginRight: 5 }}
            >
                <Text style={{ fontWeight: '700', fontSize: 10 }}>
                    {this.props.name}
                </Text>
            </View>
        );
    }
}

//make this component available to the app
export default Tag;
