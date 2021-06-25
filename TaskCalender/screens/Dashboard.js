import React from 'react';
import {StyleSheet, Text, View, Button, Image, Dimensions, TextInput, KeyboardAvoidingView, FlatList, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { VictoryBar, VictoryChart, VictoryTheme, sampleData } from "victory-native";
import { ProjectScreen } from "./Project";
import { HomeScreen } from "./Home";
// import { Settingss } from "./Settingss";

// import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

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


// const Tab = createBottomTabNavigator();
const Tab = createBottomTabNavigator();

 class Dashboard extends React.Component {
        


        homeScreen = () => {
                return (
                                <View style={{flex:1, backgroundColor: "rgb(32,26,45)"}}>
                                <View style={[styles.flexOne,styles.marginLeft16, styles.marginTop18, styles.marginRight16, styles.border]}> 
                                
                                
                                         {/* headerDashboard_Block */}
                                        <View style={[styles.flexOneAndQuarter, styles.row, styles.border]} >
                                                <View style={[styles.flexFour, styles.centerVertical, styles.border]}>
                                                        <Text style={[styles.white, styles.fontWeightBold, styles.fontSize23]}>Dashboard</Text>
                                                </View>
                                                <View style={[styles.flexQuarterToOne, styles.allCenter, styles.allCenter, styles.border]}>{myIcon5}</View>
                                                <View style={[styles.flexOneAndHalf, styles.flexEndHorizontal, styles.flexEndVertical, styles.border]}>
                                                        <Image         
                                                                style={{width:60, height:60, borderRadius:30 }}
                                                                source={require("../images/elon.jpg")}
                                                        />
                                                </View>
                                        </View>
                                
                                         {/* Hello_block */}
                                        <View style={[styles.flexOne, styles.centerVertical, styles.border]} >
                                                <Text style={[styles.fontSize36, styles.paddingTop4, styles.white, styles.fontWeightBold]}>Hello,</Text>
                                        </View>
                                
                                         {/* Derek_Block */}
                                        <View style={[styles.flexOne, styles.marginBottom10, styles.border]} >
                                                <Text style ={[styles.flexOneAndQuarter, styles.fontSize36, styles.white, styles.fontWeightBold]}>Derek Doyle {myIcon8}</Text>
                                        </View>
                                
                                        {/* Two_Boxes_Block */}
                                        <View style={[styles.flexOne, styles.row, styles.marginBottom14, styles.marginTop8, styles.border]} >
                                                <TouchableOpacity style={[styles.flexOne, styles.allCenter, styles.border,]}>
                                                        <Text style={[styles.fontSize15, styles.greyDark]}>Overview</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.flexOneAndHalf, styles.allCenter, styles.bgBlue, styles.radius28, styles.border,]}>
                                                        <Text style={[styles.white, styles.fontSize17, styles.fontWeightBold]}>Productivity</Text>
                                                </TouchableOpacity>
                                                <View style={[styles.flexOneAndHalf, styles.border,]}></View>
                                        </View>
                                
                                        {/* Box1_Block */}
                                        <View style={[styles.flexFour, styles.marginBottom16, styles.radius18, styles.row, styles.bgcardGray, styles.border]} >
                                                <View style = {[styles.flexOneAndHalf, styles.Margin10, styles.border]}>
                                                        <View style = {[styles.flexOne, styles.border]}>
                                                                <Text style = {[styles.fontSize15, styles.centerVertical, styles.greyDark,]}>Daily Goal</Text>
                                                        </View>
                                                        <View style = {[styles.flexOne, styles.row, styles.border]}>
                                                                <View style = {[styles.flexQuarterToOne, styles.radius28, styles.allCenter, styles.bgcardGreeen, styles.border]}>
                                                                        <Text style = {[styles.fontSize17, styles.white, styles.fontWeightBold]}>3/5</Text>
                                                                </View>
                                                                <View style = {[styles.flexQuarterToOne, styles.allCenter, styles.border]}>
                                                                        <Text style = {[styles.fontWeightBold, styles.fontSize17, styles.white ]} >tasks</Text>
                                                                </View>
                                                                <View style = {[styles.flexOne, styles.border]}></View>
                                                        </View>
                                                        <View style = {[styles.flexOneAndHalf, styles.border]}>
                                                                <Text style = {[styles.fontSize15, styles.greyDark, styles.fontWeight600, styles.marginTop4]}>You marked 3/5 tasks</Text>
                                                                <Text style = {[styles.fontSize15, styles.greyDark, styles.fontWeight600, styles.marginTop4]}>are you done {myIcon3}</Text>
                                                        </View>
                                                        
                                                        <View style = {[styles.flexOneAndHalf, styles.row, styles.border]}>
                                                                <View style = {[styles.flexQuarterToOne, styles.radius28, styles.allCenter, styles.bgcardPink, styles.border]}>
                                                                        <Text style =  {[styles.fontSize17, styles.white, styles.fontWeightBold]}>All Task</Text>
                                                                </View>
                                                                <View style = {[styles.flexHalf, styles.border]}></View>
                                                        </View>
                                                </View>
                                                <View style = {[styles.flexOne,  styles.border]}>
                                                                <View style = {[styles.flexOne, styles.Margin20,styles.height95, styles.width80, styles.radius50,  styles.borderColorGreen, styles.border10,  styles.allCenter, ]}>
                                                                        <Text style = {[styles.fontSize28]}> {myIcon11} </Text>
                                                                        {/* <Image 
                                                                                 style={{width:40, height:40, borderRadius:20, }}
                                                                                 source={require("../images/hexagon.png")} 
                                                                        /> */}
                                                                        
                                                                </View>
                                                                <View style = {[styles.flexHalf, styles.border]}></View>
                                                </View>
                                        </View>
                                
                                        {/* Box2_Block */}
                                        <View style={[styles.flexFour, styles.marginBottom10, styles.radius18, styles.bgcardGray,  styles.border]} >
                                                <View style= {[styles.flexTwoAndHalf, styles.centerVertical, styles.border]}>
                                                        <Text style = {[styles.fontSize15, styles.greyDark, styles.marginLeft10 ]}>Completed in the last 7 days</Text>
                                                </View>
                                                {/* Bar_Graph */}
                                                <View style= {[styles.flexFive, styles.allCenter, styles.Margin20, styles.border]}>
                                                        <VictoryChart
                                                                theme={VictoryTheme.material}
                                                                domainPadding={50}
                                                                padding={{left:50, top:120, bottom:140,  right:50, }}
                                                        >
                                                                 <VictoryBar
                                                                         cornerRadius={{ top: ({ datum }) => datum.x * 3 }}
                                                                        style={{ data: { fill: "#c43a31" } }}
                                                                        data={sampleData}
                                                                />
                                                         </VictoryChart>
                                                </View>
                                                <View style= {[styles.flexTwoAndHalf, styles.row, styles.border]}>
                                                        <View style = {[styles.flexOne, styles.allCenter, styles.border ]}>
                                                                <Text style ={[ styles.colorPink, styles.fontWeightBold, styles.fontSize17]}>108 Tasks</Text>
                                                        </View>
                                                        <View style = {[styles.flexOne, styles.allCenter, styles.border ]}>
                                                                <Text style ={[styles.colorPink2, styles.fontWeightBold, styles.fontSize17]}>6 Projects</Text>
                                                        </View>
                                                        <View style = {[styles.flexOne, styles.allCenter, styles.border ]}>
                                                               
                                                        </View>
                                                </View>
                                        </View>
                                
                                        {/* Tab_Block */}
                                        {/* <View style={[styles.flexOne, styles.border]} ></View> */}

                                </View>

                                </View>
                );   
        }

        projectScreen = () => {
                return (
                                // <Project />
                                <View style={{flex:1, backgroundColor: "rgb(32,26,45)",}}>
                                        <View style={[styles.flexOne, styles.marginTop18, styles.marginRight16, styles.marginLeft16]}>
                                                {/* Header_Block */}
                                                <View style={[styles.flexOneAndHalf, styles.row, styles.border]}>
                                                         <View style={[styles.flexQuarterToOne, styles.border]}></View>
                                                         <View style={[styles.flexFive, styles.border]}></View>
                                                </View>
                                                
                                                {/* Selection_Block */}
                                                <View style={[styles.flexTwoAndHalf, styles.row, styles.border]}>
                                                         <View style={[styles.flexTwo, styles.allCenter, styles.border]}></View>
                                                         <View style={[styles.flexTwo, styles.allCenter, styles.border]}></View>
                                                         <View style={[styles.flexOneAndQuarter,  styles.bgBlue, styles.Margin20, styles.radius28, styles.allCenter, styles.border]}></View>
                                                         <View style={[styles.flexOne, styles.border]}></View>
                                                </View>
                                        
                                                <ScrollView style = {{width:360, height:500}} >
                                                {/* 1_row */}
                                                <View style={{width:360, height:220, flexDirection: 'row'}}>
                                                          {/* 1st_Box */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1, styles.marginTop8, styles.marginRight10, styles.marginBottom10, styles.radius16, styles.border]}>
                                                                 <View style = {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row, styles.border ]}>
                                                                         <View style={[styles.flexOne,  styles.radius16, styles.border]}></View>
                                                                         <View style={[styles.flexTwo,  styles.border]}></View>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexHalf, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                         </View>

                                                         {/* 2nd_Box */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1, styles.marginTop8, styles.marginLeft10, styles.marginBottom10, styles.radius16, styles.border]}>
                                                                <View style =  {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row, styles.border ]}>
                                                                         <View style={[styles.flexOne,  styles.radius16, styles.border]}></View>
                                                                         <View style={[styles.flexTwo,  styles.border]}></View>
                                                                </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexHalf, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[ styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                         </View>
                                                </View>
                                        
                                                {/* 2_row */}
                                                <View style={{width:360, height:220, flexDirection: 'row'}}>
                                                        {/* 3rd_Box */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1, styles.marginTop8, styles.marginRight10, styles.marginBottom10, styles.radius16, styles.border]}>
                                                                 <View style = {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row, styles.border ]}>
                                                                         <View style={[styles.flexOne,  styles.radius16, styles.border]}></View>
                                                                         <View style={[styles.flexTwo,  styles.border]}></View>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexHalf, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[ styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>   
                                                         </View>
                                                        
                                                        {/* 4th_Box */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1, styles.marginTop8, styles.marginLeft10, styles.marginBottom10, styles.radius16, styles.border]}>
                                                                <View style = {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row, styles.border ]}>
                                                                         <View style={[styles.flexOne,  styles.radius16, styles.border]}></View>
                                                                         <View style={[styles.flexTwo,  styles.border]}></View>
                                                                </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexHalf, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[ styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>    
                                                         </View>
                                                </View>
                                        
                                                {/* 3_row */}
                                                <View style={{width:360, height:220, flexDirection: 'row'}}>
                                                         {/* Box_5 */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1, styles.marginTop8, styles.marginRight10, styles.marginBottom10, styles.radius16, styles.border]}>
                                                                 <View style = {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row, styles.border ]}>
                                                                         <View style={[styles.flexOne,  styles.radius16, styles.border]}></View>
                                                                         <View style={[styles.flexTwo,  styles.border]}></View>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexHalf, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[ styles.flexQuarterToOne, styles.marginLeft16, styles.marginLeft16, styles.border ]}></View>   
                                                         </View>
                                                         {/* Box_6 */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1,  styles.marginTop8, styles.marginLeft10, styles.marginBottom10, styles.radius16, styles.marginLeft16, styles.border]}>
                                                                 <View style = {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row, styles.marginLeft16, styles.border ]}>
                                                                         <View style={[styles.flexOne,  styles.radius16, styles.border]}></View>
                                                                         <View style={[styles.flexTwo,  styles.border]}></View>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[styles.flexHalf, styles.marginLeft16, styles.border ]}></View>
                                                                 <View style = {[ styles.flexQuarterToOne, styles.marginLeft16, styles.border ]}></View>    
                                                         </View>
                                                </View> 

                                                </ScrollView>   
                                        </View>
                                </View>


                );
        }

        plusScreen = () => {
                return (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text>PlusIcon</Text>
                                </View>
                );
        }

        messageScreen = () => {
                return (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text>messageScreen</Text>
                                </View>
                );
        }

        notificationScreen = () => {
                return (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text>NotificationScreen</Text>
                                </View>
                );
        }
        

        myTabs = () => {
                return (
                        <Tab.Navigator>
                                        {/* <Tab.Screen name="Home" component={this.homeScreen} />
                                        <Tab.Screen name="Project" component={this.projectScreen} /> */}
                                        <Tab.Screen name= "Home" component={ HomeScreen } />
                                        <Tab.Screen name= "Project" component={ ProjectScreen } />

                        </Tab.Navigator>
                );
        }

        render( ){
                return(

                        
                                <Tab.Navigator 
                                                tabBarOptions={{
                                                        style: {
                                                                       backgroundColor: "rgb(32,26,45)",
                                                                         height: 70,
                                                                         borderTopWidth: 0,
                                                                //        alignItems:'center',
                                                                //        justifyContent:'center',
                                                                       
                                                        }
                                                }}
                                >
                                        
                                        <Tab.Screen 
                                                 name="Home" 
                                                 component={HomeScreen} 
                                                 options={{
                                                 tabBarLabel: '',
                                                
                                                           tabBarIcon: ({ color, size }) => (
                                                
                                                                <MCIcons name="view-grid-outline" color={'white'} size={25}  />
                                                          ),
                                                }} 

                                        />

                                        <Tab.Screen
                                                name="Project" 
                                                component={ProjectScreen}
                                                options={{
                                                        tabBarLabel: '',
                                                        tabBarIcon: ({ color, size }) => (
                                                                <SLIcons name="layers" color={'grey'} size={25}   />
                                                        ),
                                                }} 
                                         />
                                       
                                        <Tab.Screen 
                                                name="plusicon" 
                                                component={this.plusScreen}
                                                options = {{
                                                        tabBarLabel: "",
                                                        tabBarIcon: ({ color, size }) => (
                                                                <MCIcons name="plus-circle" color={'#008FFB'} size={48}  />
                                                        ),
                                                }}
                                         />
                                       
                                        <Tab.Screen                                
                                                 name="Message"
                                                 component={this.messageScreen}
                                                 options = {{
                                                         tabBarLabel: "",
                                                         tabBarIcon: ({color,size}) =>(
                                                                <MCIcons name="android-messages" color={'grey'} size={25}   />
                                                        ),
                                                }}
                                         />
                                       
                                        <Tab.Screen 
                                        
                                                name="Notification"
                                                component={this.notificationScreen}
                                                options = {{
                                                        tabBarLabel: "",
                                                        tabBarIcon: ({color,size}) =>(
                                                                <MCIcons name="notification-clear-all" color = {'grey'} size= {25}   />
                                                        ),
                                                }}
                                         />
                                
                                </Tab.Navigator>
                       

                );
        }
}
const DashboardScreen = Dashboard
export {DashboardScreen};