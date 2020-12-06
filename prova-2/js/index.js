let balance = 0

const start = () => {
  const button = document.getElementById('saveButton')
  button.onclick = saveBill
}

const saveBill = () => {
  const description = document.getElementById('description').value
  const value = document.getElementById('value').value
  const dueDate = document.getElementById('dueDate').value
  const type = document.getElementById('type').value

  addNewRow(description, value, dueDate, type)
  updateBalance(type, value)
}

const addNewRow = (description, value, dueDate, type) => {
  const tBody = document.getElementById('bills').tBodies[0]
  const tr = document.createElement('tr')
  tBody.appendChild(tr)
  
  const tdDescription = createTd(tr, description)
  const tdValue = createTd(tr, value)
  const tdDueDate = createTd(tr, dueDate)
  const tdType = createTd(tr, type)
}

const createTd = (tr, content) => {
  const td = document.createElement('td')
  const text = document.createTextNode(content)
  td.appendChild(text)
  tr.appendChild(td)
}

const updateBalance = (type, value) => {
  let v = parseFloat(value)
  if (type === 'Despesa') {
    v *= -1
  }
  
  balance += v
  const span = document.getElementById('balance')
  span.innerHTML = balance
}

start()