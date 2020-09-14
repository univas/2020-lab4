start()

function start() {
  let button = document.getElementById('saveBtn')
  console.log(button.value)
  
  button.onclick = function() {
    let input = document.getElementById('inputName')
    console.log(input.value)

    input.value = 'arroz'
  }

  let calcButton = document.getElementById('calc')
  calcButton.onclick = function() {
    let inputA = document.getElementById('numberA')
    let inputB = document.getElementById('numberB')
    let inputC = document.getElementById('numberC')

    //let valorInputA = parseInt(inputA.value, 10) //66.88 => 66
    //let valorInputB = parseInt(inputB.value, 10)
    let valorInputA = parseFloat(inputA.value) //66.88 => 66.88
    let valorInputB = parseFloat(inputB.value)

    let soma = valorInputA + valorInputB
    inputC.value = soma
  }
}