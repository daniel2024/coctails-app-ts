import React from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import Logo from "../../components/Logo";
import useToggle from "../../hooks/useToggle";
import Button from "../../components/Button";
import SingIn from "../../components/Forms/SingIn";

const Login = () => {
  const [isOpenForm, toggleIsOpenForm] = useToggle(false);

  return (
    <ScrollView scrollEnabled={false}  >
      <View style={[styles.container, { paddingTop: isOpenForm ? 100 : 0 }]}>
        <Logo size={isOpenForm ? "200" : "400"} />
        {isOpenForm ? (
          <SingIn />
        ) : (
          <Button
            text="Iniciar sesión"
            onPress={toggleIsOpenForm}
            style={styles.buttonContainer}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Login;
