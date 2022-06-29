import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
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
