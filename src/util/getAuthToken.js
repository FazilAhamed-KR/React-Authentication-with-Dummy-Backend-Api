import { redirect } from "react-router-dom";

export function getDurationToken() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getDurationToken();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function AuthToken() {
  const token = getAuthToken();
  return token;
}

export function checkAuthToken() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
}
