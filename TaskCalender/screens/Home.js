import React from 'react';
import { StyleSheet, Text, Button, View, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { VictoryBar, VictoryChart, VictoryTheme, sampleData } from "victory-native";
import { ProjectScreen } from "./Project";
// import { HomeScreen } from "./Home";


import { createBottomTabNavigator , BottomTabBarOptions} from '@react-navigation/bottom-tabs';

import { styles } from '../styles/styles';
import  Colors  from '../styles/Colors';

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
import Icone from 'react-native-vector-icons/Entypo';
import Icono from 'react-native-vector-icons/Octicons';
import Iconft from 'react-native-vector-icons/Fontisto';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SLIcons from 'react-native-vector-icons/SimpleLineIcons';



const myIcon = <Icon name="search" size={30} color="white" />;
const myIcon1 = <Icona name="arrowleft" size={30} color="white" />;
const myIcon2 = <Icona name="heart" size={25} color="rgb(255,98,67)" />;
const myIcon3 = <Iconfa name="pizza-slice" size={17} color = "rgb(176,142,64)" />;
const myIcon4 = <Iconi name="sunny-sharp" size={25} color="yellow" />;
const myIcon5 = <Icona name="message1" size={25} color="white" />;
const myIcon6 = <Icon name="angle-down" size={23} color="black" />;
const myIcon7 = <Icon name="angle-left" size={35} color="black"  onPress={() => props.navigation.openDrawer()} />;
const myIcon8 = <Icone name="hand" size={35} color="rgb(176,142,64)" />;
const myIcon9 = <Icono name="primitive-dot" size={23} color="black" />;
const myIcon10 = <Iconf name="hexagon" size={30} color="blue" />;
const myIcon11 = <Iconft name="hexo" size={50} color="#008FFB" />;





 class Home extends React.Component {
            render() {
                        return(
                            
                            <View style={{flex:1, backgroundColor: "rgb(32,26,45)"}}>
                            <View style={[styles.flexOne,styles.marginLeft16, styles.marginTop18, styles.marginRight16,]}> 
                            
                            
                                     {/* headerDashboard_Block */}
                                    <View style={[styles.flexOneAndQuarter, styles.row, ]} >
                                            <View style={[styles.flexFour, styles.centerVertical, ]}>
                                                    <Text style={[styles.white, styles.fontWeightBold, styles.fontSize23]}>Dashboard</Text>
                                            </View>
                                            <View style={[styles.flexQuarterToOne, styles.allCenter, styles.allCenter, ]}>{myIcon5}</View>
                                            <View style={[styles.flexOneAndHalf, styles.flexEndHorizontal, styles.flexEndVertical, ]}>
                                                    <Image         
                                                            style={{width:60, height:60, borderRadius:30 }}
                                                            source={require("../images/elon.jpg")}
                                                    />
                                            </View>
                                    </View>
                            
                                     {/* Hello_block */}
                                    <View style={[styles.flexOne, styles.centerVertical, ]} >
                                            <Text style={[styles.fontSize36, styles.paddingTop4, styles.white, styles.fontWeightBold]}>Hello,</Text>
                                    </View>
                            
                                     {/* Derek_Block */}
                                    <View style={[styles.flexOne, styles.marginBottom10, ]} >
                                            <Text style ={[styles.flexOneAndQuarter, styles.fontSize36, styles.white, styles.fontWeightBold]}>Derek Doyle {myIcon8}</Text>
                                    </View>
                            
                                    {/* Two_Boxes_Block */}
                                    <View style={[styles.flexOne, styles.row, styles.marginBottom14, styles.marginTop8, ]} >
                                            <TouchableOpacity style={[styles.flexOne, styles.allCenter,]}>
                                                    <Text style={[styles.fontSize15, styles.greyDark]}>Overview</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[styles.flexOneAndHalf, styles.allCenter, styles.bgBlue, styles.marginBottom8, styles.marginLeft8, styles.marginRight10, styles.marginTop8, styles.radius28,]}>
                                                    <Text style={[styles.white, styles.fontSize15, styles.fontWeightBold]}>Productivity</Text>
                                            </TouchableOpacity>
                                            <View style={[styles.flexOneAndHalf, ]}></View>
                                    </View>
                            
                                    {/* Box1_Block */}
                                    <View style={[styles.flexFour, styles.marginBottom16, styles.radius18, styles.row, styles.bgcardGray, ]} >
                                            <View style = {[styles.flexOneAndHalf, styles.Margin10, styles.marginLeft16 ]}>
                                                    <View style = {[styles.flexOne, styles.marginTop8]}>
                                                            <Text style = {[styles.fontSize15, styles.centerVertical, styles.greyDark,]}>Daily Goal</Text>
                                                    </View>
                                                    <View style = {[styles.flexOne, styles.row, ]}>
                                                            <View style = {[styles.flexQuarterToOne, styles.radius28, styles.marginTop4, styles.marginBottom2, styles.allCenter, styles.bgcardGreeen, ]}>
                                                                    <Text style = {[styles.fontSize17, styles.white, styles.fontWeightBold]}>3/5</Text>
                                                            </View>
                                                            <View style = {[styles.flexQuarterToOne, styles.allCenter, ]}>
                                                                    <Text style = {[styles.fontWeightBold, styles.fontSize17, styles.white ]} >tasks</Text>
                                                            </View>
                                                            <View style = {[styles.flexOne, ]}></View>
                                                    </View>
                                                    <View style = {[styles.flexOneAndHalf, ]}>
                                                            <Text style = {[styles.fontSize15, styles.greyDark, styles.fontWeight600, styles.marginTop4]}>You marked 3/5 tasks</Text>
                                                            <Text style = {[styles.fontSize15, styles.greyDark, styles.fontWeight600, styles.marginTop4]}>are done {myIcon3}</Text>
                                                    </View>
                                                    
                                                    <View style = {[styles.flexOneAndHalf, styles.row,]}>
                                                            <View style = {[styles.flexQuarterToOne, styles.radius28, styles.allCenter, styles.marginTop4, styles.marginBottom4, styles.bgcardPink, ]}>
                                                                    <Text style =  {[styles.fontSize17, styles.white, styles.fontWeightBold]}>All Task</Text>
                                                            </View>
                                                            <View style = {[styles.flexHalf, ]}></View>
                                                    </View>
                                            </View>
                                            <View style = {[styles.flexOne, ]}>
                                                            <View style = {[styles.flexOne, styles.Margin20,styles.height95, styles.width80, styles.radius50,  styles.borderColorGreen, styles.border10,  styles.allCenter, ]}>
                                                                    <Text style = {[styles.fontSize28]}> {myIcon11} </Text>
                                                                    {/* <Image 
                                                                             style={{width:40, height:40, borderRadius:20, }}
                                                                             source={require("../images/hexagon.png")} 
                                                                    /> */}
                                                                    
                                                            </View>
                                                            <View style = {[styles.flexHalf, ]}></View>
                                            </View>
                                    </View>
                            
                                    {/* Box2_Block */}
                                    <View style={[styles.flexFour, styles.marginBottom10, styles.radius18, styles.bgcardGray, ]} >
                                            <View style= {[styles.flexTwoAndHalf, styles.marginTop10, styles.marginLeft8, styles.centerVertical,]}>
                                                    <Text style = {[styles.fontSize15, styles.greyDark, styles.marginLeft10 ]}>Completed in the last 7 days</Text>
                                            </View>
                                            {/* Bar_Graph */}
                                            <View style= {[styles.flexFive, styles.allCenter, styles.Margin20,]}>
                                                    <VictoryChart
                                                            theme={VictoryTheme.material}
                                                            domainPadding={50}
                                                            padding={{left:50, top:140, bottom:140,  right:50, }}
                                                    >
                                                             <VictoryBar
                                                                     cornerRadius={{ top: ({ datum }) => datum.x * 3 }}
                                                                    style={{ data: { fill: "#c43a31" } }}
                                                                    data={sampleData}
                                                            />
                                                     </VictoryChart>
                                            </View>
                                            <View style= {[styles.flexTwoAndHalf, styles.row,]}>
                                                    <View style = {[styles.flexOne, styles.allCenter,  ]}>
                                                            <Text style ={[ styles.colorPink, styles.fontWeightBold, styles.fontSize17]}>108 Tasks</Text>
                                                    </View>
                                                    <View style = {[styles.flexOne, styles.allCenter,  ]}>
                                                            <Text style ={[styles.colorPink2, styles.fontWeightBold, styles.fontSize17]}>6 Projects</Text>
                                                    </View>
                                                    <View style = {[styles.flexOne, styles.allCenter,  ]}>
                                                           
                                                    </View>
                                            </View>
                                    </View>
                            
                                    {/* Tab_Block */}
                                    {/* <View style={[styles.flexOne, styles.border]} ></View> */}

                            </View>

                            </View>
 

                   
                         );
             }
}

const HomeScreen = Home
export {HomeScreen};