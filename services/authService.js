import axios from "axios";
import Cookies from "js-cookie";

export const loginService = async ({ email, password }) => {
  try {
    const res = await axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    });
    Cookies.set("gemstoken", res.data.token, {
      expires: new Date(new Date().getTime() + 120 * 60 * 1000),
    });

    return { success: true, message: "Successful login" };
  } catch (error) {
    if (error?.response?.status == 400) {
      return { success: false, message: "Invalid login credentials" };
    }
    return { success: false, message: error.message };
  }
};
