let account = 0

const start = () => {
  const button = document.getElementById('saveButton')
  button.onclick = saveNewGuest
}

const saveNewGuest = () => {
  const name = document.getElementById('name').value
  const age = parseInt(document.getElementById('age').value, 10)

  addNewRow(name, age)
  updateAccount(age)
}

const isPagante = age => age > 12

const paganteColumn = age => isPagante(age) ? 'SIM' : 'NÃO'

const addNewRow = (name, age) => {
  const tBody = document.getElementById('accounts').tBodies[0]
  const tr = document.createElement('tr')
  tBody.appendChild(tr)
  
  createTd(tr, name)
  createTd(tr, age)
  createTd(tr, paganteColumn(age))
}

const createTd = (tr, content) => {
  const td = document.createElement('td')
  const text = document.createTextNode(content)
  td.appendChild(text)
  tr.appendChild(td)
}

const updateAccount = (age) => {
  if (isPagante(age)) {
    account += 15
    const span = document.getElementById('account')
    span.innerHTML = account
  }
  
}

start()