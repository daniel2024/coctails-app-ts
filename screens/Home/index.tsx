import React, { useState } from "react";
import styles from "./styles";
import { Text, View, ScrollView } from "react-native";
import Card from "../../components/Card/Card";
import SearchInput from "../../components/SearchInput";
import TagButton from "../../components/TagButton";
import useGetRankingDrinks from "../../services/hooks/useGetRankingDrinks";
import { useNavigation } from "@react-navigation/core";
import { useFilters } from "../../context/Filter";

const filters = [
  {
    label: "Por Nombre",
    id: "name",
  },
  {
    label: "Por Ingrediente",
    id: "ingredient",
  },
  {
    label: "Por Categoria",
    id: "category",
  },
];

const Home = () => {
  const navigation = useNavigation();
  const { data: drinksRanking } = useGetRankingDrinks();
  const { filters: globalFilters, updateFilters } = useFilters();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchBar}>
          <Text style={styles.title}>
            Ecuentra las mejores recetas en Cócteles
          </Text>
          <Text style={styles.description}>
            ¿Que trago te gustaria preparar hoy?
          </Text>
          <SearchInput onFocus={() => navigation.navigate("SearchDrinks")} />
        </View>
        <ScrollView
          contentContainerStyle={styles.filters}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Text style={styles.filterText}>Filtros</Text>
          {filters.map((tagFilter) => (
            <TagButton
              active={globalFilters.filterKey === tagFilter.id}
              text={tagFilter.label}
              onPress={() => updateFilters({ filterKey: tagFilter.id })}
              key={tagFilter.id}
            />
          ))}
        </ScrollView>
        <View style={styles.mostChosen}>
          <Text style={styles.mostChosenText}>Los tragos más elegidos</Text>

          {drinksRanking?.map((drink) => (
            <Card
              key={drink.idDrink}
              name={drink.strDrink}
              imgUrl={drink.strDrinkThumb}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
