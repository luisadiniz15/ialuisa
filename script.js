const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector("caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Quais sãos as principais causas da queimada?",
        alternativas: [
            "Na maioria das vezes, essas queimadas são provocadas pela ação humana de maneira criminosa.",
            "O calor do sol."
        ]
    },
    {
        enunciado: "Como as queimadas afetam uma cidade?",
        alternativas: [
            "Não afeta em nada",
            "Destruir áreas produtivas como lavouras e pastagens."
        ]
    },
    {
        enunciado: "Quais são algumas medidas eficazes de prevenir as queimadas?",
        alternativas: [
            "Extinção Responsável de Fogueiras e Fontes de Calor",
            "Deixar fogueiras acesas"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas ();
}

function mostraAlternativas (){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas= document.createElement("button");
        botaoAlternativas.textContent= alternativa;
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
mostraPergunta();