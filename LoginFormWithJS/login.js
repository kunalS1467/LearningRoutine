function validateForm() {
  let username = document.forms["login"]["username"].value;
  let password = document.forms["login"]["password"].value;
  if (username == "kunal" && password == "kunal") {
    alert("Welcome back! Kunal");
  } else {
    alert("Bye Bye");
  }
}
