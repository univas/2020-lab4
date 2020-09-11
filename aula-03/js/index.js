alert('ALERT de dentro do arquivo index.js')
console.log('Minha primeira impressão no console')

var cpf = 1111111111
console.log(cpf)

cpf = 'XPTO'
console.log(cpf)

cpf = 1234

let nome = "João"
console.log(nome)

nome = true

let nomes = []

let student = {
  name: 'Rodrigo',
  email: 'rodrigo@gmail.com'
}
console.log(student)

let idade = null
console.log(idade)

const urlServer = 'http://univas.edu.br/api/v1/aluno'
console.log(urlServer)

function printHello() {
  console.log('Hello World!!!')
  
  //let x = 10

  /*
  if (x === 10) {
    var capital = 'Pouso Alegre'
    let cidade = 'Cambuí' 
  }
  console.log('A capital é: ' + capital)
  console.log('A cidade é: ' + cidade)
  */

  if (cpf == 'XPTO') {
    console.log('Seu CPF é uma String invalida!')

  } else if (cpf === '1234') {
    console.log('Seu CPF é um número invalido!')
  }

  if (cpf != '1234') {
    console.log('entrei no diferente')
  } else if (cpf !== '1234') {
    console.log('entrei no diferente 2.0')
  }
}

function soma(a, b) {
  return a + b
}

printHello()

let total = soma(10, 15)
console.log(total)

total = soma('20', 35)
console.log(total)

function imprimeAlunos() {
  let notas = [25, 12, 33, 16, 32, 10]

  console.log(':::FOR:::')
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] === 33) {
      continue
    }

    if (i === 4) {
      break
    }
    console.log('Nota do pião: ' + notas[i])
  }

  console.log(':::WHILE:::')
  let i = 0
  while (i < notas.length) {
    console.log('Nota do pião: ' + notas[i])
    i++
  }

  console.log(':::DO/WHILE:::')
  i--
  do {
    console.log('Nota do pião: ' + notas[i])
    i--
  } while (i >= 0)  
}

imprimeAlunos()

let today = new Date()
console.log(today)
