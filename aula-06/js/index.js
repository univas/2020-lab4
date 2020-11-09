const STUDENT_DATA_KEY = 'STUDENT_DATA_KEY'
let studentData = []

const start = () => {
  document.getElementById('saveBtn').onclick = saveButtonListener
  loadStudentData()
}

const saveButtonListener = () => {
  const inputName = document.getElementById('studentName')
  const inputEmail = document.getElementById('studentEmail')

  saveStudentInArray(inputName.value, inputEmail.value)
  populateTable()
}

const saveStudentInArray = (studentName, studentEmail) => {
  const student = {
    name: studentName,
    email: studentEmail
  }

  studentData.push(student)
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
    const deleteColumn = document.createElement('td')
    const deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Excluir'
  
    nameColumn.appendChild(nameTextNode)
    emailColumn.appendChild(emailTextNode)
    editColumn.appendChild(editButton)
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

start()

//CRUD
//C = ok
//R = ok
//U = 
//D =
