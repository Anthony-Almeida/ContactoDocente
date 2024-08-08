import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from './Src/navigator/StackNavigator';
import Formulario from './Src/screen/Formulario';



const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
      {/*<Formulario/>*/}
    </NavigationContainer>
  )
}

export default App
