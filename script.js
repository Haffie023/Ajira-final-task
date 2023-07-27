const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
  ];
  
  function showForm(formId) {
    const forms = ["signupForm", "loginForm", "resetPasswordForm"];
    forms.forEach((form) => {
      if (form === formId) {
        document.getElementById(form).style.display = "block";
      } else {
        document.getElementById(form).style.display = "none";
      }
    });
  }
  
  function signUp() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const isUsernameTaken = users.some((user) => user.username === username);
    if (isUsernameTaken) {
      alert("Username already taken. Please choose a different one.");
      return false;
    }

    users.push({ username, password });
    alert("Sign up successful. You can now log in.");
    showForm("loginForm");
    return false;
  }
  
  function logIn() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
      alert("Invalid username or password. Please try again.");
      return false;
    }
  
    alert("Log in successful!");
  
    return false;
  }
  
  function resetPassword() {
    const username = document.getElementById("resetUsername").value;
    const newPassword = document.getElementById("newPassword").value;
  
    const userIndex = users.findIndex((user) => user.username === username);
    if (userIndex === -1) {
      alert("User not found. Please check the username and try again.");
      return false;
    }
  
    users[userIndex].password = newPassword;
    alert("Password reset successful. You can now log in with the new password.");
    showForm("loginForm");
    return false;
  }
  
  function logOut() {
    alert("Log out successful!");
    location.reload();
  }
  