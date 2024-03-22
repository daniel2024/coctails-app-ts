import React from 'react'
import { View } from 'react-native';
import styles from './styles';
import IconLogo from '../../assets/cocteles_logo.svg';

interface LogoProps{
  size?:string;
}

const Logo = ({size='400'}:LogoProps) => {
  return (
    <View style={{...styles.container}}>
      <IconLogo
      width={size}
      height={size}
    />

    </View>
  )
}

export default Logo;