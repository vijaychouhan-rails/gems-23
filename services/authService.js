import axios from "axios";
import Cookies from "universal-cookie";

export const loginService = async ({ email, password }) => {
  try {
    const cookies = new Cookies(null, { path: "/" });
    const res = await axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    });
    cookies.set("gems23", res.data.token);
    return { success: true, message: "Successful login" };
  } catch (error) {
    if (error?.response?.status == 400) {
      return { success: false, message: "Invalid login credentials" };
    }
    return { success: false, message: error.message };
  }
};
