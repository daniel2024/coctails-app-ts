import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#000',
      gap:70,
      
    },
    containerInputs:{
      paddingHorizontal:15,
      flex:1,
      backgroundColor:''
    },
    title:{
      textAlign:'center',
      color:'white',
      fontSize: 18,
      fontWeight:'600'

    },
    recoveryPasswordText:{
      color:'white',
      fontSize: 12,
      textAlign:'center',
      paddingTop: 15
    },

    label: {
      paddingBottom: 15,
      color: '#fff',
      fontSize: 16,
      width:'100%',
    },
    inputEmail: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 50/2,
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 10,
      
    },
    button: {
      marginBottom:100,
    },
    contPassword: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor:'white',
      height: 50,
      borderRadius:50/2,
    },
    inputPassword: {
      height: 50,
      width: 220,
    },
    icon: {

    },
  });


  export default styles;