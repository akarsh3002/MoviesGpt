export const checkValidData = (name,email, password) => {
  const nameRegex = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
  const isValidName = nameRegex.test(name);
  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);
  if (!isValidName) {
    return "Invalid Name Format";
  }
  if (!isValidEmail) {
    return "Invalid Email";
  }
  if (!isValidPassword) {
    return "Invalid Password";
  }
  return null;
};
