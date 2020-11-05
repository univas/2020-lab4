const start = () => document.getElementById('saveUserName').onclick = saveUserNameListener

const saveUserNameListener = () => {
   const userName = document.getElementById('username').value
  alert('Olá ' + userName)

  localStorage.setItem("UNIVAS_USERNAME", userName)
  sessionStorage.setItem("OUTRA_CHAVE", userName)
}

const sayHello = () => {
  const savedUserName = localStorage.getItem("UNIVAS_USERNAME")
  if (savedUserName) {
    alert("Seja bem-vindo de volta " + savedUserName + "!!!")
  }
}

start()
sayHello()