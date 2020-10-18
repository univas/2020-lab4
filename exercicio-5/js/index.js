let guestList = []

const start = () => {
  const button = document.getElementById('btnAdd')
  button.onclick = addButtonEventListener

  const inputName = document.getElementById('guest')
  inputName.onkeydown = hideRequiredFieldMessage

  const guestForm = document.getElementById('guestForm')
  guestForm.onsubmit = listenerFormSubmit
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
    addNewGuestInUl(guestName)
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
  let image = document.createElement('img')
  image.src = 'images/delete-icon.png'
  image.className = 'icon'
  image.onclick = removeGuest
  li.appendChild(textNode)
  li.appendChild(image)
  ul.appendChild(li)
}

// const addNewGuestInUl2 = guestName => {
//   const ul = document.getElementById('guestListElement')
//   ul.innerHTML += '<li>' + guestName + '</li>'
// }

const removeGuest = event => {
  let targetElement = event.target
  let textNode = targetElement.previousSibling
  let guestName = textNode.nodeValue
  if (confirm('Deseja realmente deletar o convidado ' + guestName)) {
    let li = targetElement.parentNode
    let ul = li.parentNode
    ul.removeChild(li)
  }
}

const listenerFormSubmit = event => {
  event.preventDefault()
  addButtonEventListener()
}

start()