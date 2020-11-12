const STUDENT_DATA_KEY = 'STUDENT_DATA_KEY'
let studentData = []
let studentIdEditing

const start = () => {
  document.getElementById('saveBtn').onclick = saveButtonListener
  loadStudentData()
}

const saveButtonListener = () => {
  const inputName = document.getElementById('studentName')
  const inputEmail = document.getElementById('studentEmail')

  saveStudentInArray(inputName.value, inputEmail.value)
  populateTable()
  inputName.value = ''
  inputEmail.value = ''
}

const saveStudentInArray = (studentName, studentEmail) => {
  if (!studentIdEditing) {
    const student = {
      id: (new Date()).getTime(),
      name: studentName,
      email: studentEmail
    }
  
    studentData.push(student)

  } else {
    const user = getUserInArray(studentIdEditing)
    user.name = studentName
    user.email = studentEmail

    studentIdEditing = null
  }

  saveStudentDataInLocalStorage()
}

const saveStudentDataInLocalStorage = () => {
  const stringStudentData = JSON.stringify(studentData)
  localStorage.setItem(STUDENT_DATA_KEY, stringStudentData)
}

const populateTable = () => {
  const table = document.getElementById('studentsTable')
  const tBody = table.tBodies[0]
  tBody.innerHTML = ''

  studentData.forEach(student => {
    const tr = document.createElement('tr')
    const nameColumn = document.createElement('td')
    const nameTextNode = document.createTextNode(student.name)
    const emailColumn = document.createElement('td')
    const emailTextNode = document.createTextNode(student.email)
    const editColumn = document.createElement('td')
    const editButton = document.createElement('input')
    editButton.type = 'button'
    editButton.value = 'Editar'
    editButton.onclick = editButtonListener
    const idHiddenInput = document.createElement('input')
    idHiddenInput.type = 'hidden'
    idHiddenInput.className = 'hidden'
    idHiddenInput.value = student.id

    const deleteColumn = document.createElement('td')
    const deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Excluir'
    deleteButton.onclick = deleteButtonListener
  
    nameColumn.appendChild(nameTextNode)
    emailColumn.appendChild(emailTextNode)
    editColumn.appendChild(editButton)
    editColumn.appendChild(idHiddenInput)
    deleteColumn.appendChild(deleteButton)
    tr.appendChild(nameColumn)
    tr.appendChild(emailColumn)
    tr.appendChild(editColumn)
    tr.appendChild(deleteColumn)
    tBody.appendChild(tr)
  })
}

const loadStudentData = () => {
  const data = localStorage.getItem(STUDENT_DATA_KEY)
  if (data) {
    studentData = JSON.parse(data)
    populateTable()
  }
}

const editButtonListener = event => {
  const userId = getUserId(event)
  studentIdEditing = userId

  const user = getUserInArray(userId)

  const inputName = document.getElementById('studentName')
  inputName.value = user.name
  
  const inputEmail = document.getElementById('studentEmail')
  inputEmail.value = user.email
}

const deleteButtonListener = event => {
  const deleteButton = event.target
  const td = deleteButton.parentNode
  const tr = td.parentNode
  const inputHidden = tr.getElementsByClassName('hidden')[0]
  const userId = inputHidden.value

  const index = studentData.findIndex(user => user.id == userId)
  studentData.splice(index, 1)
  
  saveStudentDataInLocalStorage()
  populateTable()
}

const getUserId = event => event.target.nextSibling.value

const getUserInArray = userId => studentData.find(user => user.id == userId)

start()
