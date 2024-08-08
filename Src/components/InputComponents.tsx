import React from 'react'
import { TextInput } from 'react-native'
import { styles } from '../theme/appTheme'
//interface props

interface Props {
    placeholder: string;
    onChange:(text:string)=> void;

}

const InputComponents = ({ placeholder,onChange, }:Props) => {
    return (
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        onChangeText={onChange}
        />

    )
}

export default InputComponents
