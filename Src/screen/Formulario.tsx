import React from 'react'
import {  Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import InputComponents from '../components/InputComponents';

const Formulario = () => {

    const [val1, setVal1] = React.useState('');
    const [val2, setVal2] = React.useState('');
    const [res, setRes] = React.useState('');

    const RealizarDivision = () => {
        const numero1 = parseFloat(val1);
        const numero2 = parseFloat(val2);
        if (numero1 === 0 && numero2 === 0) {
            setRes('INDETERMINACIÓN');
        } else if (numero2 === 0) {
            setRes('NO EXISTE DIVISIÓN PARA CERO');
        } else {
            setRes((numero1 / numero2).toString());
        }
    };
    return (
        <View style={styles.container}>
            <InputComponents placeholder='Ingrese el primer número'
                //value={val1}
                //onChangeText={setVal1}
            />
            <InputComponents placeholder='Ingrese el segundo número'
            
               // value={val2}
                //onChangeText={setVal2}
            />
            <Button title="Dividir" onPress={RealizarDivision} />
            {res !== '' && <Text>Resultado: {res}</Text>}
        </View>
    )
}

export default Formulario
