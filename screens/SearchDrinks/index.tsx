import { View, Text, TouchableOpacity } from "react-native";
import ReactI, { useEffect } from "react";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import SearchInput from "../../components/SearchInput";
import { FontAwesome6 } from "@expo/vector-icons";
import { getStoreData } from "../../config/storage";
import useAsync from "../../hooks/useAsync";
import CardDrink from "../../components/Card/Card";
import { DrinkApi } from "../../services/interface/Drinks";
import { useFilters } from "../../context/Filter";
import useDebounce from "../../hooks/useDebounce";
import { useNavigation } from "@react-navigation/core";

const SearchDrinks = () => {
  const { filters, updateFilters } = useFilters();
  const { data: history = [] } = useAsync<DrinkApi[]>(
    async () => await getStoreData("history-app")
  );
  const { searchQuery, filterKey } = filters;
  const navigation = useNavigation();
  const searchQueryDebounce = useDebounce(searchQuery, 1000);

  useEffect(() => {
    if (searchQueryDebounce?.length) {
      navigation.navigate("ResultSearchDrinks");
    }
  }, [searchQueryDebounce, filterKey]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchBar}>
          <View style={styles.containerSearchInput}>
            <SearchInput
              value={filters.searchQuery}
              onChangeText={(text) => updateFilters({ searchQuery: text })}
            />
          </View>
          <View style={styles.buttonCancel}>
            <TouchableOpacity>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          {history?.map((item) => (
            <View style={styles.itemLastSearch} key={item.idDrink}>
              <FontAwesome6
                name="clock-rotate-left"
                size={24}
                color="#6b6b6b"
              />
              <Text style={styles.textLastSearch}>{item.strDrink}</Text>
            </View>
          ))}
        </View>

        <View style={styles.mostChosen}>
          <Text style={styles.mostChosenText}>Tus Ultimas Búsquedas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.containerDrinks}>
              {history?.map((drink) => (
                <CardDrink
                  key={drink.idDrink}
                  name={drink.strDrink}
                  imgUrl={drink.strDrinkThumb}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchDrinks;
