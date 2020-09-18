start()

function start() {
  let button = document.getElementById('saveBtn')
  console.log(button.value)
  
  button.onclick = function() {
    let input = document.getElementById('inputName')
    console.log(input.value)
    input.value = 'arroz'
  }

  let somaButton = document.getElementById('calcSoma')
  somaButton.onclick = function() {    
    imprimeResultado(1)
  }

  let subButton = document.getElementById('calcSub')
  subButton.onclick = function() {
    imprimeResultado(2)
  }

  let multButton = document.getElementById('calcMult')
  multButton.onclick = function() {    
    imprimeResultado(3)
  }

  let divButton = document.getElementById('calcDiv')
  divButton.onclick = function() {
    imprimeResultado(4)
  }
}

function imprimeResultado(option) {
  let inputC = document.getElementById('numberC')
  inputC.value = executaCalculo(option)
}

function executaCalculo(option) {
  let inputA = document.getElementById('numberA')
  let inputB = document.getElementById('numberB')

  if (inputA.value.trim() === '' || inputB.value.trim() === '') {
    alert('Por favor, preencha todos os campos!')
    return null
  }

  let valorInputA = parseFloat(inputA.value)
  let valorInputB = parseFloat(inputB.value)

  if (option === 1) {
    return valorInputA + valorInputB
  } else if (option === 2) {
    return valorInputA - valorInputB
  } else if (option === 3) {
    return valorInputA * valorInputB
  } else {
    if (valorInputB === 0) {
      alert('Não é possível dividir por zero!')
      return 0      
    }
    return valorInputA / valorInputB
  }
}