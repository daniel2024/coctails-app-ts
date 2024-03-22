import React from "react";
import styles from "./styles";
import { Text, View, Image } from "react-native";
import Button from "../Button";

interface CardProps {
  imgUrl?: string;
  name: string;
}

const CardDrink = ({ imgUrl, name }: CardProps) => {
  const toggleIsOpenForm = () => {};

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            imgUrl ||
            "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg",
        }}
        style={styles.image}
      />
      <View style={styles.containerDetails}>
        <Text style={styles.textTitle}>{name}</Text>
        <Text style={styles.textParagraph}>
          El jugo de limon con la mezcla de plátano no tienen comparacion.
          Excelente para acompañar tardes de verano. El jugo de limon con la
          mezcla de plátano no tienen comparacion. Excelente para acompañar
          tardes de verano.
        </Text>
        <Button
          text="Ver receta"
          onPress={toggleIsOpenForm}
          style={styles.buttonContainer}
        />
      </View>
    </View>
  );
};

export default CardDrink;
