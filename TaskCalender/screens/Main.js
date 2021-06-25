import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, TextInput, KeyboardAvoidingView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
import Iconm from 'react-native-vector-icons/MaterialIcons';
import Iconen from 'react-native-vector-icons/Entypo';
import Icono from 'react-native-vector-icons/Octicons';
// import Iconfb from 'react-native-vector-icons/FontAwesome5Brands';


import { Card } from 'react-native-elements';

import { styles } from "../styles/styles";
import  Colors  from "../styles/Colors"; 

const myIcon = <Icon name="google" size={20} color="rgb(255,152,144)" />;
const myIcon6 = <Iconm name="facebook" size={20} color="rgb(36,107,253)" />;
const myIcon1 = <Iconf name="mail" size={20} color="white" />;
const myIcon2 = <Icona name="facebook-square" size={25} color="rgb(36,107,253)" />;
const myIcon3 = <Iconfa name="scroll" size={22} color="gray" />;
const myIcon4 = <Iconi name="chatbubble-ellipses-outline" size={25} color="gray" />;
const myIcon5 = <Icona name="bells" size={25} color="grey" />;
// const myIcon7 = <Iconfb name="facebook" size={25} color="grey" />;
const myIcon8 = <Iconen name="mail" size={20} color="white" />;
const myIcon12 = <Icono name = "primitive-dot" size = {15}  color="rgb(121,132,211)" />;
const myIcon13 = <Icono name = "primitive-dot" size = {15}  color="#3A753C" />;
const myIcon14 = <Icono name = "primitive-dot" size = {15}  color="grey" />;


const data = [
    {
        Image:("../images/bedroom.jpg"),
        // title:"Task,",
    },

    {
        Image:("../images/bedroom.jpg"),
        // title2:"Calender,",
    },

    {
        Image:("../images/bedroom.jpg"),
        // title3:"Chat,",
    },
];


export default class Main extends React.Component {

    constructor(props){
                 super(props);
                this.state = {
                data:data
                };
    }

        render() {
            // console.log("properties", this.props.navigation.navigate('Dashboard'))
                return (

                                <View style={[styles.flexOne, styles.bgBlack]}>
                               
                                            <View style={[styles.flexFive, ]}>
                                                        <FlatList 
                                                                    horizontal
                                                                    data={this.state.data}
                                                                    renderItem={({item:rowData}) => {
                                                                    console.log("Image", rowData.Image, rowData);
                                                                
                                                                    return(
                                                                                <View style={[ ]}>
                                                                                
                                                                                {/* Image_Block */}
                                                                                
                                                                                <View style={[ styles.allCenter, ]}>
                                                                                
                                                                                        <Image
                                                                
                                                                                            style={{width:400, height:350, }}
                                                                                            source={require("../images/room.jpg")}
                                                                                        />
                                                                                </View>
                                
                                                                                <View style={[styles.flexTwoAndHalf, ]}>
                                                                                         <Text style={[styles.fontSize40,styles.fontWeightBold, styles.marginLeft32, styles.white]}>
                                                                                               Task,
                                                                                                {/* {rowData.title} */}
                                                                                        </Text>
                                                               
                                                                                         <Text style={[styles.fontSize40,styles.fontWeightBold, styles.marginLeft32, styles.white]}>
                                                                                                Calender,
                                                                                                {/* {rowData.title2} */}
                                                                                        </Text>
                                                                
                                                                                        <Text style={[styles.fontSize40,styles.fontWeightBold, styles.marginLeft32, styles.white]}>
                                                                                                Chat
                                                                                                {/* {rowData.title3} */}
                                                                                        </Text>
                                                                                </View>
                                                                     </View>
                                                                    )
                                                                 }
                                                            }
                                                />
                                                 </View>

                                 {/* <View style={[styles.flexFive, styles.border]}></View> */}
                                 {/* Task_Block */}
                                 {/* <View style={[styles.flexTwo, styles.border]}>
                                         <Text style={[styles.fontSize32,styles.fontWeightBold, styles.marginLeft32, styles.white]}>Task,</Text>
                                         <Text style={[styles.fontSize32,styles.fontWeightBold, styles.marginLeft32, styles.white]}>Calendar,</Text>
                                         <Text style={[styles.fontSize32,styles.fontWeightBold, styles.marginLeft32, styles.white]}>Chat</Text>
                                 </View> */}
                                  
                                                    <View style={[styles.flexTwo]}>
                                 
                                                    {/* Swiper_Block */}
                                                    
                                                        <View style={[styles.flexHalf, styles.row, styles.marginLeft32, styles.centerHorizontal, ]}>
                                                            
                                                            <Text >    {myIcon12}    </Text>
                                                            <Text style={[]}>    {myIcon14}    </Text>
                                                            <Text style={[]}>    {myIcon14}    </Text>
                                                        </View>
                                               
                                
                               
                                                     {/* BlueButton_block */}
                                                        
                                                        <TouchableOpacity 
                                                                    onPress={()=> this.props.navigation.navigate('Dashboard')}
                                                                    style={[styles.flexQuarterToOne, styles.allCenter, styles.marginBottom8, styles.bgBlue, styles.marginLeft32, styles.marginRight32, styles.radius32, ]}>
                                                                            <Text style={[styles.white, styles.fontWeightBold, styles.fontSize19]}>{myIcon8}  Continue with Email</Text>
                                                        </TouchableOpacity>
                               
                                                      {/* TwoButton_Block */}
                                 
                                                        <View style={[styles.flexQuarterToOne, styles.marginTop4, styles.marginLeft32, styles.marginRight32, styles.row, ]}>
                                                            
                                                             <TouchableOpacity style={[styles.flexOne, styles.allCenter, styles.marginRight16, styles.radius32, styles.borderColor1,  ]}>{myIcon}</TouchableOpacity>
                                                             <TouchableOpacity style={[styles.flexOne, styles.allCenter, styles.radius32, styles.borderColor1,  ]}>{myIcon2}</TouchableOpacity>
                                                        
                                                        </View>
                               
                                                        {/* TermsandCondition_Block */}
                                
                                                        <View style={[styles.flexQuarterToOne, styles.marginTop10, styles.centerHorizontal, ]}>
                                                                <Text style={[styles.greyDark]}>By continuing you agree Taskers's Terms of</Text>
                                                                <Text style={[styles.greyDark]}>Services & Privacy Policy</Text>
                                                        </View>
                                 
                                                </View>

                {/* <TouchableOpacity
                   onPress={()=>  this.props.navigation.navigate('Dashboard')
                   }
                >
                    <Text>main</Text>
                </TouchableOpacity> */}
                      </View>
                );
        }
}



