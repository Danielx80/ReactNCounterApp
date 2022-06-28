import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{
       flex: 1,
       backgroundColor: 'gray',
       justifyContent: 'center'
       }}>
      <Text style={{
        color:'white',
        fontSize: 55,
        textAlign: 'center'
      }}>
        Hola Mundo
      </Text>
    </View>
  )
}
export default App;

 
