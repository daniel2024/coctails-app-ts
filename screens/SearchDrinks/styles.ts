import { Dimensions, Platform, StyleSheet } from "react-native";

const WIDTH_SCREEN = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
  },
  description: {
    marginVertical: 20,
  },
  searchBar: {
    padding: 10,
    flexDirection:'row',
    width:'100%'
  },
  containerSearchInput:{
    width:'80%'
  },
  buttonCancel:{
    width:'20%',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:5
  },
  mostChosen: {
    paddingHorizontal: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
  mostChosenText: {
    marginBottom: 20,
    fontSize: 20,
  },
  card: {
    marginHorizontal: 10,
    marginTop: 10,
    height: 150,
    width: WIDTH_SCREEN - 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: Platform.OS === "ios" ? "#000" : "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: Platform.OS === "ios" ? 0.8 : 0,
    shadowRadius: Platform.OS === "ios" ? 8 : 0,
    elevation: Platform.OS === "android" ? 4 : 0,
    paddingHorizontal: 10,
    paddingVertical: 12,
    flexDirection: "column",
    gap: 10,
  },
  itemLastSearch: {
    flexDirection: "row",
    gap: 10,
  },
  textLastSearch: {
    color: "#000",
  },
  containerDrinks: {
    flexDirection:'row',
    gap:15,
    paddingVertical:10
  },
});

export default styles;
