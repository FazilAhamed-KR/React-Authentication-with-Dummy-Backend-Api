import { redirect } from "react-router-dom";

export function loaderToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/");
}
