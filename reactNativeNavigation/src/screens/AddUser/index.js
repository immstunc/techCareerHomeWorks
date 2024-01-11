import React from 'react'

function AddUserScreen({ navigation }) {
    const [postText, setPostText] = React.useState('');
  
    return (
      <>
        <TextInput
          multiline
          placeholder="enter Usarname?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Add"
          onPress={() => {
            navigation.navigate({
              name: 'UsersScreen',
              params: { post: postText },
              merge: true,
            });
          }}
        />
      </>
    );
  }

export default AddUserScreen