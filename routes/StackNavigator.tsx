import { createStackNavigator } from "@react-navigation/stack";
import HeaderHome from "../components/HeaderHome";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SearchDrinks from "../screens/SearchDrinks";
import ResultSearchDrinks from '../screens/ResultSearchDrinks';

const Stack = createStackNavigator();

const StackCocktails = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: HeaderHome }}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="SearchDrinks"
        component={SearchDrinks}
        options={{
          title: "Búsqueda",
          headerStyle: { backgroundColor: "#000", height: 150 },

          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="ResultSearchDrinks"
        component={ResultSearchDrinks}
        options={{
          title: "Resultado de la Búsqueda",
          headerStyle: { backgroundColor: "#000", height: 150 },

          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackCocktails;
