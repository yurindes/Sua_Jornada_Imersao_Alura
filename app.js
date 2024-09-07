function historia() {

  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("pergunta");

  // Obtém o nome do usuário do campo de entrada
  let campoNome = document.getElementById("campo-nome").value;

  // Inicializa a variável para armazenar a primeira pergunta
  let primeira_pergunta = "";

  // Verifica se o campo de nome está vazio
  if (campoNome == "") {
      // Se estiver vazio, exibe uma mensagem de erro
      section.innerHTML = "<p>Não foi mencionado o nome</p>";
      // Interrompe a função
      return;
  }

  // Define a variável caminho (não utilizada neste trecho) e a primeira pergunta
  caminho = 2; // Variável não utilizada neste escopo
  primeira_pergunta = "Olá, " + campoNome + ", quero jogar um jogo.";

  // Cria a estrutura HTML da primeira pergunta, incluindo botões de resposta
  primeira_pergunta = `
      <div class="item-resultado">
          <h2>
              <p>${primeira_pergunta}</p>
              <p>Você está andando na rua e vê um objeto brilhando. O que você faz?</p>
          </h2>
        </div>
          <button onclick="historia_1_1()">Vejo o que o é esse objeto</button>
          <p></p>
          <button onclick="historia_1_2()">Ignoro, pode ser perigoso</button>
      
  `;

  // Exibe a primeira pergunta na seção
  section.innerHTML = primeira_pergunta;
}




function historia_1_1() {
    let section = document.getElementById("pergunta");

    let campoNome= document.getElementById("campo-nome").value
    
    let primeira_pergunta = ""

    primeira_pergunta = "Corajoso, hein? Você percebe que é um medalhão antigo com um símbolo desconhecido. O medalhão começa a emitir uma vibração. O que você faz?"

    primeira_pergunta = `
        <div class="item-resultado">
          <h2>
            <p>${primeira_pergunta}</p>
          </h2>
          
            
        </div>

        <button onclick="historia_1_1_1()">Tenta entender o símbolo e investigar o medalhão</button>
        <p></p>
        <button onclick="historia_1_1_2()">Joga o medalhão fora, com medo</button>
        `;

    section.innerHTML = primeira_pergunta //primeira_pergunta;
    
}

function historia_1_1_2() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  
  let primeira_pergunta = ""

  primeira_pergunta = "O momento que o medalhão toca no chão, o brilho apaga e o objeto se desintegra. Dias depois, você recebe uma carta anônima dizendo que o destino o abandonou. O que você faz?"

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
          
          
      </div>

      <button onclick="historia_1_1_2_1()">Ignora a carta</button>
      <p></p>
      <button onclick="historia_1_1_2_2()">Tenta descobrir quem mandou a carta</button>
      `;

  section.innerHTML = primeira_pergunta
  
}

function historia_1_1_2_1() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  


  primeira_pergunta = "Você segue sua vida normalmente. Mas com aquela eterna sensação de 'e se'..."

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
      </div>
      `;

  section.innerHTML = primeira_pergunta
  
}

function historia_1_1_2_2() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  


  primeira_pergunta = "Você descobre que era o guardião do medalhão tentando encontrar o próximo herdeiro, mas agora é tarde demais..."

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
      </div>
      `;

  section.innerHTML = primeira_pergunta
  
}



function historia_1_1_1() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  
  let primeira_pergunta = ""

  primeira_pergunta = "Você encontra uma inscrição misteriosa que aparece um enigma. Conforme tenta resolver, o medahão brilha mais forte e você é transportado para um lugar estranho. Você percebe que está em uma floresta densa e sombria. Ao longe, vê uma torre. O que você faz?"

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
          
      </div>
      <button onclick="historia_1_1_1_1()">Caminha em direção à torre, na esperança de respostas</button>
      <p></p>
      <button onclick="historia_1_1_1_2()">Tenta voltar pelo caminho de onde veio</button>
      `;

  section.innerHTML = primeira_pergunta
  
}


function historia_1_1_1_1() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  


  primeira_pergunta = "O medalhão pertence a um guardião mágico que te escolheu como sucessor."

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
      </div>
      `;

  section.innerHTML = primeira_pergunta
  
}

function historia_1_1_1_2() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  


  primeira_pergunta = "Você se perde na floresta. Encontra um portal e, com desespero, volta para casa. Não vai mais dar sorte ao azar. Pode ser perigoso."

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
      </div>
      `;

  section.innerHTML = primeira_pergunta
  
}


function historia_1_2() {
    let section = document.getElementById("pergunta");

    let campoNome= document.getElementById("campo-nome").value
    
    let primeira_pergunta = ""

    primeira_pergunta = "Cauteloso você, hein? Você sai correndo e não olha para trás, mas o sentimento de algo incompleto te acompanha. Dias depois, o objeto começa a aparecer em seus sonhos. O que você faz?"

    primeira_pergunta = `
        <div class="item-resultado">
          <h2>
            <p>${primeira_pergunta}</p>
          </h2>
          
            
        </div>
        <button onclick="historia_1_2_1()">Decide voltar ao local e tentar entender o que viu</button>
        <p></p>
        <button onclick="historia_1_2_2()">Você ignora os sonhos e segue a sua vida</button>
        `;

    section.innerHTML = primeira_pergunta
    
}

function historia_1_2_1() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  
  let primeira_pergunta = ""

  primeira_pergunta = "Ao voltar, o objeto está lá, Qundo toca, ele se desfaz e vira pó. Você se sente 'aliviado' por encerrar um mistério. Um homem aparece e pergunta se você viu o objeto. O que você responde?"

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
          
      </div>

      <button onclick="historia_1_2_1_1()">Conta a verdade sobre o que aconteceu</button>
      <p></p>
      <button onclick="historia_1_2_1_2()">Mente e diz que não viu nada</button>
      `;

  section.innerHTML = primeira_pergunta
  
}

function historia_1_2_1_1() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  


  primeira_pergunta = "O homem agradeçe, mas diz que o fim do mundo pode estar em risco. Fim?"

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
      </div>
      `;

  section.innerHTML = primeira_pergunta
  
}

function historia_1_2_1_2() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  


  primeira_pergunta = "O homem olha no fundo dos seus olhos e diz 'os escolhidos nunca fogem do destino' e sai andando sem olhar para trás. Você se arrepia e nunca mais vê o homem novamente. Fica com a eterna dúvida..."

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
      </div>
      `;

  section.innerHTML = primeira_pergunta
  
}

function historia_1_2_2() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  
  let primeira_pergunta = ""

  primeira_pergunta = "A sensação etranha continua, mas você nunca mais volta ao local e decide esquecer. Algum tempo depois, você outr boatos de que alguma coisa estranha está acontecendo na cidade. O que você faz?"

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
          
      </div>

      <button onclick="historia_1_2_2_1()">Investiga os boatos achando que tem a ver com o objeto misterioso.</button>
      <p></p>
      <button onclick="historia_1_2_2_2()">Decide não se envolver...</button>
      `;

  section.innerHTML = primeira_pergunta
  
}

function historia_1_2_2_1() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  


  primeira_pergunta = "Você descobre que o objeto tinha um objetivo importante em manter a cidade segura. A sua escolha trouxe consequências negativas para toda a cidade."

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
      </div>
      `;

  section.innerHTML = primeira_pergunta
  
}

function historia_1_2_2_2() {
  let section = document.getElementById("pergunta");

  let campoNome= document.getElementById("campo-nome").value
  


  primeira_pergunta = "Tudo termina com você alheio ao que acontece. Você nunca vai saber o que desencadeou os eventos estranhos."

  primeira_pergunta = `
      <div class="item-resultado">
        <h2>
          <p>${primeira_pergunta}</p>
        </h2>
        
      </div>
      `;

  section.innerHTML = primeira_pergunta;
  
}