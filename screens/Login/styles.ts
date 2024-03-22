import { Dimensions, StyleSheet } from "react-native";

const HEIGHT_SCREEN= Dimensions.get('screen').height 

const styles = StyleSheet.create({
    container: {
       backgroundColor: '#000',
       justifyContent: 'center',
       flex:1,
       height:HEIGHT_SCREEN
      
    },
    logo: {
      width: 180,
      height: 100,
      backgroundColor: 'red'
    },
    inputsForm: {
      alignItems: 'flex-start',
    },
    label: {
      paddingBottom: 20,
      paddingTop: 20,
      color: '#fff',
      fontSize: 16,
    },
    input: {
      color: 'white',
      width: 300,
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 50,
      backgroundColor: 'white',
      padding: 10,
    },
    buttonContainer: {
      marginHorizontal:50
    },
    buttonText: {
      color: '#0000',
      fontSize: 16,
    }
  });


  export default styles;