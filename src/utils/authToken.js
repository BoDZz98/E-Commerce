import { signOut } from "firebase/auth";
import { redirect } from "react-router-dom";
import { auth } from "../firebase-config";

export  function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export async function logoutAction() {
  await signOut(auth)
  localStorage.removeItem("token");
  return redirect("/");
}