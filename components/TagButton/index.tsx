import React from 'react';
import styles from "./styles";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface TagButtonProps extends TouchableOpacityProps{
  text:string; 
  active?:boolean;
}

const TagButton = ({text, onPress, active = false}:TagButtonProps) => {

  return (
    <TouchableOpacity style={[styles.container,active && styles.activeContainer]} onPress={onPress} >
        <Text style={[styles.text, active && styles.textActive]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TagButton;