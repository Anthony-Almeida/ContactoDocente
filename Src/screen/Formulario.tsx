import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import InputComponents from '../components/InputComponents';

const Formulario = () => {
    //hook useState: manipulamos el estado del objeto
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [resultado, setResultado] = useState<null | number | string>(null);
    const handleCalculate = (result: string | number) => {
        setResultado(result);
      };

    const RealizarDivision = () => {
        const numero1 = parseFloat(val1);
        const numero2 = parseFloat(val2);
        if (numero1 === 0 && numero2 === 0) {
            setResultado('INDETERMINACIÓN');
        } else if (numero2 === 0) {
            setResultado('NO EXISTE DIVISIÓN PARA CERO');
        } else {
            setResultado((numero1 / numero2).toString());
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>FORMULARIO</Text>
            <InputComponents placeholder='Ingrese el primer número'onChange={setVal1} 
            />
            <InputComponents placeholder='Ingrese el segundo número' onChange={setVal2}
            />
            <Button title="Dividir" onPress={RealizarDivision}  />
            {resultado !== '' && <Text>Resultado: {resultado}</Text>}
        </View>
        
    )
}

export default Formulario
