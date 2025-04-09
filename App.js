import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './screens/login';
import Estoque from './screens/estoque';
import FaleConosco from './screens/faleConosco';
import { loadOptions } from '@babel/core';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer({navigation}){

  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Estoque' component={Estoque}/>
      <Drawer.Screen name='Fale Conosco' component={FaleConosco}/>
    </Drawer.Navigator>
  )
  
}


export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator
        /* Style={{
          Header: {
            headerShown: false
          }
        }} */
      >

        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='HomeDrawer' component={HomeDrawer}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



