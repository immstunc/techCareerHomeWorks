import * as React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import UsersScreen from './src/screens/UserList';
import AddUserScreen from './src/screens/AddUser';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
        <Stack.Screen name="UsersScreen" component={UsersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
