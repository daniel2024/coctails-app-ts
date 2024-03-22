import { Platform, StyleSheet } from "react-native";

const HEIGHT_CARD = 400;
const WIDTH_CARD = 315;

const styles = StyleSheet.create({
  container: {
    color: "#7D7D7D",
    justifyContent: "center",
    height: HEIGHT_CARD,
    borderRadius: 25,
    width: WIDTH_CARD,
    backgroundColor: "white",
    shadowColor: Platform.OS === "ios" ? "#000" : "#000000", // Darker shadow color for better visibility
    shadowOffset: { width: 0, height: 5 }, // Increase shadow offset for more distance
    shadowOpacity: Platform.OS === "ios" ? 0.8 : 0, // Higher opacity for a stronger shadow
    shadowRadius: Platform.OS === "ios" ? 5 : 0, // Larger blur radius for a softer and more prominent shadow
    elevation: Platform.OS === "android" ? 4 : 0, // Higher elevation for Android (optional)
    overflow: "hidden",
    flex: 1,
    paddingTop: HEIGHT_CARD * 0.4,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#e9e9ea'
  },
  image: {
    position: "absolute",
    borderTopLeftRadius: HEIGHT_CARD / WIDTH_CARD,
    borderTopRightRadius: HEIGHT_CARD / WIDTH_CARD,
    width: "100%",
    height: HEIGHT_CARD * 0.4,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  containerDetails: {
    paddingTop: 10,
    width: "100%",
    height: HEIGHT_CARD * 0.6,
    paddingHorizontal: 10,
    gap: 15,
  },
  textTitle: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
  },
  textParagraph: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    textAlign: "left",
  },
  buttonContainer: {
    marginHorizontal: 100,
  },
});
export default styles;
