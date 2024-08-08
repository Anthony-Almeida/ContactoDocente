import { createStackNavigator } from '@react-navigation/stack';
import Bienvenida from '../screen/Bienvenida';
import Formulario from '../screen/Formulario';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bienvenida" component={Bienvenida} />
      <Stack.Screen name="Formulario" component={Formulario} />      
    </Stack.Navigator>
  );
}