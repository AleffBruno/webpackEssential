const webpack = require('webpack');

module.exports = {
    //entry point file
    //arquivo do ponto de entrada
    entry: './ex/index.js',
    //where will be generated the final file JS
    //onde sera gerado a saida do arquivo JS
    output: {
        //final path
        //pasta destino
        path: __dirname + '/public',
        //generated file
        //arquivo gerado
        filename: './bundle.js'
    },
    //webserver what will be used along this exercise
    //exist one called webpack-dev-server, only to dev
    //servidor web que iremos usar durante o exercicio
    //existe um chamado webpack-dev-server, focado para dev 
    devServer: {
        port: 8080,
        //basepath where be all files that will be loaded
        //among then exist bundle.js and index.html(that will be linked to bundle.js)
        //pasta base onde esta todos os arquivos que serao carregados
        //dente eles, o bundle.js e o index.html(que fara referencia para o bundle.js)
        contentBase: '.public'
    }
}