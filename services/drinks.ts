import { drinksApi } from "../config/api";
import { Drink, DrinkApi } from "./interface/Drinks";

export const getRankingDrinks = async (): Promise<DrinkApi[]> => {
  try {
    const { data } = await drinksApi.get<{ drinks: DrinkApi[] }>(`/random.php`);

    const drinks = data.drinks;

    return drinks;
  } catch (error) {
    throw new Error(`Error in get drinks`);
  }
};

export const getDrinksByCategory = async (search: string): Promise<Drink[]> => {
  try {
    const { data } = await drinksApi.get<{ drinks: DrinkApi[] }>(
      `/filter.php?c=${search}`
    );
    const drinks: Drink[] = data.drinks.map((drink) => ({
      id: drink.idDrink,
      title: drink.strDrink,
      imgSrc: drink.strDrinkThumb,
    }));

    return drinks;
  } catch (error) {
    throw new Error(`Error in get drinks`);
  }
};

export const getDrinksByIngredients = async (
  search: string
): Promise<Drink[]> => {
  try {
    const { data } = await drinksApi.get<{ ingredients: DrinkApi[] }>(
      `/search.php?i=${search}`
    );
    const drinks: Drink[] = data.ingredients.map((drink) => ({
      id: drink.idIngredient,
      title: drink.strIngredient,
      imgSrc: "",
    }));

    return drinks;
  } catch (error) {
    throw new Error(`Error in get drinks`);
  }
};

export const getDrinksByName = async (search: string): Promise<Drink[]> => {
  try {
    const { data } = await drinksApi.get<{ drinks: DrinkApi[] }>(
      `/search.php?s=${search}`
    );
    const drinks: Drink[] = data.drinks.map((drink) => ({
      id: drink.idDrink,
      imgSrc: drink.strDrinkThumb,
      title: drink.strDrink,
    }));

    return drinks;
  } catch (error) {
    throw new Error(`Error in get drinks`);
  }
};
