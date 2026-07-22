/* =========================================================
   PROJECTS DATA
   Edite este arquivo para trocar o conteúdo de cada projeto.
   A página projeto.html lê estes dados pela URL (?p=chave)
   e monta a página automaticamente.

   Campos obrigatórios: title, desc_pt, desc_en, stack, images
   Campos opcionais (se não existir, a seção some sozinha):
   - myRole_pt / myRole_en   -> seção "minha contribuição"
   - features_pt / features_en (listas) -> seção "como funciona"
   - results_pt / results_en (listas)   -> seção "resultados"

   Para adicionar um projeto novo:
   1. Crie uma nova chave aqui (ex: "meu-projeto")
   2. Preencha os campos acima
   3. No index.html, aponte o link do card para:
      projeto.html?p=meu-projeto
   ========================================================= */

window.PROJECTS = {

  gamecube: {
    title: "GameCube",
    desc_pt: "Cubo interativo feito com Arduino, Bluetooth, sensor de movimento (MPU6050) e uma matriz de LEDs 16x16, com estrutura em MDF cortada a laser (modelada em Blender). Roda Snake, Tetris, Pong e Breakout, controlados por um app Android feito em React Native. Projeto em equipe com 4 integrantes: João Eduardo, Nicolas Palácio, Lorenzo Oliveira e Mateus Bedim.",
    desc_en: "Interactive cube built with Arduino, Bluetooth, a motion sensor (MPU6050) and a 16x16 LED matrix, with a laser-cut MDF enclosure (modeled in Blender). Runs Snake, Tetris, Pong and Breakout, controlled by an Android app built with React Native. Team project with 4 members: João Eduardo, Nicolas Palácio, Lorenzo Oliveira and Mateus Bedim.",
    stack: ["C++", "Arduino", "React Native", "JavaScript", "Modelagem 3D"],

    myRole_pt: "Desenvolvi o jogo Tetris (lógica e renderização na matriz de LEDs) e o aplicativo mobile de controle em React Native.",
    myRole_en: "I built the Tetris game (logic and LED-matrix rendering) and the mobile control app in React Native.",

    features_pt: [
      "Estrutura em MDF cortada a laser, modelada em Blender",
      "Arduino controla a matriz de LEDs 16x16 e recebe comandos via Bluetooth",
      "Sensor de movimento (MPU6050) permite controles por movimento",
      "App Android em React Native com um controle dedicado para cada jogo (Snake, Tetris, Pong e Breakout)"
    ],
    features_en: [
      "Laser-cut MDF enclosure, modeled in Blender",
      "Arduino drives the 16x16 LED matrix and receives commands over Bluetooth",
      "Motion sensor (MPU6050) enables motion-based controls",
      "Android app in React Native with a dedicated control screen for each game (Snake, Tetris, Pong and Breakout)"
    ],

    results_pt: [
      "Os quatro jogos (Snake, Pong, Tetris e Breakout) rodaram corretamente no cubo",
      "A conexão Bluetooth com o aplicativo Android se manteve estável e responsiva",
      "A matriz 16x16 exibiu boas animações e visual atrativo",
      "O projeto despertou interesse em programação e eletrônica em quem testou"
    ],
    results_en: [
      "All four games (Snake, Pong, Tetris and Breakout) ran correctly on the cube",
      "The Bluetooth connection with the Android app stayed stable and responsive",
      "The 16x16 matrix displayed smooth animations and an attractive visual",
      "The project sparked interest in programming and electronics among testers"
    ],

    // Troque esses caminhos pelas fotos reais do projeto (a primeira é a capa)
    images: [
      "img/projects/gamecube/cover.png",
      "img/projects/gamecube/componentes.png",
      "img/projects/gamecube/modelagem-3d.png",
      "img/projects/gamecube/laser.png",
      "img/projects/gamecube/snake.png",
      "img/projects/gamecube/tetris.png",
      "img/projects/gamecube/pong.png",
      "img/projects/gamecube/breakout.png",
      "img/projects/gamecube/app.png"
    ]
  },

  "projeto-2": {
    title: "Nome do Projeto 2",
    desc_pt: "Descrição curta explicando o problema que o projeto resolve e o que ele faz.",
    desc_en: "Short description explaining the problem the project solves and what it does.",
    stack: ["JavaScript", "Node.js"],
    images: [
      "img/projects/projeto-2.png"
    ]
  },

  "projeto-3": {
    title: "Nome do Projeto 3",
    desc_pt: "Descrição curta explicando o problema que o projeto resolve e o que ele faz.",
    desc_en: "Short description explaining the problem the project solves and what it does.",
    stack: ["C++", "Robótica"],
    images: [
      "img/projects/projeto-3.png"
    ]
  }

};