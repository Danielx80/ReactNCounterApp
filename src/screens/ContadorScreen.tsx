import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);


  return (
    <View style={styles.container}>
        <Text style={ styles.titulo }>
            Contador: { contador }
        </Text>
       <Fab
       position='bl'
        title="+1"
        onPress={ () => setContador(contador + 1)}
       />
         <Fab
        title="-1"
        position='br'
        onPress={ () => setContador(contador - 1)}
       />
    </View>
  )
}

export const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'whiter',
            justifyContent: 'center',
        },
        titulo: {
            fontSize: 45,
            textAlign: 'center',
            top: -15
        },
  });