import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { styles } from "./styles/styles";
import  Colors  from "./styles/Colors"; 

import Main from './screens/Main';
import { DashboardScreen } from './screens/Dashboard';
import { Settingss, SettingsScreen } from './screens/Settingss';
import Project from './screens/Project'; 
import { Header } from 'react-native/Libraries/NewAppScreen';

export const Stack = createStackNavigator();
      
        function App() {
                return (
                        <NavigationContainer
                        
                        >
                              <Stack.Navigator
                                screenOptions={{
                                headerShown: false
                              }}
                              >

                                      <Stack.Screen name= "Main" component={Main} headerMode = 'none'/>
                                      <Stack.Screen name= "Dashboard" component={DashboardScreen} />
                                      <Stack.Screen name= "Settingss" component={Settingss} />
                                      {/* <Stack.Screen name= "Project" component={Project} /> */}
                              </Stack.Navigator>
                          </NavigationContainer>
                  );


          }
          
export default App;



// export default class App extends React.Component {
//         render( ) {
//                 return (
//                         <View style={[styles.flexOne]}>
                                
//                         </View>
//                 );
//         }
// }

// const styles = StyleSheet.create({
//         container: {
//           flex: 1,
//           backgroundColor: "#fff" ,
//           alignItems: 'center' ,
//           justifyContent: 'center' ,
//         },
// });