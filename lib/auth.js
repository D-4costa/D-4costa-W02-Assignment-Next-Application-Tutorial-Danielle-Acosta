// app/lib/auth.js
let loggedIn = false;

export function login(username, password) {
  if (username === "admin" && password === "1234") {
    loggedIn = true;
    return true;
  }
  return false;
}

export function logout() {
  loggedIn = false;
}

export function checkAuth() {
  return loggedIn;
}
