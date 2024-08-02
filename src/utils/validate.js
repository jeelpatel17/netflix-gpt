// Validate the login form

export const validateData = (email, pwd) => {
  const emailValid = /^\S+@\S+\.\S+$/.test(email);
  const pwdValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(pwd);

  if (!emailValid) return ["Email address is not valid!", 0];
  if (!pwdValid) return ["Password is not valid!", 1];

  return null;
};
