export const signIn = (data) => ({
  type: "SIGN_IN",
  payload: data,
});

export const signUp = (data) => ({
  type: "SIGN_UP",
  payload: data,
});

export const logout = () => ({
  type: "LOGOUT",
});
