// pegar o imput
// se for s mostra as categorias
// se for n mostra todos os livros

const livros = require("./database")
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis: ')
    console.log("Ficção Fantástica","/Romance","/Fábula","/Tecnologia","/Romance Inglês","/Tecnologia")

    const entradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter(livros => livros.categoria === entradaCategoria)

    console.table(retorno)
}else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponiveis:')
    console.table(livrosOrdenados)
}
