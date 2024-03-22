import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import useForm from "../hooks/useForm";
import Button from "../../Button";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { login } from "../../../services/auth";
import useToggle from "../../../hooks/useToggle";

interface SingInValues {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [statePassword, setStatePassword] = useState<boolean>(true);
  const { handleChange, values } = useForm<SingInValues>({
    email: "",
    password: "",
  });
  const { email, password } = values;
  const navigation = useNavigation();

  const [loading, toggleLoading] = useToggle();

  const handleLogin = async () => {
    toggleLoading();
    login(values)
      .then((user) => {
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.error("Login failed", err);
      })
      .finally(() => {
        toggleLoading();
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa tus datos</Text>

      <View style={styles.containerInputs}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.inputEmail}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.contPassword}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Contraseña"
            value={password}
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry={statePassword}
          />
          <Feather
            onPress={() => setStatePassword(!statePassword)}
            style={styles.icon}
            name={statePassword ? "eye-off" : "eye"}
            size={24}
            color="#6b6b6b"
          />
        </View>
        <Text style={styles.recoveryPasswordText}>Olvide mi contraseña</Text>
      </View>

      <Button
        disabled={loading}
        text="Iniciar sesión"
        onPress={handleLogin}
        style={styles.button}
      />
    </View>
  );
};

export default SignInForm;
