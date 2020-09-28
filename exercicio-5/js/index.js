let guestList = []

start()

function start() {
  const button = document.getElementById('btnAdd')
  button.onclick = function() {
    addButtonEventListener()  
  }

  const inputName = document.getElementById('guest')
  inputName.onkeydown = function() {
    hideRequiredFieldMessage()
  }
}

function addButtonEventListener() {
  const input = document.getElementById('guest')
  if (isEmpty(input.value)) {
    showRequiredFieldMessage()

  } else if (isNameInTheArray(input.value)) {
    hideRequiredFieldMessage()
    alert('Este convidado já está na lista!')
  
  } else {
    hideRequiredFieldMessage()
    addNewGuest(input.value)
    clearAndFocus(input)
  }
}

function isEmpty(guestName) {
  return guestName.trim() === ''
}

function isNameInTheArray(guestName) {
  return guestList.includes(guestName)
}

function addNewGuest(guestName) {
  guestList.push(guestName)
  console.log(guestList)
}

function clearAndFocus(input) {
  input.value = ''
  input.focus()
}

function showRequiredFieldMessage() {
  const p = document.getElementById('requiredFieldMessage')
  p.className = ''
}

function hideRequiredFieldMessage() {
  const p = document.getElementById('requiredFieldMessage')
  p.className = 'hidden'
}