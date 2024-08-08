import React from 'react'
import { View, Text, Image, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
//interface
interface Props extends StackScreenProps <any,any> {};
const Bienvenida = ({navigation}:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidos</Text>
      <Image 
      source={{
        uri: 'https://mktinideas.com/wp-content/uploads/2020/06/Aplicaciones-Moviles.png'
        }} style={styles.image} />
      <Button   title="Acceder" onPress={() => navigation.navigate('Formulario')}  />
    </View>
  )
}

export default Bienvenida
