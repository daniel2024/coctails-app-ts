import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import styles from './styles';
import React from 'react';

interface ButtonsProps extends TouchableOpacityProps{
    text:string;
}

const Button = ({ onPress, text, style, disabled,...props}:ButtonsProps) => {

      return (
        <TouchableOpacity style={[styles.containerButton, style, disabled && {opacity:0.5}]} onPress={onPress} {...props}>
          <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;