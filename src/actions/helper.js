 export const checkPasswordValidity = () => {
    let password = document.getElementById("password"),
      password_confirm = document.getElementById("password_confirm")

    if (password.value !== password_confirm.value) {
      password_confirm.setCustomValidity("Sorry, passwords don't match")
    } else {
      password_confirm.setCustomValidity("")
    }
  }

