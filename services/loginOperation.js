import axios from "axios";
import Cookies from "js-cookie";

export const loginOperation = async ({ email, password }) => {
  try {
    const res = await axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    });
    Cookies.set("gems23", res.data.token, {
      expires: new Date(new Date().getTime() + 5 * 60 * 1000),
    });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
