//import liraries
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// create a component
class MyClass extends Component {
    render() {
        return (
            <View 
                style={{ 
                height: 130, 
                width: 130, 
                marginLeft: 20,
                borderColor: '#dddddd',
                borderWidth: 0.5 }}
            >
                <View style={{ flex: 2 }}>
                    <Image 
                            source={this.props.imageUri} 
                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }} 
                    />
                </View>
                
                <View style={{ flex: 2, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>
                        {this.props.name}
                    </Text>
                </View>
            </View>
        );
    }
}

//make this component available to the app
export default MyClass;
