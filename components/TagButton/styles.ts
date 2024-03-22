import { Platform,StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      color: '#7D7D7D',
      width: 150,
      height: 35,
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 35/2,
      backgroundColor: '#ffff',
      justifyContent: 'center',      
    },
    text: {
      fontSize: 15,
      textAlign: 'center',
    },
    activeContainer:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.6, 
    shadowRadius: 6, 
    elevation: 5, 
    backgroundColor:'#6b6b6b',
    borderWidth:0,
    borderColor:"rgba(0, 0, 0, 0.1)", 
    borderLeftWidth:2,
    borderRightWidth:2,
    borderBottomWidth:2, 
    },
    textActive:{
      color:'white',
    }
  });
  export default styles;