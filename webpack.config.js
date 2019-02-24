const path = require('path');

module.exports = {
    //entry point file
    //arquivo do ponto de entrada
    entry: './ex/index.js',
    //where will be generated the final file JS
    //onde sera gerado a saida do arquivo JS
    output: {
        //final path
        //pasta destino
        path: path.resolve(__dirname, 'public'),
        //generated file
        //arquivo gerado
        filename: './bundle.js'
    },
    //webserver what will be used along this exercise
    //exist one called webpack-dev-server, only to dev
    //servidor web que iremos usar durante o exercicio
    //existe um chamado webpack-dev-server, focado para dev 
    devServer: {
        //basepath where be all files that will be loaded
        //among then exist bundle.js and index.html(that will be linked to bundle.js)
        //pasta base onde esta todos os arquivos que serao carregados
        //dente eles, o bundle.js e o index.html(que fara referencia para o bundle.js)
        contentBase: path.join(__dirname, 'public'),
        port: 8080
    },
    module: {
        //é um cara que vai carregar os arquivos   
        loaders: [{
            //carregue qualquer arquivo javascript
            test: /.js?$/,
            //essa dependencia necessita estar no package.json
            loader: 'babel-loader',
            //nao leia os arquivos da node_modules
            exclude: /node_modules/,
            //oque eu quero que o  meu loader interprete [react,typescript,es2015,n...]
            query: {
                presets: ['es2015']
            }
        }]
    }
}