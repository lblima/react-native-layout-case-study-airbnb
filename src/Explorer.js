//import liraries
import React, { Component } from 'react';
import { View, Text, SafeAreaView, 
        TextInput, Platform, StatusBar, 
        ScrollView, Dimensions, Image,
        Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './Category';
import HomeAround from './HomeAround';
import Tag from './Tag';

const { width } = Dimensions.get('window');

// create a component
class Explorer extends Component {
    componentWillMount() {
        // this.scrollY = Animated.Value(0);

        this.startHeaderHight = 80;
        this.endHeaderHight = 50;
        if (Platform.OS === 'android') {
            this.startHeaderHight = 100 + StatusBar.currentHeight;
            this.endHeaderHight = 70 + StatusBar.currentHeight;
        }

        // this.animatedHeaderHight = this.scrollY.interpolate({
        //     inputRange: [0, 50],
        //     outputRange: [this.startHeaderHight, this.endHeaderHight],
        //     extrapolate: 'clamp'
        // });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View 
                        style={{ height: this.startHeaderHight, 
                                 borderBottomWidth: 1,
                                 backgroundColor: 'white',
                                 borderBottomColor: '#dddddd' }}
                    >
                        <View 
                            style={{ 
                                    flexDirection: 'row', 
                                    alignItems: 'center',
                                    padding: 10, 
                                    backgroundColor: 'white', 
                                    marginHorizontal: 10,
                                    shadowOffset: { height: 0, width: 0 },
                                    shadowColor: 'black',
                                    shadowOpacity: 0.2,
                                    elevation: 1,
                                    marginTop: Platform.OS === 'android' ? 30 : null
                                 }}
                        >
                            <Icon name='ios-search' size={20} style={{ marginRight: 10 }} />
                            <TextInput 
                                underlineColorAndroid='transparent'
                                placeholder='Try Winnipeg'
                                placeholderTextColor='grey'
                                style={{
                                    flex: 1, 
                                    fontWeight: '700', 
                                    backgroundColor: 'white' }}
                            />
                        </View>
                        <Animated.View 
                            style={{ 
                                flexDirection: 'row',
                                marginHorizontal: 20,
                                marginTop: 5                               
                            }}
                        >
                            <Tag name='Guests' />
                            <Tag name='Dates' />
                        </Animated.View>
                    </View>

                    <ScrollView 
                        scrollEventThrottle={16}
                        // onScroll={Animated.event(
                        //     [
                        //         {
                        //             nativeEvent: { contentOffSet: { y: this.scrollY } }
                        //         }
                        //     ]
                        // )}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                What can we help you find, Leo?
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                     horizontal
                                     showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/adventure-calm-clouds-414171.jpg')} name='Adventure' /> 
                                    <Category imageUri={require('../assets/architecture-blue-sky-cliff-248771.jpg')} name='Architecture' /> 
                                    <Category imageUri={require('../assets/cascade-clouds-cool-wallpaper-210186.jpg')} name='Cascade' />
                                </ScrollView>
                            </View>

                             <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Introducing AirBnb Plus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of homes verified for quality & confort 
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image 
                                        style={{ 
                                                flex: 1, 
                                                height: null, 
                                                width: null, 
                                                resizeMode: 'cover',
                                                borderRadius: 5, 
                                                borderWidth: 1, 
                                                borderColor: 'grey' }}                                        
                                        source={require('../assets/architecture-beautiful-bloom-130851.jpg')} 
                                    />
                                </View>
                            </View>
                        </View>    

                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, paddingHorizontal: 20, fontWeight: '700' }}>
                                Homes around the world
                            </Text>
                            <View 
                                style={{ 
                                    marginTop: 20, 
                                    paddingHorizontal: 20, 
                                    flexDirection: 'row', 
                                    flexWrap: 'wrap', 
                                    justifyContent: 'space-between' }}
                            >
                                <HomeAround 
                                    width={width / 2}
                                    name='the Cozy Place'
                                    type='PRIVATE ROOM - 2 BEDS'
                                    price={82.00}
                                    rating={4}  
                                />
                                <HomeAround 
                                    width={width / 2}
                                    name='the Great House'
                                    type='SINGLE ROOM - 1 BED'
                                    price={55.00}
                                    rating={3}  
                                />
                                <HomeAround 
                                    width={width / 2}
                                    name='the Amazing Place'
                                    type='DOUBLE ROOM - 3 BEDS'
                                    price={90.00}
                                    rating={5}  
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

//make this component available to the app
export default Explorer;
