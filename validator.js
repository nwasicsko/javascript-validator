login = () => {
  var uname = document.getElementById("uname");
  var pword = document.getElementById("pword");
  user = {
    username: "jcash",
    password: "1234"
  }
  if (uname.value.length != user.username && pword.value.length >= user.password){
    alert("username and password are incorrect!");
  } else if (pword.value != user.password){
    alert("password is incorrect");
  }
};
signup = () => {
  var uname = document.getElementById("uname");
  var pword = document.getElementById("pword");
  if (uname.value.length && pword.value.length >= 10){
    alert("username and password is not long enough!");
  } else if (uname != 10){
    alert("username is not long enough!");
  } else if (uname != 25) {
    alert("password is not long enough!");
  }
};