import React from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons"; // Usamos Feather icons, pero puedes usar cualquier conjunto de iconos que prefieras
import styles from "./styles";

interface SearchProps extends TextInputProps {}

const SearchInput = ({ ...props }: SearchProps) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="#6b6b6b" style={styles.icon} />
      <TextInput {...props} placeholder="Buscar..." style={styles.input} />
    </View>
  );
};

export default SearchInput;
