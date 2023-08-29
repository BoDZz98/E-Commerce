import { redirect } from "react-router-dom";

export  function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function logoutAction() {
  console.log("in logout");
  localStorage.removeItem("token");
  return redirect("/");
}