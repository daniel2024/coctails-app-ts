import { StyleSheet } from "react-native";

const HEIGHT_BUTTON = 45;


const styles = StyleSheet.create({
    containerButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#ffdd69',
      height: HEIGHT_BUTTON,
      borderRadius: HEIGHT_BUTTON/2
    },
    textButton: {
        alignItems: 'center',
        justifyContent: 'center'
      }
  });

export default styles;