const eyeBtn = document.getElementById("eye-btn");
const passwordField = document.getElementById("password");

eyeBtn.addEventListener("click",(e)=>{
  if (passwordField.type === "password")
  {
    e.target.setAttribute("class","fas fa-eye-slash");
    passwordField.type ="text";
  }
  else {
    e.target.setAttribute("class","fas fa-eye");
    passwordField.type ="password";
  }
});
