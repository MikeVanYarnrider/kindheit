import axios from "axios";

const signup = (username, password, email) => {
  return axios
    .post("api/auth/signup", {
      username: username,
      password: password,
      email: email
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const signupChild = (childname, password, birthDate, profileImgUrl, parent ) => {
  return axios
    .post("api/auth/childsignup", {
      childname: childname,
      password: password,
      birthDate: birthDate,
      profileImgUrl: profileImgUrl,
      parent: parent
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const parentLogin = (username, password) => {
  return axios
    .post("/api/auth/parentlogin", {
      username: username,
      password: password
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const logout = () => {
  console.log("logoutauth")
  axios.delete("/api/auth/logout");
};

export { signup, parentLogin, logout, signupChild };
