import { View, Text } from 'react-native'
import React from 'react'

function UsersScreen({  route }) {
    React.useEffect(() => {
      if (route.params?.post) {
        // Post updated, do something with `route.params.post`
        // For example, send the post to the server
      }
    }, [route.params?.post]);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text style={{ margin: 10 }}>Users: {route.params?.post}</Text>
  
  
      </View>
    );
  }

export default UsersScreen