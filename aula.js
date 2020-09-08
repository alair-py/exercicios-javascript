// let nome = "Alair";
// console.log(nome);

// let idade = 29;
// console.log(idade);

// let address = "Rua do pagagaio, 45";
// console.log(address);

// let aprovado = true;
// console.log(aprovado);

// let corselecionada = null;
// console.log(corselecionada);


// let pessoa = {
//     nome: 'Rafael',
//     idade: 29,
//     endereco: 'Rua B'
// };

// console.log(pessoa);

// let dados = {
//     cpf: '12345678910',
//     estadocivil: 'solteiro',
//     cargo: 'Desenvolvedor'
// };

// console.log(dados);


// let familia = ['Alair', 'Junior', 'Maria', 'Nathalia', 'Thiago'];

// console.log(familia.length);

// console.log(familia[2]);


// let corSite = 'Azul';

// function resetaCor(cor, tonalidade ="escuro") {
//     corSite = cor + ' ' + tonalidade;
// };

// console.log(corSite);

// resetaCor('Verde');
// console.log(corSite);


// let nome2 = 'Alair';

// function trocaNome(pNome, sNome = 'Augusto') {
//     nome2 = pNome + ' ' + sNome;
// };

// console.log(nome2);

// trocaNome('Brian', 'Lima');
// console.log(nome2);


// function dizerNome(){
//     console.log('Alair');
// }

// dizerNome();

// function multiValor(valor){
//     return valor * 3;
// }

// let result = multiValor(5);
// console.log(result);

// function addSobrenome(nome){
//     return nome + ' Augusto';
// }

// let result1 = addSobrenome('Alair');
// console.log(result1);



// let salario = 100;
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(salario ** salario);

// let idade = 18;
// // console.log(idade++);
// // console.log(idade);

// console.log(++idade);
// console.log(--idade);


// let valor1 = 100;
// valor1 += valor1;
// console.log(valor1);

// console.log(1 === 1);
// console.log('1' === 1);
// console.log('1' == 1);
// console.log('1' == '1');

// let pontos = 99;
// tipo = pontos >= 100 ? 'Cliente Premium' : 'Cliente Comum';

// console.log(tipo);

// let maiorIdade = true;
// let possuiCnh = true;

// console.log(maiorIdade && possuiCnh);

// console.log(maiorIdade || possuiCnh);

// inscrito = !possuiCnh;
// console.log(inscrito);

// //FALSY:
// undefined
// null
// 0
// false
// ''
// NaN - Not a Number

// Truthy são todos não anteriores do Falsy!

// let corPersonalizada = 'Azul';
// let corPadrao = 'Preto';
// let corPerfil = corPadrao || corPersonalizada;

// console.log(corPerfil);

// let a = 'Vermelho';
// let b = 'Azul';
// let c = a;

// console.log(a);
// console.log(b);

// a = b;
// b = c;

// console.log(a);
// console.log(b);


// let hora = 22;

// if (hora > 6 && hora < 12) {
//     console.log('Bom dia');
// }
// else if (hora > 12 && hora < 18) {
//     console.log('Boa tarde');
// }
// else {
//     console.log('Boa noite');
// }

// let idade = 15;

// if (idade < 18) {
//     console.log('Menor de idade');
// }
// else {
//     console.log('Maior de idade');
// }

// let permissao = 'dsajdska';

// switch (permissao) {
//     case 'criança':
//         console.log('Restrição para criança')
//         break;
    
//     case 'adolescente':
//         console.log('Restrição para adolescente')
//         break;

//     case 'adulto':
//         console.log('Sem restrição')
//         break;

//     default:
//         console.log('Opção inválida!')
// }

// for (i = 0; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         console.log(i, 'impar!');
//     }
//     else {
//         console.log(i, 'par!');
//     }
// }

// let i = 10;

// while (i >= 0) {
//     if (i % 2 === 0) {
//         console.log(i, 'par!');
//     }
//     else {
//         console.log(i, 'impar!');
//     }
//     i--;
// }

// let i = 0;

// do {
//     console.log('Teste', i);
//     i++;
// } while (i <= 10);

// const pessoa = {
//     nome: 'Alair',
//     idade: 29,
//     cpf: 123456789
// }

// for (let chave in pessoa) {
//     console.log(chave, pessoa.idade);
// }

// const cores = ['Vermelho', 'Preto', 'Azul', 'Rosa']

// for (let cor of cores) {
//     console.log(cor);
// }


// function maiorValor (a, b) {
//     return a > b ? a : b;
// }

// console.log('Maior valor é: ' + maiorValor(1, 6));


// function fizzbuzz (num) {
//     if (typeof num !== 'number') {
//         return 'Não é um número.'
//     }
//     if (num % 3 === 0 && num % 5 === 0) {
//         return 'Divisível por 3 e 5.';
//     }
//     if (num % 3 === 0) {
//         return 'Divisível por 3.';
//     }
//     if (num % 5 === 0) {
//         return 'Divisível por 5.';
//     }
//     return num;
// }

// console.log(fizzbuzz(15));

// const celular = {
//     marcaCel: 'Xiaomi',
//     tamanhoTela: {
//         vertical: 16,
//         horizontal: 8
//     },
//     bateria: 5000,
//     ligar: function {
//         console.log('Ligando...');
//     }
// }

// function cadCelular(marcaCel, tamanhoTela, bateria) {
//     return {
//         marcaCel,
//         tamanhoTela,
//         bateria,
//         ligar() {
//             console.log('Ligando...');
//         }
//     }
// }

// cliente1 = cadCelular('Xiaomi', 6, 5500);

// console.log(cliente1);


// function NovoCelular(marca, tela, bateria) {
//     this.Marca = marca,
//     this.Tela = tela,
//     this.Bateria = bateria,
//     this.ligar = function() {
//         console.log('Fazendo ligação...');
//     }
// }

// const cliente1 = new NovoCelular('LG', 5.7, 5800);
// const cliente2 = new NovoCelular('Samsung', 5, 4500);

// console.log(cliente1, cliente2);

// function NovoCliente(Nome, CPF, Endereco) {
//     this.Nome = Nome,
//     this.CPF = CPF,
//     this.Endereco = Endereco,
//     this.consultaCPF = function (CPF) {
//         console.log('Consultando CPF no banco de dados...');
//     }
// }

// cliente = new NovoCliente('Alair', 12345678910, 'Rua ETC, 25');
// console.log(cliente);



// const carro = {
//     Marca: "FIAT",
//     Modelo: "Marea",
//     Ano: 2006
// }

// const novoCarro = Object.assign({
//     km: 50000
// }, carro);
// console.log(novoCarro);


// const novoCarro2 = {...novoCarro};
// console.log(novoCarro2);


// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// console.log(getRandomInt(0, 20));


// const msg = '   Meu texto de teste    ';

// const msg2 = new String('Outro texto de teste');

// const nome = 'Alair';
// const msg = 
// `Olá, ${nome}!

// Venho através deste email, desejar-lhe boas vindas!
// Esperamos que possa aprender bastante com nossos cursos.

// Atenciosamente,
// Diretor Schwazenildson`;


// const data1 = new Date();
// const data2 = new Date('September 08 2020 13:21');
// const data3 = new Date(2020, 08, 08, 13, 21);

// data3.setFullYear('2030');


