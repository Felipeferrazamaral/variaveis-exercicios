

let nomeCompleto = prompt('Digite seu nome completo')
let dataDeNascimento = prompt('Digite sua data de nascimento')
let endereco = prompt('Digite seu endereco')
let cpf = prompt('Digite seu cpf')
let escolaridade = prompt('Digite sua escolaridade')
let cnh = confirm ('Voce possui cnh?')
let filhos = Number (prompt('Quantos filhos voce possui'))
let cargoAtual = prompt('Digite seu cargo atual')
let salario = Number (prompt('Digite seu salario'))
let comissao = Number (prompt('Voce recebe comissao? Se sim, informe a porcetagem, caso nao, responda com zero'))
let anoDeAdmissao = Number (prompt('Informe o ano de admissao'))

console.log(typeof nomeCompleto, typeof dataDeNascimento, typeof endereco, typeof cpf, typeof escolaridade, typeof cnh, typeof filhos,
    typeof cargoAtual, typeof salario, typeof comissao, typeof anoDeAdmissao )

console.log ('Nome', nomeCompleto)
console.log ('Data de Nascimento', dataDeNascimento)
console.log ('endereco', endereco)
console.log ('cpf', cpf)
console.log ('escolaridade', escolaridade)
console.log ('cnh', cnh)
console.log ('filhos',filhos)
console.log ('Cargo Atual', cargoAtual)
console.log ('salario', salario)
console.log ('comissao', comissao)
console.log ('Ano de Admissao', anoDeAdmissao)
