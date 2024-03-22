import { useMemo } from "react";
import useAsync from "../../hooks/useAsync";
import {
  getDrinksByIngredients,
  getDrinksByName,
  getDrinksByCategory,
} from "../drinks";

const useGetRankingDrinks = (
  search: string = "",
  filterType: string = "name"
) => {
  const getDrinks = useMemo(() => {
    if (!search.length) return () => [];
    switch (filterType) {
      case "name":
        return getDrinksByName;
      case "ingredient":
        return getDrinksByIngredients;
      case "category":
        return getDrinksByCategory;

      default:
        return () => {};
    }
  }, [filterType, search]);

  const { data, error, loading } = useAsync(
    async () => await getDrinks(search),
    [search]
  );
  return { data, error, loading };
};

export default useGetRankingDrinks;
