import Credentials from "../Constants/credentials.json";

interface CredentialProps {
  email: string;
  password: string;
}

export const login = ({ email, password }: CredentialProps) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const credential = Credentials.find((cred) => cred.email === email);
      if (credential && credential?.password === password) {
        resolve({
          userId: 1,
          username: "admin",
          name: "Admin User",
          token: "fake-jwt-token",
        });
      } else {
        reject("Username or password is incorrect");
      }
    }, 3000); // Simula un delay de red de 1 segundo
  });
};
