import axios from "axios";

const apiUrl = "https://hotel-backend-api.herokuapp.com/";
const apiEndpoint = apiUrl + "api/token/";

export async function login(usernameCheck, passwordCheck) {
  const user_name = usernameCheck;
  const password = passwordCheck;

  const { data: token } = await axios.post(apiEndpoint, {
    user_name,
    password,
  });

  console.log(token);

  localStorage.setItem("token", token.access);
}

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
  isAuthen,
};

export default exportObject;
