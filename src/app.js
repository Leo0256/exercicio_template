const express = require('express')
const app = express();
const port = 5000;

const modelo = require('./models/modelos');
var Projeto = modelo.Projeto;
var Pets = modelo.Pets;


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', listProjectHandler);
app.get('/pets', listPetsHandler);

app.listen(port, listenHandler);

function listProjectHandler(req, res){
    let projetos = [
        new Projeto("controle_de_pets","JavaScript", 'https://github.com/Leo0256/controle_de_pets'),
        new Projeto("Gerador_de_Senhas","Dart", 'https://github.com/Leo0256/Gerador_de_Senhas'),
        new Projeto("Exemplo_Calculadora.NET","C#", 'https://github.com/Leo0256/Exemplo_Calculadora.NET')
    ];
    
    res.render('listar_projetos.ejs',{lista_projetos: projetos});    
}

function listPetsHandler(req, res) {
    let pets = [
        new Pets('Leo', 9, 'gato'),
        new Pets('Robervaldo', 5, 'cão'),
        new Pets('Mimosa', 8, 'gato')
    ];

    res.render('listar_pets.ejs', { lista_pets: pets });
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}