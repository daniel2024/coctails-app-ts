export interface DrinkApi {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
  [key: string]: string;
}

export interface Drink {
  id: string;
  imgSrc: string;
  title: string;
}
