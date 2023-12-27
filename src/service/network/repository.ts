
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";

/**
 * Авторизация по логину и паролю
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
export const signEmailPass = async (email: string, password: string) => {
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error('Ошибка авторизации:', error.message);
    throw error;
  }
};

/**
 * Выходим из аккаунта FireBase
 * @returns 
 */
export const logOut = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
    return false
  } catch (error) {
    console.error("Ошибка выхода из системы", error);
    return true
  }
};
