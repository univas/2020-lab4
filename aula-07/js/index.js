const start = () => {
  loadDataFromServer()

  $('#saveButton').click(saveNewCategory)
}

const loadDataFromServer = () => {
  $.get('https://financial-control-api-node.herokuapp.com/api/v1/categories', data => {
    populateTable(data)
  })
}

const populateTable = data => {
  const categoryTableBody = $('#categoryTableBody')
  $(categoryTableBody).empty()
  
  data.forEach(item => {
    $(categoryTableBody).append(`
    <tr>
      <td>${item.name}</td>
      <td>
        <input type="button" value="Editar">
      </td>
      <td>
        <input type="button" value="Excluir">
      </td>
    </tr>`)
  })
}

const saveNewCategory = () => {
  const category = {
    name: $('#categoryName').val()
  }
  
  $.post('https://financial-control-api-node.herokuapp.com/api/v1/categories', category)
    .done(() => loadDataFromServer())

  $('#categoryName').val(null) 
}

start()