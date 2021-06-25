import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {  styles, styles1 } from './styles/styles.js';
import { colors1 } from './styles/Colors';
// import { createAppContainer } from 'react-navigation',
// import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
import Iconm from 'react-native-vector-icons/MaterialIcons';
import Icone from 'react-native-vector-icons/Entypo';
import Icono from 'react-native-vector-icons/Octicons';



const myIcon = <Icon name="pencil-square-o" size={30} color="lightgreen" />;
const myIcon1 = <Icona name="arrowleft" size={30} color="white" />;
const myIcon2 = <Icona name="home" size={30} color="black" />;
const myIcon3 = <Iconfa name="scroll" size={22} color="rgb(41,127,238)" />;
const myIcon4 = <Iconi name="medal" size={25} color="orange" />;
const myIcon5 = <Icona name="bells" size={25} color="grey" />;
const myIcon6 = <Iconi name="document-text" size={25} color="lightblue" />;
const myIcon7 = <Icon name="trophy" size={30} color="red" />;
const myIcon8 = <Iconf name = "target" size = {30} color = "gray" />
const myIcon9 = <Icon name = "gear" size = {30} color = "black" />
const myIcon10 = <Iconm name= "store-mall-directory" size={25} color="black" />;
const myIcon11 = <Icone name = "user" size = {25}  color="rgb(121,132,211)" />;



export default class App extends React.Component {
        constructor(props){
                super(props);
                        this.state = {
                                 desc: true,
                        };
                
        }
        render() {
                return (
                        <View style={[styles1.flexOne,  styles1.bgGreyLight]}>
                                <View style={{flex:10, marginLeft:15, marginTop:15, marginRight:15, }}>
                                {/* Header_Block */}
                                <View style={[styles1.flexHalf,  styles1.flexEndHorizontal]}>{myIcon9}</View>
                               
                                {/* Image_Block */}
                                <View style={[styles1.flexTwo, styles1.row,]}>
                                        <View style={[styles1.flexOne, ]}></View>
                                        <View style={[styles1.flexOneAndHalf, styles1.allCenter, ]}>
                                                <Image 
                                                        source={require('./images/elon.jpg')}
                                                        style={{width:110, height:110, borderRadius:55, borderWidth:12,borderColor:"white"}}
                                                />
                                        </View>
                                        <View style={[styles1.flexOne, ]}></View>
                                </View>
                               
                                {/* Name_Block */}
                                <View style={[styles1.flexOne, styles1.allCenter, ]}>
                                        <Text style={{fontSize:23, fontWeight:"bold" }}>Antonio Perez</Text>               
                                </View>
                               
                                {/* Number_Block */}
                                <View style={[styles1.flexQuarterToOne, styles1.selfCenter, ]}>
                                        <Text style={{fontSize:18, fontWeight:"800", color:"black" }}>134,679 XP</Text>
                                </View>
                               
                                {/* Empty_Row_Block */}
                                <View style={[styles1.flexHalf, ]}></View>
                               
                                {/* Selector_Block */}
                                <View style={[styles1.flexOne, styles1.bgWhite, styles1.margin6, styles1.row, styles1.radius16, ]}>
                                        <TouchableOpacity 
                                                onPress={() => this.setState({desc:true})}
                                                style={[styles1.flexOne, styles1.allCenter, ]}>
                                                        <Text style={{fontSize:17, fontWeight:'bold', }}>BADGES</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                                onPress={() => this.setState({desc:false})}
                                                style={[styles1.flexOne, styles1.allCenter, ]}>
                                                        <Text style={{ fontSize:17,}}>FRIENDS</Text>
                                        </TouchableOpacity>
                                        <View style={[styles1.flexOne, styles1.allCenter, ]}>
                                                <Text style={{fontSize:17, }}>SCORES</Text>
                                        </View>
                                </View>
                               
                                {/* Bottom_Content_Block */}
                                {this.state.desc ? 
                                <View style={[styles1.flexFive, styles1.bgWhite, styles1.marginTop8, styles1.marginLeft8, styles1.marginRight8, styles1.borderTopRadius40, ]}>
                                        
                                        <View style={[styles1.flexOne, styles1.row, styles1.margin6, ]}>
                                                <View style={[styles1.flexOneAndHalf, styles1.allCenter, ]}>{myIcon4}</View>
                                                <View style={[ styles1.flexFive,  ]}>
                                                        <View style={[ styles1.flexOne, ]}>
                                                                <Text style={{ fontSize:19, fontWeight:'bold', }}>Perfectionist</Text>
                                                        </View>
                                                        <View style={[ styles1.flexHalf,]}>
                                                                <Text style={{ fontSize:12, color:"gray", fontWeight:"800" }}>Finish all lessons of a chapter</Text>
                                                        </View>
                                                </View>
                                        </View>
                                        
                                        <View style={[styles1.flexOne, styles1.row, styles1.margin6, ]}>
                                                <View style={[styles1.flexOneAndHalf, styles1.allCenter, ]}>{myIcon}</View>
                                                <View style={[ styles1.flexFive, ]}>
                                                        <View style={[ styles1.flexOne, ]}>
                                                                <Text style={{ fontSize:19, fontWeight:'bold', }}>Achiever</Text>
                                                        </View>
                                                        <View style={[ styles1.flexHalf,]}>
                                                                <Text style={{ fontSize:12, color:"gray", fontWeight:"800" }}>Compute an exercise</Text>
                                                        </View>
                                                </View>
                                        </View>
                                        
                                        <View style={[styles1.flexOne, styles1.row, styles1.margin6, ]}>
                                                <View style={[styles1.flexOneAndHalf, styles1.allCenter, ]}>{myIcon6}</View>
                                                <View style={[ styles1.flexFive, ]}>
                                                        <View style={[ styles1.flexOne,]}>
                                                                <Text style={{ fontSize:19, fontWeight:'bold', }}>Scholar</Text>
                                                        </View>
                                                        <View style={[ styles1.flexHalf, ]}>
                                                                <Text style={{ fontSize:12, color:"gray", fontWeight:"800" }}>Study two courses</Text>
                                                        </View>
                                                </View>
                                        </View>
                                        
                                        <View style={[styles1.flexOne, styles1.row, styles1.margin6,]}>
                                                <View style={[styles1.flexOneAndHalf, styles1.allCenter, ]}>{myIcon7}</View>
                                                <View style={[ styles1.flexFive, ]}>
                                                        <View style={[ styles1.flexOne,]}>
                                                                <Text style={{ fontSize:19, fontWeight:'bold', }}>Champion</Text>
                                                        </View>
                                                        <View style={[ styles1.flexHalf, ]}>
                                                                <Text style={{ fontSize:12, color:"gray", fontWeight:"800" }}>Finish # 1 in Scoreboard</Text>
                                                        </View>
                                                </View>
                                        </View>
                                        
                                        <View style={[styles1.flexOne, styles1.row, styles1.margin6, ]}>
                                                <View style={[styles1.flexOneAndHalf, styles1.allCenter, ]}>{myIcon8}</View>
                                                <View style={[ styles1.flexFive, ]}>
                                                        <View style={[ styles1.flexOne, ]}>
                                                                <Text style={{ fontSize:19, fontWeight:'bold', }}>Focused</Text>
                                                        </View>
                                                        <View style={[ styles1.flexHalf,]}>
                                                                <Text style={{ fontSize:12, color:"gray", fontWeight:"800" }}>Study every day for 30 days</Text>
                                                        </View>
                                                </View>
                                        </View>
                                </View> :
                                
                                <View style={[styles1.flexFive, styles1.bgWhite, styles1.marginTop8, styles1.marginLeft8, styles1.marginRight8, styles1.borderTopRadius40, ]}>
                                        
                                        <View style={[styles1.flexOne, styles1.row, styles1.margin6, ]}>
                                                <View style={[styles1.flexOneAndHalf, styles1.allCenter,]}>{myIcon4}</View>
                                                <View style={[ styles1.flexFive,  ]}>
                                                        <View style={[ styles1.flexOne, ]}>
                                                                <Text style={{ fontSize:19, fontWeight:'bold', }}>Nell Hudson</Text>
                                                        </View>
                                                        <View style={[ styles1.flexHalf, ]}>
                                                                <Text style={{ fontSize:12, color:"gray", fontWeight:"800" }}>2,49XP</Text>
                                                        </View>
                                                </View>
                                        </View>
                                        
                                        <View style={[styles1.flexOne, styles1.row, styles1.margin6, ]}>
                                                <View style={[styles1.flexOneAndHalf, styles1.allCenter, ]}>{myIcon}</View>
                                                <View style={[ styles1.flexFive, ]}>
                                                        <View style={[ styles1.flexOne, ]}>
                                                                <Text style={{ fontSize:19, fontWeight:'bold', }}>Cory Briggs</Text>
                                                        </View>
                                                        <View style={[ styles1.flexHalf, ]}>
                                                                <Text style={{ fontSize:12, color:"gray", fontWeight:"800" }}>2,174 XP</Text>
                                                        </View>
                                                </View>
                                        </View>
                                        
                                        <View style={[styles1.flexOne, styles1.row, styles1.margin6, ]}>
                                                <View style={[styles1.flexOneAndHalf, styles1.allCenter, ]}>{myIcon6}</View>
                                                <View style={[ styles1.flexFive, ]}>
                                                        <View style={[ styles1.flexOne, ]}>
                                                                <Text style={{ fontSize:19, fontWeight:'bold', }}>Ralph Torres</Text>
                                                        </View>
                                                        <View style={[ styles1.flexHalf, ]}>
                                                                <Text style={{ fontSize:12, color:"gray", fontWeight:"800" }}>1,009 XP</Text>
                                                        </View>
                                                </View>
                                        </View>
                                        
                                        <View style={[styles1.flexOne, styles1.row, styles1.margin6, ]}>
                                                <View style={[styles1.flexOneAndHalf, styles1.allCenter, ]}>{myIcon7}</View>
                                                <View style={[ styles1.flexFive, ]}>
                                                        <View style={[ styles1.flexOne, ]}>
                                                                <Text style={{ fontSize:19, fontWeight:'bold', }}>Dora Hudson</Text>
                                                        </View>
                                                        <View style={[ styles1.flexHalf, ]}>
                                                                <Text style={{ fontSize:12, color:"gray", fontWeight:"800" }}>1,000 XP</Text>
                                                        </View>
                                                </View>
                                        </View>
                                        
                                        <View style={[styles1.flexOne, styles1.row, styles1.margin6, ]}>
                                                <View style={[styles1.flexOneAndHalf, styles1.allCenter, ]}>{myIcon8}</View>
                                                <View style={[ styles1.flexFive, ]}>
                                                        <View style={[ styles1.flexOne, ]}>
                                                                <Text style={{ fontSize:19, fontWeight:'bold', }}>Harriet Simon</Text>
                                                        </View>
                                                        <View style={[ styles1.flexHalf, ]}>
                                                                <Text style={{ fontSize:12, color:"gray", fontWeight:"800" }}>945 XP</Text>
                                                        </View>
                                                </View>
                                        </View>
                                </View>
                                
                                }
                               
                                </View>
                                {/* Icon_Block */}
                                <View style={[styles1.flexOneAndQuarter, styles1.bgWhite, styles1.row, styles1.borderTopRadius40, ]}>
                                        <View style={[styles1.flexOne,]}>
                                                <View style={[styles1.flexOne, styles1.allCenter,]}>{myIcon2}</View>
                                                <View style={[styles1.flexQuarterToOne, styles1.allCenter, ]}>
                                                        <Text style={{fontSize:15, fontWeight:"900"}}>Home</Text>
                                                </View>
                                        </View>
                                        <View style={[styles1.flexOne,]}>
                                                <View style={[styles1.flexOne, styles1.allCenter, ]}>{myIcon10}</View>
                                                <View style={[styles1.flexQuarterToOne, styles1.allCenter, ]}>
                                                        <Text style={{fontSize:15, fontWeight:"900"}}>Courses</Text>
                                                </View>
                                        </View>
                                        <View style={[styles1.flexOne, ]}>
                                                <View style={[styles1.flexOne, styles1.allCenter, ]}>{myIcon11}</View>
                                                <View style={[styles1.flexQuarterToOne, styles1.allCenter, ]}>
                                                        <Text style={{fontSize:15, fontWeight:"bold", color:"rgb(121,132,211)"}}>Profile</Text>
                                                </View>
                                        </View>
                                </View>
                        </View>
                );
        }
}

// const styles = StyleSheet.create({
//           container: {
//                   flex:1,
//                   backgroundColor:"#fff",
//           },
// });