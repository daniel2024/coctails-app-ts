import { StyleSheet, View } from "react-native";
import StackNavigator from "./routes/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { FilterProvider } from "./context/Filter";
import { useEffect } from "react";
import { getStoreData, setStoreData } from "./config/storage";
import history from "./Constants/history.json";
export default function App() {
  useEffect(() => {
    const initConfig = async () => {
      const store = await getStoreData("history-app");
      if (!store) {
       await setStoreData(history, "history-app");
      }
    };

    initConfig();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <FilterProvider>
          <StackNavigator />
        </FilterProvider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D7EA8",
  },
});
