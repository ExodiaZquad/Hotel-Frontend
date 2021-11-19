import axios from "axios";

const apiUrl = "https://hotel-backend-api.herokuapp.com/";
const apiLogin = apiUrl + "api/token/";
const apiRegister = apiUrl + "api/register/";

export const login = async (usernameCheck, passwordCheck) => {
  const user_name = usernameCheck;
  const password = passwordCheck;

  const { data: token } = await axios.post(apiLogin, {
    user_name,
    password,
  });

  console.log(token);

  localStorage.setItem("token", token.access);
};

export const register = async (data) => {
  const header = {
    user_name: data.username,
    password: data.password,
    email: data.email,
    first_name: data.firstname,
    last_name: data.lastname,
    tel: data.tel,
  };
  console.log(header);
  const res = await axios.post(apiRegister, header);
  console.log(res);
};

export const isAuthen = () => {
  try {
    const token = localStorage.getItem("token");
    return token;
  } catch (ex) {
    return null;
  }
};

const exportObject = {
  login,
  register,
  isAuthen,
};

export default exportObject;
