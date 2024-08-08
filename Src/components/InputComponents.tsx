import React from 'react'
import { TextInput } from 'react-native'
import { styles } from '../theme/appTheme'
//interface props

interface Props {
    placeholder: string;
    
}


const InputComponents = ({ placeholder }:Props) => {
    return (
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        />

    )
}

export default InputComponents
