console.log("login.js loaded");

let userLogin = {
  name: "John",
  password: "Doe"
};

function login() {
  let passwd = "";

  for (let i = 0; i < 3; i++) {
    passwd = prompt(`Enter password for user ${userLogin.name}.`);
    if (passwd === userLogin.password) {
      alert(`Welcome back ${userLogin.name}`);
      return;
    }
    else {
      if (i == 2) {
        break;
      }
      alert("!Authentication failed.");
    }
  }

  alert("Reached Maximum attempts. Good Bye");
}

login();
