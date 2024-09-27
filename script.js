const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector("caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Quais sãos as principais causas da queimada?",
        alternativas: [
            {
                texto:"Na maioria das vezes, essas queimadas são provocadas pela ação humana de maneira criminosa.",
                afirmacao:""
            },
            {
                texto:"O calor do sol.",
                afirmacao:""
            }
            
            
        ]
    },
    {
        enunciado: "Como as queimadas afetam uma cidade?",
        alternativas: [
            {
                texto: "Não afeta em nada",
                afirmacao:""
            },
            {
                texto: "Destruir áreas produtivas como lavouras e pastagens.",
                afirmacao:""
            }
        
        ]
    },
    {
        enunciado: "Quais são algumas medidas eficazes de prevenir as queimadas?",
        alternativas: [
            {
                texto: "Extinção Responsável de Fogueiras e Fontes de Calor",
                afirmacao:""

            },
            {
                texto: "Deixar fogueiras acesas",
                afirmacao:""
            }
            
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas ();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
        }
      });
      function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacoes;
        historiaFinal=afirmacoes;
        atual++;
        mostraPergunta ();
    
  }
  
mostraPergunta();