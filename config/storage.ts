import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar un valor
export const setStoreData = async (value: any,nameKey:string): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);

    await AsyncStorage.setItem(`@${nameKey}`, jsonValue);
  } catch (e) {
    // manejar el error
    console.error(e);
  }
};

// Leer un valor
export const getStoreData = async (nameKey:string): Promise<any | null> => {
  try {
    const jsonValue =  await AsyncStorage.getItem(`@${nameKey}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // manejar el error
    console.error(e);
    return null;
  }
};