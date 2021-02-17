import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';

const Stack = createStackNavigator()

const myOptions = {
  title:"Welcome Home",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#006aff"
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={Home}
            options={myOptions}
           />
          <Stack.Screen 
          name="Create"  
          component={CreateEmployee}
          options={{...myOptions,title:"Create Employee"}}
          />
          <Stack.Screen 
          name="Profile"
          component={Profile}
          options={{...myOptions,title:"Profile"}}
           />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    marginTop:Constants.statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
