let categoryId = null

const start = () => {
  loadDataFromServer()

  $('#saveButton').click(saveNewCategory)
}

const loadDataFromServer = () => {
  $.get('https://financial-control-api-node.herokuapp.com/api/v1/categories', data => {
    populateTable(data)

    setOnClickButtons()
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
        <input type="button" value="Editar" class="editButton" name="${item.id}">
      </td>
      <td>
        <input type="button" value="Excluir" class="deleteButton" name="${item.id}">
      </td>
    </tr>`)
  })
}

const saveNewCategory = () => {
  const category = {
    name: $('#categoryName').val()
  }

  if (categoryId === null) {
    $.post('https://financial-control-api-node.herokuapp.com/api/v1/categories', category)
      .done(() => loadDataFromServer())
  } else {
    edit(category)
    categoryId = null
  }
  
  $('#categoryName').val(null) 
}

const setOnClickButtons = () => {
  $('.deleteButton').click(deleteCategory)

  $('.editButton').click(editCategory)
}

const deleteCategory = event => {
  const deleteButton = event.target

  $.ajax({
    url: `https://financial-control-api-node.herokuapp.com/api/v1/categories/${deleteButton.name}`,
    type: 'DELETE',
    success: () => {
      alert('Categoria excluida com sucesso!')
      loadDataFromServer()
    },
    error: () => {
      alert('Falha ao excluir a categoria!')
    }
  })
}

const editCategory = event => {
  const editButton = event.target
  const td = editButton.parentNode
  const tr = td.parentNode
  const columnsByLine = tr.getElementsByTagName('td')
  const columnCategoryName = columnsByLine[0]

  $('#categoryName').val(columnCategoryName.innerHTML)
  
  categoryId = editButton.name
}

const edit = category => {
  $.ajax({
    url: `https://financial-control-api-node.herokuapp.com/api/v1/categories/${categoryId}`,
    type: 'PUT',
    data: category,
    success: () => {
      alert('Categoria editada com sucesso!')
      loadDataFromServer()
    },
    error: () => {
      alert('Falha ao editar a categoria!')
    }
  })
}

start()