const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//veja a documentação para saber mais
const extractPlugin = new ExtractTextPlugin({
    //arquivo que seja gerado a partir desse plugin
    filename: 'main.css'
})

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
        filename: './bundle.js',
        // https://webpack.js.org/guides/public-path/
        publicPath: '/public'
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
        rules: [
            {
                //carregue qualquer arquivo js   
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
            {
                test: /\.scss$/,
                // nao vou definir os loaders no array, porque quero o css em um arquivo separado,
                // com isso sera necessario um plugin
                // *veja a documentação para saber mais sobre extract
                use: extractPlugin.extract({
                    // *ATENTE-SE A ORDEM DE EXECUÇÃO, DO FIM PARA O COMEÇO
                    // NO CASO PRIMEIRO SERA EXECUTADO 'sass-loader' DEPOIS 'css-loader'
                    use: ['css-loader','sass-loader']
                })
            }
        ]
    },
    plugins: [
        extractPlugin
    ]
}