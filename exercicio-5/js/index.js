let guestList = []

const start = () => {
  const button = document.getElementById('btnAdd')
  button.onclick = addButtonEventListener

  const inputName = document.getElementById('guest')
  inputName.onkeydown = hideRequiredFieldMessage
}

const addButtonEventListener = () => {
  const input = document.getElementById('guest')
  const guestName = input.value.trim()
  
  if (isEmpty(guestName)) {
    showRequiredFieldMessage()

  } else if (isNameInTheArray(guestName)) {
    hideRequiredFieldMessage()
    alert('Este convidado já está na lista!')
  
  } else {
    hideRequiredFieldMessage()
    addNewGuestInArray(guestName)
    addNewGuestInUl2(guestName)
    clearAndFocus(input)
  }
}

const isEmpty = guestName => guestName.trim() === ''

const isNameInTheArray = guestName => guestList.includes(guestName)

const addNewGuestInArray = guestName => {
  guestList.push(guestName)
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

const addNewGuestInUl = guestName => {
  const ul = document.getElementById('guestListElement')
  let li = document.createElement('li')
  let textNode = document.createTextNode(guestName)
  li.appendChild(textNode)
  ul.appendChild(li)
}

const addNewGuestInUl2 = guestName => {
  const ul = document.getElementById('guestListElement')
  ul.innerHTML += '<li>' + guestName + '</li>'
}

start()