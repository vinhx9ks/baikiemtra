import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './src/pages/Product/Product'
import Detail from './src/pages/Detail/Detail';


const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: 'Shop',
          headerStyle: {backgroundColor: '#f7f7f7'},
          headerTitleStyle:{color: 'blue'}
         }}
          name="ProductsPage" component={Product}></Stack.Screen>
        <Stack.Screen options={{
          title: 'Shop',
          headerStyle: {backgroundColor: '#9ee7ff'},
          headerTitleStyle:{color: 'red'}
         }}
         name="DetailPage" component={Detail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App