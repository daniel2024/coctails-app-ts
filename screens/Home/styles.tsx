import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        backgroundColor: 'white',
    },
    title: {
      fontSize: 30,
      fontWeight:'500'
    },
    description: {
      marginVertical:20
    },
    searchBar: {
      padding: 10,
      borderRadius: 10,
      // backgroundColor: 'yellow',
    },
    searchInput: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 5,
    },
    filters: {
      padding: 10,
      flexDirection:'row',
      gap:10,
      alignItems:'center'    
    },
    filterText: {
      fontSize: 16,
      alignItems: 'center',
    },
    mostChosen: {
      padding: 10,
      marginTop: 10
    },
    mostChosenText: {
      marginBottom:20,
      fontSize: 20,
      fontWeight: '700'
    }
  });

  export default styles;