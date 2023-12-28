import jwtDecode from "jwt-decode";

export const checkToken = (params) => {
  if (!params) {
    return window.location.replace("http://localhost:8081");
  } else {
    const token = jwtDecode(params);

    const roles = token.roles_id;
    if (roles === 3) {
      return window.location.replace("http://localhost:8081/home-user");
    }
  }
};
