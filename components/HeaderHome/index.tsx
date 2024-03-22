import { View, Text } from 'react-native';
import Logo from '../Logo'
import styles from './styles';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
        <Logo size='100'/>
      <Text style={styles.textHeader}>¡Hola, Juan!</Text>
    </View>
  )
}

export default HeaderHome