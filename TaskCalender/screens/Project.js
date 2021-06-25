import React from 'react';
import { StyleSheet, Text, Button, View, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen } from './Dashboard';
import { Settingss } from './Settingss';


import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
import Icone from 'react-native-vector-icons/Entypo';
import Icono from 'react-native-vector-icons/Octicons';
import Iconft from 'react-native-vector-icons/Fontisto';
import Iconsli from 'react-native-vector-icons/SimpleLineIcons';


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
const myIcon12 = <Iconsli name="directions" size={25} color="white" />;



import { styles } from "../styles/styles";
import  Colors  from "../styles/Colors"; 

 class Project extends React.Component {
        render() {
                // console.log("properties", this.props.navigation.navigate  )
                return(
                        <View style={{flex:1, backgroundColor: "rgb(32,26,45)",}}>
                                        <View style={[styles.flexOne, styles.marginTop18, styles.marginRight16, styles.marginLeft16]}>
                                                {/* Header_Block */}
                                                <View style={[styles.flexOneAndHalf,  styles.row, ]}>
                                                         <View style={[styles.flexHalf, styles.marginTop4, styles.marginBottom4, styles.allCenter, styles.radius10, styles.borderColorGrey, styles.border ]}>{myIcon1}</View>
                                                         <View style={[styles.flexFive, styles.allCenter, ]}>
                                                                 <Text style= {[styles.fontSize19, styles.fontWeightBold, styles.paddingRight10, styles.white]}>Projects</Text>
                                                         </View>
                                                </View>
                                                
                                                {/* Selection_Block */}
                                                <View style={[styles.flexTwoAndHalf, styles.row, ]}>
                                                         <TouchableOpacity style={[styles.flexTwo, styles.allCenter, ]}>
                                                                 <Text style={[styles.greyDark, styles.marginLeft8, styles.fontWeightBold, styles.fontSize17,]}>Favorites</Text>
                                                         </TouchableOpacity>
                                                         <TouchableOpacity style={[styles.flexTwo, styles.allCenter, ]}>
                                                                 <Text style={[ styles.fontSize17, styles.fontWeightBold, styles.greyDark, styles.marginLeft32  ]}>Recents</Text>
                                                         </TouchableOpacity>
                                                         <TouchableOpacity 
                                                                
                                                                onPress={()=> this.props.navigation.navigate('Settingss')}
                                                                style={[styles.flexOneAndQuarter,  styles.bgBlue, styles.marginLeft16, styles.marginRight16, styles.marginTop18, styles.marginBottom16, styles.radius28, styles.allCenter, ]}>
                                                                         <Text style={[styles.fontWeightBold, styles.fontSize17, styles.fontWeightBold, styles.white ]}>All</Text>
                                                         </TouchableOpacity>
                                                         <View style={[styles.flexOne,]}></View>
                                                </View>
                                        
                                                <ScrollView style = {{width:360, height:500}} >
                                                {/* 1_row */}
                                                <View style={{width:360, height:220, flexDirection: 'row'}}>
                                                          {/* 1st_Box */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1, styles.marginTop8, styles.marginRight10, styles.marginBottom10, styles.radius16,]}>
                                                                 <View style = {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row,  ]}>
                                                                         <View style={[styles.flexOne,  styles.radius16, styles.allCenter, styles.bgbox1,]}>{myIcon12}</View>
                                                                         <View style={[styles.flexTwo,  ]}></View>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.centerVertical,  ]}>
                                                                         <Text style = {[styles.fontSize17, styles.fontWeightBold, styles.white, ]}>Unity</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.centerVertical, ]}>
                                                                 <Text style = {[styles.fontSize17, styles.fontWeightBold, styles.white, ]}>Dashboard</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexHalf, styles.marginLeft16, styles.centerVertical, ]}>
                                                                         <Text style = {[styles.fontSize15, styles.greyDark,]}>Design</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.row, ]}>
                                                                         <View style = {[styles.flexTwoAndHalf, ]}>
                                                                                 <View style = {[styles.flexOne, styles.row, styles.bgprogresback, styles.marginLeft10, styles.marginRight10, styles.marginBottom16, styles.marginTop18, styles.radius18 ]}>
                                                                                         <View style = {[styles.flexHalf, styles.radius18, styles.bgprogresspink, ]}></View>
                                                                                         <View style = {[styles.flexHalf,  ]}></View>
                                                                                 </View>
                                                                         </View>
                                                                         <View style = {[styles.flexOne,styles.allCenter,]}>
                                                                                 <Text style = {[styles.fontSize13, styles.white, styles.fontWeight600]}>5/20</Text>
                                                                         </View>
                                                                 </View>
                                                         </View>

                                                         {/* 2nd_Box */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1, styles.marginTop8, styles.marginLeft10, styles.marginBottom10, styles.radius16,]}>
                                                                <View style =  {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row,  ]}>
                                                                         <View style={[styles.flexOne,  styles.radius16, styles.bgbox2, styles.allCenter,]}>{myIcon12}</View>
                                                                         <View style={[styles.flexTwo, ]}></View>
                                                                </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.centerVertical, styles.marginLeft16,  ]}>
                                                                        <Text style = {[styles.fontSize17, styles.fontWeightBold, styles.white, ]}>Instagram</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.centerVertical, styles.marginLeft16,  ]}>
                                                                        <Text style = {[styles.fontSize17, styles.fontWeightBold, styles.white, ]}>Shot</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexHalf, styles.centerVertical, styles.marginLeft16,  ]}>
                                                                        <Text style = {[styles.fontSize15, styles.greyDark,]}>Marketing</Text>
                                                                 </View>
                                                                 <View style = {[ styles.flexQuarterToOne, styles.row, styles.marginLeft16,  ]}>
                                                                         <View style = {[styles.flexTwoAndHalf, ]}>
                                                                                <View style = {[styles.flexTwoAndHalf,   ]}>
                                                                                         <View style = {[styles.flexOne, styles.row, styles.bgprogresback, styles.marginLeft10, styles.marginRight10, styles.marginBottom16, styles.marginTop18, styles.radius18 ]}>
                                                                                                 <View style = {[styles.flexHalf, styles.radius18, styles.bgprogresspink, ]}></View>
                                                                                                <View style = {[styles.flexHalf,  ]}></View>
                                                                                        </View>
                                                                                </View>
                                                                         </View>
                                                                         <View style = {[styles.flexOne, styles.allCenter,]}>
                                                                                 <Text style = {[styles.fontSize13, styles.white, styles.fontWeight600]}>5/20</Text>
                                                                         </View>
                                                                 </View>
                                                         </View>
                                                </View>
                                        
                                                {/* 2_row */}
                                                <View style={{width:360, height:220, flexDirection: 'row'}}>
                                                        {/* 3rd_Box */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1, styles.marginTop8, styles.marginRight10, styles.marginBottom10, styles.radius16, ]}>
                                                                 <View style = {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row,  ]}>
                                                                         <View style={[styles.flexOne, styles.bgbox3,  styles.radius16, styles.allCenter, ]}>{myIcon12}</View>
                                                                         <View style={[styles.flexTwo,]}></View>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.centerVertical,  ]}>
                                                                        <Text style = {[styles.fontSize17, styles.fontWeightBold, styles.white, ]}>Cubbies</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.marginLeft16, styles.centerVertical,  ]}>
                                                                        <Text style = {[styles.fontSize15, styles.greyDark,]}>Design</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexHalf, styles.marginLeft16, styles.centerVertical,  ]}></View>
                                                                 <View style = {[ styles.flexQuarterToOne, styles.row, styles.marginLeft16,  ]}>
                                                                        <View style = {[styles.flexTwoAndHalf, ]}>
                                                                                <View style = {[styles.flexTwoAndHalf,   ]}>
                                                                                         <View style = {[styles.flexOne, styles.row, styles.bgprogresback, styles.marginLeft10, styles.marginRight10, styles.marginBottom16, styles.marginTop18, styles.radius18 ]}>
                                                                                                 <View style = {[styles.flexHalf, styles.radius18, styles.bgprogresspink, ]}></View>
                                                                                                <View style = {[styles.flexHalf,  ]}></View>
                                                                                        </View>
                                                                                </View>
                                                                        </View>
                                                                         <View style = {[styles.flexOne, styles.allCenter, ]}>
                                                                                <Text style = {[styles.fontSize13, styles.white, styles.fontWeight600]}>5/20</Text>
                                                                         </View>
                                                                 </View>   
                                                         </View>
                                                        
                                                        {/* 4th_Box */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1, styles.marginTop8, styles.marginLeft10, styles.marginBottom10, styles.radius16, ]}>
                                                                <View style = {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row,  ]}>
                                                                         <View style={[styles.flexOne, styles.bgbox4,  styles.radius16, styles.allCenter, ]}>{myIcon12}</View>
                                                                         <View style={[styles.flexTwo,  ]}></View>
                                                                </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.centerVertical, styles.marginLeft16,  ]}>
                                                                          <Text style = {[styles.fontSize17, styles.fontWeightBold, styles.white, ]}>Options</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.centerVertical, styles.marginLeft16,]}>
                                                                        <Text style = {[styles.fontSize15, styles.greyDark,]}>Design</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexHalf, styles.centerVertical, styles.marginLeft16,  ]}></View>
                                                                 <View style = {[ styles.flexQuarterToOne, styles.row, styles.marginLeft16, ]}>
                                                                        <View style = {[styles.flexTwoAndHalf, ]}>
                                                                        <View style = {[styles.flexTwoAndHalf,   ]}>
                                                                                         <View style = {[styles.flexOne, styles.row, styles.bgprogresback, styles.marginLeft10, styles.marginRight10, styles.marginBottom16, styles.marginTop18, styles.radius18 ]}>
                                                                                                 <View style = {[styles.flexHalf, styles.radius18, styles.bgprogresspink, ]}></View>
                                                                                                <View style = {[styles.flexHalf,  ]}></View>
                                                                                        </View>
                                                                                </View>
                                                                        </View>
                                                                         <View style = {[styles.flexOne, styles.allCenter, ]}>
                                                                                 <Text style = {[styles.fontSize13, styles.white, styles.fontWeight600]}>5/20</Text>
                                                                         </View>
                                                                 </View>    
                                                         </View>
                                                </View>
                                        
                                                {/* 3_row */}
                                                <View style={{width:360, height:220, flexDirection: 'row'}}>
                                                         {/* Box_5 */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1, styles.marginTop8, styles.marginRight4,  styles.marginBottom10, styles.radius16,]}>
                                                                 <View style = {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row, ]}>
                                                                         <View style={[styles.flexOne, styles.bgbox5,  styles.radius16, styles.allCenter,]}>{myIcon12}</View>
                                                                         <View style={[styles.flexTwo,  ]}></View>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.centerVertical, styles.marginLeft16,]}>
                                                                         <Text style = {[styles.fontSize17, styles.fontWeightBold, styles.white, ]}>UI8 Platform</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.centerVertical, styles.marginLeft16,]}>
                                                                         <Text style = {[styles.fontSize15, styles.greyDark,]}>Design</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexHalf, styles.centerVertical, styles.marginLeft16, ]}></View>
                                                                 <View style = {[ styles.flexQuarterToOne, styles.row, styles.marginLeft16, styles.marginLeft16, ]}>
                                                                        <View style = {[styles.flexTwoAndHalf, ]}>
                                                                        <View style = {[styles.flexTwoAndHalf, ]}>
                                                                                         <View style = {[styles.flexOne, styles.row, styles.bgprogresback, styles.marginLeft10, styles.marginRight10,styles.marginBottom8, styles.marginTop18, styles.radius18 ]}>
                                                                                                 <View style = {[styles.flexHalf, styles.radius18, styles.bgprogresspink, ]}></View>
                                                                                                <View style = {[styles.flexHalf,  ]}></View>
                                                                                        </View>
                                                                                </View>
                                                                        </View>
                                                                         <View style = {[styles.flexOne,styles.allCenter,]}>
                                                                                <Text style = {[styles.fontSize13, styles.white, styles.fontWeight600]}>5/20</Text>
                                                                         </View>
                                                                 </View>   
                                                         </View>
                                                         {/* Box_6 */}
                                                         <View style = {[styles.flexOne, styles.bgcardGray1,  styles.marginTop8, styles.marginBottom10, styles.radius16, styles.marginLeft16,]}>
                                                                 <View style = {[styles.flexOne, styles.marginLeft16, styles.marginTop18, styles.row, styles.marginLeft16,  ]}>
                                                                         <View style={[styles.flexOne, styles.bgbox3,  styles.radius16, styles.allCenter,]}>{myIcon12}</View>
                                                                         <View style={[styles.flexTwo,]}></View>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.centerVertical, styles.marginLeft16,  ]}>
                                                                        <Text style = {[styles.fontSize17, styles.fontWeightBold, styles.white, ]}>Unity</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexQuarterToOne, styles.centerVertical, styles.marginLeft16,  ]}>
                                                                        <Text style = {[styles.fontSize15, styles.greyDark,]}>Design</Text>
                                                                 </View>
                                                                 <View style = {[styles.flexHalf, styles.centerVertical, styles.marginLeft16,  ]}></View>
                                                                 <View style = {[ styles.flexQuarterToOne, styles.row, styles.marginLeft16,  ]}>
                                                                        <View style = {[styles.flexTwoAndHalf, ]}>
                                                                        <View style = {[styles.flexTwoAndHalf,  ]}>
                                                                                         <View style = {[styles.flexOne, styles.row, styles.bgprogresback, styles.marginLeft10, styles.marginRight10,styles.marginBottom8, styles.marginTop18, styles.radius18 ]}>
                                                                                                 <View style = {[styles.flexHalf, styles.radius18, styles.bgprogresspink, ]}></View>
                                                                                                <View style = {[styles.flexHalf,  ]}></View>
                                                                                        </View>
                                                                                </View>
                                                                        </View>
                                                                         <View style = {[styles.flexOne, styles.allCenter,]}>
                                                                                 <Text style = {[styles.fontSize13, styles.white, styles.fontWeight600]}>5/20</Text>
                                                                         </View>
                                                                 </View>    
                                                         </View>
                                                </View> 

                                                </ScrollView>   
                                        </View>
                                </View>


                   
                );
        }
}

const ProjectScreen = Project
export {ProjectScreen};