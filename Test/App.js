import * as React from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
} from '@react-navigation/drawer';

import { styles } from './styles/styles';
import { Colors } from './styles/Colors';

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
import Icone from 'react-native-vector-icons/Entypo';
import Icono from 'react-native-vector-icons/Octicons';


const myIcon = <Icon name="search" size={30} color="white" />;
const myIcon1 = <Icona name="arrowleft" size={30} color="white" />;
const myIcon2 = <Icona name="heart" size={25} color="rgb(255,98,67)" />;
const myIcon3 = <Iconfa name="scroll" size={22} color="rgb(41,127,238)" />;
const myIcon4 = <Iconi name="sunny-sharp" size={25} color="yellow" />;
const myIcon5 = <Icona name="bells" size={25} color="grey" />;
const myIcon6 = <Icon name="angle-down" size={23} color="black" />;
const myIcon7 = <Icon name="angle-left" size={35} color="black"  onPress={() => props.navigation.openDrawer()} />;
const myIcon8 = <Icone name="drop" size={23} color="skyblue" />;
const myIcon9 = <Icono name="primitive-dot" size={23} color="black" />;



// function Home() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

{/* <Header title="Accounts" navigation={this.props.navigation}/> */}

function Plants_Library() {
        // <Header title="Accounts" navigation={CustomDrawerContent(props)}/>
  return (

        
    <View style={[styles.flexOne, styles.bgWhite]}>
                        <View style={[styles.flexOne, styles.marginRight32, styles.marginLeft32, ]}>
                   {/* <View styles={{flex:1, marginTop:12, marginRight:20, marginLeft:20}}> */}
                          {/* Header_Block */}
                          <View style={[styles.flexQuarterToOne, styles.row, ]}>
                                  <TouchableOpacity
                                //   onPress = {() => navigation.openDrawer()}
                                //   onPress = {console.log('openDraewer()', '')}
                                  
                                   style={[styles.flexOne, styles.centerVertical ]} >
                                 

                                        {myIcon7}
                                        {/* <Text>azaan</Text> */}
                                        
                                  </TouchableOpacity>
                                  <View style={[styles.flexFive, ]}></View>
                                  <View style={[styles.flexOneAndQuarter, ]}>
                                                        <Image 
                                                                source={require('./images/elon.jpg')}
                                                                style={{width:60, height:60, borderRadius:30, borderColor:"white"}}
                                                        />
                                  </View>
                          </View>
                          {/* Plants_Library */}
                          <View style={[styles.flexQuarterToOne, styles.row, ]}>
                                  <View style={[styles.flexFive, styles.centerVertical,]}>
                                          <Text style={[styles.fontSize25, styles.fontWeightBold]}>Plants Library</Text>
                                  </View>
                                  <View style={[styles.flexOneAndHalf,  styles.row, ]}>
                                        <View style={[styles.flexTwo, styles.centerVertical, ]}>
                                                <Text style={[styles.fontSize17,  styles.fontWeightBold]}>Plants</Text>
                                        </View>
                                        <View style={[styles.flexHalf, styles.centerVertical, styles.marginTop4 ]}>
                                                <Text>{myIcon6} </Text>
                                        </View>
                                  </View>
                          </View>
                          {/* Indoor_Plants */}
                          <View style={[styles.flexHalf, ]}>
                                  <Text style={[styles.fontSize19, styles.fontWeightBold]}>Indoor Plants</Text>
                          </View>
                        
                        
                          {/* Content_Block */}
                         
                          {/* <ScrollView style={{}}> */}
                          <View style={{flex:5}}>
                                
                                <ScrollView style={{ flex:7,}}>

                                <View style={{flex:9, flexDirection:'row', height:280,}}>
                                          {/* 1_Box */}
                                        <View style={{marginRight:4, flex:1,marginBottom:20, borderWidth:0,}}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image
                                                                source={require('./images/zz.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        /> 
                                                        <View style={{ position:'absolute', marginLeft:110, marginTop:10}}><Text style={{}}>{myIcon2}</Text></View>
                                                </View>
                                                <View style= {{flex:2,marginTop:10, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:3}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                         {/* 2_Box */}
                                        <View style={[styles.flexOne, styles.marginTop24,  styles.marginLeft10,]}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image 
                                                                source={require('./images/usaplant.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        /> 
                                                </View>
                                                <View style= {{flex:5,marginTop:105, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:7}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                </View>
                                
                                <View style={{flex:9, flexDirection:'row', height:280, borderWidth:0}}>
                                          {/* 3_Box */}
                                        <View style={{marginRight:4, flex:1,marginBottom:20, borderWidth:0,}}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image
                                                                source={require('./images/yellowplant.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        /> 
                                                        <View style={{ position:'absolute', marginLeft:110, marginTop:10}}><Text style={{}}>{myIcon2}</Text></View>
                                                </View>
                                                <View style= {{flex:2,marginTop:10, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:3}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                         {/* 4_Box */}
                                        <View style={[styles.flexOne, styles.marginTop24,  styles.marginLeft10,]}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image 
                                                                source={require('./images/ppl.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        /> 
                                                </View>
                                                <View style= {{flex:5,marginTop:105, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:7}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                </View>

                                <View style={{flex:9, flexDirection:'row', height:280, borderWidth:0}}>
                                          
                                          {/* 5_Box */}
                                        <View style={{marginRight:4, flex:1,marginBottom:20, borderWidth:0,}}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image
                                                                source={require('./images/plant5.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        /> 
                                                        
                                                </View>
                                                <View style= {{flex:2,marginTop:10, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:3}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                         {/* 6_Box */}
                                        <View style={[styles.flexOne, styles.marginTop24,  styles.marginLeft10,]}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image 
                                                                source={require('./images/plant6.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        />
                                                        <View style={{ position:'absolute', marginLeft:110, marginTop:10}}><Text style={{}}>{myIcon2}</Text></View> 
                                                </View>
                                                <View style= {{flex:5,marginTop:105, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:7}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                </View>
                
                                </ScrollView>
                                

                          </View>
                          {/* </ScrollView> */}
                          {/* </View> */}
                          
                          
                          {/* <Button
                                  onPress={() => navigation.navigate('Notifications')}
                                  title="Go to notifications"
                          /> */}
                </View>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={{backgroundColor:'white', padding:40}} {...props}>
      <DrawerItemList style={{ }} {...props} />
      <DrawerItem labelStyle={{fontSize:16, color:'black',}} label="Home" style={{}} onPress={() => alert('Link to help')} />
      <DrawerItem labelStyle={{fontSize:18, color:'black', fontWeight:"bold"}} label="Plants Library" style={{}} onPress={() => alert('Link to help')} />
      <DrawerItem  labelStyle={{fontSize:16, color:'black',}}label="Your Garden" style={{fontWeight: "bold"}} onPress={() => alert('Link to help')} />
      <DrawerItem 
      
      // icon={() => <Icon color={black} size={size} name={focused ? 'heart' : 'heart-outline'} />
                           
      
       labelStyle={{fontSize:16, color:'black',}} label="Plants Scanner" style={{}} onPress={() => alert('Link to help')} />
      <DrawerItem labelStyle={{fontSize:16, color:'black',}} label="Matcher" style={{}} onPress={() => alert('Link to help')} />
      <DrawerItem labelStyle={{fontSize:16, color:'black',}} label="Plant Doctor" style={{}} onPress={() => alert('Link to help')} />
      <DrawerItem labelStyle={{fontSize:16, color:'black',}} label="Socialize" style={{}} onPress={() => alert('Link to help')} />
      <DrawerItem labelStyle={{fontSize:16, color:'black',}} label="Settings" style={{}} onPress={() => alert('Link to help')} />
      <DrawerItem labelStyle={{fontSize:16, color:'black',}} label="Log Out" style={{}} onPress={() => alert('Link to help')} />
      <DrawerItem Image 
                                                                source={require('./images/plant6.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                         label="" style={{}} onPress={() => alert('Link to help')} />

    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* <Drawer.Screen  name="Botanic" component={Home} /> */}
      <Drawer.Screen name="Plants" component={Plants_Library} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}