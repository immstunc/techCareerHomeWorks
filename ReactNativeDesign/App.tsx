import { Text, SafeAreaView, StyleSheet,View,Button, TextInput, Pressable } from 'react-native';


export default function App() {
  return <>

<SafeAreaView style={{padding:25}}>
<View style={{display:'flex', flexDirection:'row'}}>
<Text style={{color:"gray", flex:1, fontSize:15}}>Friday, 15 Dec</Text>
<Pressable>
<Text style={{color:"gray", flex:2, fontSize:15}}>Search</Text>
</Pressable>
</View>
<View style={{marginTop:35}}>
<Text style={{fontSize:30, fontWeight:'bold'}}>Learn</Text>
<Text style={{fontSize:20}}>Choose pary of the body</Text>
</View>
<View
      style={{
        flexDirection: 'column',
        marginTop:10,
        height: 500,
        
      }}>
      <View style={{backgroundColor: 'indianred', flex: 1, marginTop:5, marginBottom:10, borderRadius:15}} >
      <Text style={{color:"white", marginStart:20,marginTop:10, fontSize:25}}>Head & Face</Text>
      <Text style={{color:"white", marginStart:20,marginTop:1, fontSize:10}}>11 diseases</Text>
      </View>
      <View style={{backgroundColor: 'powderblue', flex: 1, marginTop:5, marginBottom:10, borderRadius:15}}>
      <Text style={{color:"white", marginStart:20,marginTop:10, fontSize:25}}>Back & Neck</Text>
      <Text style={{color:"white", marginStart:20,marginTop:1, fontSize:10}}>2 diseases</Text>
      </View>
      <View style={{backgroundColor: 'sandybrown', flex: 1, marginTop:5, marginBottom:10, borderRadius:15}} >
      <Text style={{color:"white", marginStart:20,marginTop:10, fontSize:25}}>Elbow & Shoulders</Text>
      <Text style={{color:"white", marginStart:20,marginTop:1, fontSize:10}}>3 diseases</Text></View>
      <View style={{backgroundColor: 'steelblue', flex: 1, marginTop:5, borderRadius:15}} >
      <Text style={{color:"white", marginStart:20,marginTop:10, fontSize:25}}>Hand & Arm</Text>
      <Text style={{color:"white", marginStart:20,marginTop:1, fontSize:10}}>1 diseases</Text></View>
      
    </View>
</SafeAreaView>

  </>;
}


