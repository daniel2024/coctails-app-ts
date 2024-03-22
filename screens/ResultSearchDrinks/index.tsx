import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import SearchInput from "../../components/SearchInput";
import CardDrink from "../../components/Card/Card";
import { useFilters } from "../../context/Filter";
import useGetDrinks from "../../services/hooks/useGetDrinks";
import useDebounce from "../../hooks/useDebounce";

const ResultsDrinks = () => {
  const { filters, updateFilters } = useFilters();
  const { filterKey, searchQuery } = filters;
  const searchQueryDebounce = useDebounce(searchQuery, 1000);
  const { data: drinks } = useGetDrinks(searchQueryDebounce, filterKey);

  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
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

        <View style={styles.mostChosen}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.containerDrinks}>
              {drinks?.map((drink) => (
                <CardDrink
                  key={drink.id}
                  name={drink.title}
                  imgUrl={drink.imgSrc}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ResultsDrinks;
