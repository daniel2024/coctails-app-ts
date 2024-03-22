import useAsync from "../../hooks/useAsync";
import { getRankingDrinks } from "../drinks";

const useGetRankingDrinks = () => {
  const { data, error, loading } = useAsync(getRankingDrinks);
  return { data, error, loading };
};

export default useGetRankingDrinks;
