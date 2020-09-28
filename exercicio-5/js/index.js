let guestList = []

const start = () => {
  const button = document.getElementById('btnAdd')
  button.onclick = addButtonEventListener

  const inputName = document.getElementById('guest')
  inputName.onkeydown = hideRequiredFieldMessage
}

const addButtonEventListener = () => {
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

const isEmpty = guestName => guestName.trim() === ''

const isNameInTheArray = guestName => guestList.includes(guestName)

const addNewGuest = guestName => {
  guestList.push(guestName)
  console.log(guestList)
}

const clearAndFocus = input => {
  input.value = ''
  input.focus()
}

const showRequiredFieldMessage = () => {
  const p = document.getElementById('requiredFieldMessage')
  p.className = ''
}

const hideRequiredFieldMessage = () => {
  const p = document.getElementById('requiredFieldMessage')
  p.className = 'hidden'
}

start()