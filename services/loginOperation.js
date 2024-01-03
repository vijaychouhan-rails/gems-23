import axios from "axios";
import Cookies from "universal-cookie";

export const loginOperation = async ({ email, password }) => {
  const cookies = new Cookies(null, { path: "/" });

  try {
    const res = await axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    });
    cookies.set("gems", res.data.token);
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
