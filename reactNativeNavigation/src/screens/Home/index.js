
import { View, Button } from 'react-native'
import React from 'react'

function HomeScreen({ navigation }) {
  

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Add User"
          onPress={() => navigation.navigate('AddUserScreen')}
        />
        <Button
          title="User List"
          onPress={() => navigation.navigate('UsersScreen')}
        />
      </View>
    );
  }

export default HomeScreen
