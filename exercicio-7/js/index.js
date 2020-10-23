const INPUT_ID_LIST = ['materia', 'nota']
const ERROR_EMPTY_FIELD_MESSAGE = [
    'Informe a matéria',
    'Informe a nota'
]

const start = () => {
    const btn = document.getElementById('addNota')
    btn.onclick = addNotaBtnListener
}

const addNotaBtnListener = () => {
    if (isValidForm()) {
        addNewMateria()
        clearFields()
        setFocus()
    }
}

const isValidForm = () => {
    for (let i = 0; i < INPUT_ID_LIST.length; i++) {
        if (!isValidField(i)) {
            return false
        }
    }

    return true
}

const isValidField = index => {
    const input = document.getElementById(INPUT_ID_LIST[index])
    if (isEmpty(input)) {
        alert(ERROR_EMPTY_FIELD_MESSAGE[index])
        return false
    }
    return true
}

const isEmpty = input => input.value.trim() === ''

const addNewMateria = () => {
    const table = document.getElementById('notas')
    const tr = document.createElement('tr')
    const tBody = table.tBodies[0]
    tBody.appendChild(tr)
    INPUT_ID_LIST.forEach(inputId => 
        createColumn(tr, document.getElementById(inputId).value)
    )
    //INPUT_ID_LIST = ['materia', 'nota']
    // for (let i = 0; i < INPUT_ID_LIST.length; i++) {
    //     let inputId = INPUT_ID_LIST[i]
    //     const input = document.getElementById(inputId)
    //     createColumn(tr, input.value)
    // }
}

const createColumn = (line, content) => {
    const td = document.createElement('td')
    td.innerHTML = content
    line.appendChild(td)
}

const clearFields = () => {
    INPUT_ID_LIST.forEach(inputId => 
        document.getElementById(inputId).value = ''
    )
}

const setFocus = () => document.getElementById(INPUT_ID_LIST[0]).focus()

start()