var t;

function menu_feiticeiro() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/inicial.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `<div class="titulo">
    <p class="letra">Qual o seu nome feiticeiro?</p>

<div>
    <div class ="input"> 
        <a><input id="nome" placeholder="Nome"> </input></a>
        <p class="aviso">*por favor insira um nome</p>
    </div>
<div class="botao_principal">
    <button class="botao_feiticeiro" onclick="iniciar() ; inicio()"> Continuar </button>
</div>`
}


function morrer() {
    var fundo = document.getElementById('fundo');
    fundo.innerHTML = ``
    fundo.style.backgroundImage = "url('./imgs/death3.jpg')";
}


function iniciar() {
    nome = nome.value;
}

function inicio() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/desert.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Seu nome é  ${nome}. E você é um jovem feiticeiro de uma vila pequena costeira, você gosta de viajar e se aventurar por diversos e diferentes lugares pelo continente. No entanto, você não lembra de ir pra um gigantesco deserto sem vegetação e aparentemente muito longe de qualquer mar, e infelizmente é nesse deserto aonde você se encontra agora. Ao seu lado, um "forjado da guerra", se encontra caído ao seu lado, sem bateria e perdido também. Forjados da guerra são constructos de metal sencientes. Ao lado do mecanoide, você encontra um mapa que mostra não só aonde você está, mas as regiões próximas. E sua casa, para sua surpresa, está MUITO longe. Existem duas cidades próximas de você, e as duas te deixam mais próximo da sua cidade natal. Uma das opções é uma cidade fantasma, sem habitantes e bem assustadora, mas com uma estrada que leva você até lá em segurança, e a outra é uma cidade de elfos acolhedores em um bosque próximo, o problema é que essa cidade tem um trajeto perigoso que atravessa o bosque.  Caminhando você verifica sua mochila em busca de alguma coisa útil. Mas ela está quase vazia, com a excessão de algumas peças de ouro, um livro de origem mágica, e uma adaga, talvez esses itens sejam úteis para voltar para a sua casa.<div class="pergunta">Qual caminho  ${nome} deve seguir?
        <br>
        <br>
        <a><button class="botao_feiticeiro" onclick="bosque_elfos()"> Bosque dos elfos </button></a>
        
        <a><button class="botao_feiticeiro" onclick="cidade_fantasma()"> Cidade Fantasma </button></a>`;
}

//<a><button class="botao_feiticeiro" onclick="()">texto</button></a> <a><button class="botao_feiticeiro" onclick="()">texto</button></a>
function cidade_fantasma() {
    // Cidade fantasma

    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/ghostTown4.png')";

    var content = document.getElementById("content");
    content.innerHTML = `<p>A cidade fantasma oferece um caminho mais seguro, e chegando lá, que risco você correria? A cidade não tem habitantes, o máximo que poderia te acontecer são animais atacarem você. A estrada é bem tranquila, e por incrível que pareça bem cuidada, e o maior risco que você correu, foi um esquilo que apareceu na sua frente e te assustou. Chegando na cidade fantasma, você lembra por que se lembrava que a cidade era mencionada como assustadora, construções góticas se erguem ao seu redor conforme você caminha em direção ao centro da cidade, comércios e casas destruídos são o que mais aparecem na sua frente, e olhando por dentro dos lugares, não há aparentemente nada para ser saqueado. Quanto mais anda, mais uma sensação de vazio te preenche. Já no centro da cidade, uma taverna iluminada e sombras se apresentam a sua direita, detro da cidade vazia, a situação é estranha.</p>
   <div class="pergunta">O que você vai fazer?
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="homem_misterioso()">Atravessar a cidade</button></a>

    <a><button class="botao_feiticeiro" class ="botao" onclick="taverna()">Entrar na taverna</button></a>
    `
}

function bosque_elfos() {
    // Bosque dos elfos

    t = setTimeout(morrer, 22000)

    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/elfCity3.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Apesar do caminho pro bosque do elfo ser bem mais traçoeiro, com certeza a ajuda dos elfos selvagens iria te ajudar. Além de serem excelentes com magia, eles também são muito hospitaleiros e tem muita informação sobre tudo. Talvez eles possam te ajudar a enteder o que de fato aconteceu com você. O caminho é sinuoso, e em diversos momentos, sons e movimentações estranhas se perpetuam sobre o lugar. Chegando a uma bifurcação, você ouve um urro muito alto e uma movimetação veloz a sua direita, e escuta barulho de rochas pesadas batendo muito forte no chão, com passos pesados a sua esquerda. 
   <div class="pergunta">Você tem que tomar uma decisão rápido, antes que eles te alcancem.</div>
        <br>
        <br>
         
        <button class="botao_feiticeiro" onclick="pantera()">Urro estridente.</button>

        <button class="botao_feiticeiro" onclick="golem()">Rochas pesadas.</button>`
}

function taverna() {
    //Taverna assombrada

    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/tavern.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `É assustador imaginar uma tavera com luzes acessas em uma cidade destruída e abandonada, mas para você é a melhor opção. Talvez lá eles consigam te ajudar a voltar para o seu lar. Entrando, você se depara com uma música e barulhos de de pessoas bebendo e conversando, mas nínguem aparece para para você. Um sombra se aproxima de você e susurra algo como boas vindas e oferece uma bebida com uma das mãos. Você percebe que o personagem em questão é literalmente como uma sombra em formato humanóide.
   <div class="pergunta">Aceitar ou não a bebida?</div>
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="beber_taverna()">Aceitar</button></a> 

    <a><button class="botao_feiticeiro" class ="botao" onclick="cassino()">Próxima cidade</button></a>`
}

function homem_misterioso() {
    //Homem misterioso
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/forest2.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Uma taverna?? No meio de uma cidade arruinada? Com luzes acessas e pessoas dentro? JAMAIS. Melhor sair da cidade o mais rapido possível, você não tá aqui para beber, e sim para chegar na sua casa o mais rapido possível. Na saída da cidade, um vulto com uma capa preta te chama. "Olá <nome>, lembra de mim?" "Vi que está consciente. Precisa me seguir, antes que eles façam algo.
   <div class="pergunta">Seguir ou não?</div>
    <br>
    <br>
    
<a><button class="botao_feiticeiro" class ="botao" onclick="conhecer_anciao()">Seguir</button></a>
<a><button class="botao_feiticeiro" class ="botao" onclick="encontrar_upl()">Correr para o lago</button></a>`
}

function pantera() {
    clearTimeout(t)
    //Escolheu a pantera
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/ghostTown3.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Na urgência do momento, você acaba escolhendo ir pelo caminho do urro do possível animal. Correndo, você se depara com uma pantera selvagem, atacando sua presa. 
   <div class="pergunta">Você tenta passar correndo, ou tenta ser furtivo?</div>
    <br>
    <br>
    
    <button class="botao_feiticeiro" onclick="furtivo_pantera()">Ser furtivo</button>
    <button class="botao_feiticeiro" onclick="correr_pantera()">Correr</button>
    </div>`
}

function golem() {
    clearTimeout(t)
    //Escolheu o golem
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/golem.webp')";

    var content = document.getElementById("content");
    content.innerHTML = `Rochas pesadas? Uma avalanche talvez? Você pensa. Mas chegando no lugar, você percebe que na verdade um golem te aguardava, enquanto andava com pasos pesados em sua direção. Ele pode ser lento, mas o caminho estreito tem enormes paredes que impedem que você passe por ele rapidamente. Mas agora você se lembra de uma coisa, você era um mago antes! E ainda se lembra de alguns feitiços!
    No momento você só se lembra de dois feitiços. 
   <div class="pergunta">Qual usar?</div>
    <br>
    <br>
    
    <button class="botao_feiticeiro" onclick="luz_golem()">Raio de luz</button>

    <button class="botao_feiticeiro" onclick="amizade_golem()">Amizade animal</button>`
}

function correr_pantera() {
    //Correr da pantera
    //Morte
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/elfCity3.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = ` Você desesperadamente corre na direção oposta da pantera e em direção a vila dos elfos. A pantera te percebe e corre em sua direção, o problema é, ela MUITO mais rapida que você. E você não lembra de magias rapidas o suficiete para usar nessa ocasião. Poucos segundos depois ela te alcança...
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="morrer()">MORTE</button></a>`

}

function furtivo_pantera() {
    //Tentar ser furtivo
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/elfCity3.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = ` Você consegue manter a calma e tenta passar furtivo pela pantera enquato ela devora os últimos pedaços de sua presa. Quando você pega uma distância segura da pantera, você percebe que ela te percebeu e correu em sua direção. No calor do momento você se lembra de dois poderosos feitiços, Amizade Animal e Raio de luz. Enquanto isso a pantera corre ferozmente atrás de você.
   <div class="pergunta">O que fazer?</div>
    <br>
    <br>
    
<button class="botao_feiticeiro" class ="botao" onclick="amizade_pantera()">Amizade Animal</button><br>

<button class="botao_feiticeiro" class ="botao" onclick="luz_pantera()">Raio de luz</button></div>`
}

function luz_pantera() {
    //Tentar cegar a pantera
    //Morte
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/raioLuz.png')";
    var content = document.getElementById("content");
    content.innerHTML = `Você usa raio de luz, a pantera por pouco tempo se cega e você ganha um tempo para correr. Você corre o mais rapido possível durante 2 minutos, mas a pantera é MUITO mais rapida que você. E te alcança. Infelizmente você não consegue usar mais nenhum feitiço. A pantera te devora por inteiro.<br>
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="morrer()">MORTE</button></a>`

}

function amizade_pantera() {
    //Tentar ser amigo da pantera
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/amizadeAnimal.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você se concentra, usa cânticos antigos, faz sons com a boca e gestos estranhos, uma luz sai de sua mão e alcança a pantera. Mentalmente, você manda ela parar de te seguir e voltar para a floresta. Ela obedece, e você se aproxima da vila dos elfos.<br>
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="vila_elfo()">Ir para a vila elfo</button></a>`
    //Ir para os elfos
}

function luz_golem() {
    //Usar o feitiço raio de luz contra o golem
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/raioLuz.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você usa Raio de luz, um feitiço que cega temporariamente os seus oponentes, não pareceu surtir tanto efeito no golem. Mas foi o suficiente para distrair e você passar correndo por ele.
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="vila_elfo()">Ir para a vila elfo</button></a>`
    //ir para a vila elfo
}

function amizade_golem() {
    //Usar o feitiço Amizade Animal com o Golem
    //Morte
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/amizadeAnimal.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você lembra de um feitiço poderoso. Essa magia deixa você convencer uma besta que você não quer prejudicar. O golem pode parar de te atacar afinal! Você concentra, usa palavras estranhas com entonações esquisitas faz gestos com a mão e com o corpo, ... E CONSEGUE ... mas nada acontece. Por que nada aconteceu? O golem simplesmente te ataca, sem "pensar" duas vezes. E ai você percebe, ele não era uma besta...
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="morrer()">MORTE</button></a>`
}

function vila_elfo() {
    //Você chegou a vila elfo
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/elfCity3.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `As casas na vila dos elfos tem uma arquitetura peculiar e muito interessante, uma enorme biblioteca se encontra no centro da vila. Alguns elfos estão dentro da casa conversando, estudando, e fazendo seus deveres diários, mas muitos elfos caminham sobre o bosque portando itens mágicos, cajados, e diversas outras coisas que te deixam impressionado. Agora está de noite, já que o caminho até o bosque era longo. Um elfo ruivo de barbas longas e olhos amarelados te cumprimenta. 
    "Olá jovem, o que veio fazer por aqui?"
    "Vim atrás de respostas, perdi minha memória, e preciso voltar pra minha vila natal. Mas antes precisava lembrar de alguns feitiços"
    "Ah, então você vai adorar nossa biblioteca, lá tem diversos pergaminhos que ensinam diversas magias, mas a entrada é paga, caso não tenha dinheiro, posso te mostrar o caminho para a próxima cidade."
   <div class="pergunta">O que você vai escolher?</div>
   <br>
   <br>
    <a><button class="botao_feiticeiro" class ="botao" onclick="vila_natal()">Ir para a próxima cidade</button></a> 
    <a><button class="botao_feiticeiro" class ="botao" onclick="biblioteca()">Ir para a biblioteca</button></a> 
    <a><button class="botao_feiticeiro" class ="botao" onclick="roubar_elfo()">Roubar o elfo</button></a>`
}

function vila_natal() {
    //Você chegou a sua vila natal
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/village.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você caminha em mais uma estrada tranquila, apenas alguns comerciantes e peregrinos passam por você, mas todos estão ou com pressa, ou são bem amigáveis. No entanto, após horas de caminhar, você chega a próxima cidade e você percebe que é sua vila natal, destruída e em chamas, você percebe que a batalha ainda está acontecendo, e ao olhar mais perto das casas, percebe que androides como aquele que você viu quando acordou no deserto estão atacando sua vila e saqueando as casas, os moradores da vila também estão atacando os androides com seus últimos recursos, e a batalha não parece ter fim. Os androides ainda não te notaram, e parece que 5 deles ainda sobraram. 
   <div class="pergunta">O que fazer?</div> 
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="concentrar_vila_natal()">Se concentrar e lembrar dos seus antigos feitiços</button></a> 

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="raio_luz_vila_natal()">Usar raio de luz como um ataque</button></a>`
}

function biblioteca() {
    //Você entrou na biblioteca
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/library.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Dentro da biblioteca, você encontra diversos livros e pergaminhos mágicos que com certeza irão te ajudar na sua jornada, em um dos livros, você vê em uma estante específica, 2 pergaminhos. 
   <div class="pergunta">Como quer testa-los?</div>
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="polimorfia()">Feitiço de polimorfia</button></a>

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="minecraft()">Feitiço de portal</button></a>

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="vila_natal()">Ir para a próxima cidade</button></a>`
}

function roubar_elfo() {
    //Você roubou o elfo
    //Fim de jogo
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/prision.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você tenta roubar o elfo, e consegue pegar a carteira sem que ele perceba! Ou foi isso que você pensou... o elfo percebe e chama os guardas, você é setenciado a 5 meses de prisão em uma cela mágica. `
}

function polimorfia() {
    //Você se torna uma pequena ovelha
    //Fim de jogo
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/sheep.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você tenta usar o feitiço em um vaso de plantas próximo... e o feitiço..! DÁ ERRADO. Você se torna uma ovelha, e o feitiço diminuto cai sobre você logo depois, você se torna uma ovelha minúscula, e fica preso em um dos corredores da biblioteca por muito tempo, até conseguir fugir. Agora terá que se acostumar com sua nova vida de pequena ovelha.`

}

function minecraft() {
    //Você fica preso em um mundo parecido com o minecraft
    //Fim de jogo
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/minecraft.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você usa o feitiço de portal, um enorme portal roxo se abre em sua frente. Você pula e cai em uma realidade alternativa. Aqui tudo é feito de blocos, e a gravidade não parece funcionar muito bem. Um gato passa por perto e você se sente meio tonto, mas logo se acostuma ao lugar, o portal já se fechou... O jeito agora é criar outro portal para voltar a sua realidade. Boa sorte!`
}

function beber_taverna() {
    //Você aceita a bebida da taverna
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/tavern2.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você aceita...? Sim, você aceita. Apesar do clima ser assustador antes, você já está se acostumando, e agora nem está tão assustador assim. Você pega o copo e a bebida estava quente e agradável ao seu paladar. Você tenta conversar com o barman mas ninguém responde. No entanto, ele entrega uma carta misteriosa para você, com uma grafia estranha e garranchos indescritíveis:
    ".sogimini seroip sues ratorred ed zapac ,osoredop otium oçitief mu ieranisne et ossi rezif eS .oruo ed adeom amu a otnuj ,avoc ahnim ed amic me siuza salatép moc rolf amu eugoj e ,ogal o mes euqsob o éta áv ,ierasnepmocer et ue e eduja em rovaf rop ,oãçidlam amu me oserp e otrom uotse aroga rev edop omoc sam ,sazeuqir satium ohnet ,orielavac mu are ue assap adiv ahnim me e ,jeaN é emon ueM"
    E antes de sair você escuta "RIAS ED SETNA ASEM AN SEZEV 2 ATAB UEDNETNE ECOV ES" ou algo similar.
   <div class="pergunta">O que fazer?</div>
    <br>
    <br>
     
    <a><button class="botao_feiticeiro" class ="botao" onclick="bater_mesa()">Bater na mesa</button></a>

     
    <a><button class="botao_feiticeiro" class ="botao" onclick="sair_assustado()">Sair</button></a>

     
    <a><button class="botao_feiticeiro" class ="botao" onclick="ja_sei_codigo()">Descobri o código!</button></a>`
}
//
//
//
//
//
//

function bater_mesa() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/test.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você bate na mesa e a sombra acena com a cabeça. Você não entende muito bem o que aconteceu... ou entende. Por algum motivo, você sente uma urgência para ir à floresta. 
   <div class="pergunta">Qual floresta ir?</div>
    <br>
    <br>
     
    <a><button class="botao_feiticeiro" class ="botao" onclick="floresta_sem_lago()">Floresta sem lago</button></a>


     
    <a><button class="botao_feiticeiro" class ="botao" onclick="encontrar_upl()">Floresta com lago</button></a>`
}
function sair_assustado() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/test.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Isso já foi demais, você sai assustado em direção a próxima cidade
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="cassino()">Ir para a próxima cidade</button></a>`
    //Ir ao cassino
}
function ja_sei_codigo() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/test.png')";

    var content = document.getElementById("content");
    content.innerHTML = `A sombra não parece entender o que você disse, e some junto a todas as luzes e sons da taverna.
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="cassino()">Ir para a próxima cidade</button></a>`
    //Ir ao cassino
}
function floresta_sem_lago() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/cemetery2.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Chegando a floresta sem o lago, você percebe uma cova ao seu lado. E flores coloridas ao redor da região.
   <div class="pergunta">Qual flor colocar?</div>
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="laranja()">Laranjas</button></a>

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="azul()"> Azuis</button></a>

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="laranja()">Rosas</button></a>

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="laranja()">Verdes</button></a>

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="laranja()">Um punhado de grama</button></a>

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="laranja()">Amarelas</button></a>`
}
function azul() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/cemetery3.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você coloca as flores azuis na cova e algo surreal parece acontecer. Um brilho muito forte emana das flores e a sombra da taverna aparece a sua frente, agora com o formato de um cavaleiro, ele diz com uma voz fantasmagórica "Muito obrigado, você me libertou de minha maldição, aqui, isso é para você, e te entrega um pergaminho com um feitiço chamado 'onda cósmica' e oferece te levar até sua vila", você passa o resto do dia tentando estudar o pergaminho e percebe que agora tem a capacidade de flutuar, antes de chegar de fato a sua vila.
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="quebrar_maldiçao()">Ir para sua vila natal</button></a>`
    //Ir para a vila natal
}
function laranja() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/cemetery3.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você coloca as posiciona as flores, mas nada parece acontecer. Você decide ir para a próxima cidade.
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="cassino()">Ir para a próxima cidade</button></a>`
    //Ir ao cassino
}
function quebrar_maldiçao() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/morcegoFinal.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você caminha em mais uma estrada tranquila, apenas alguns comerciantes e peregrinos passam por você, mas todos estão ou com pressa, ou são bem amigáveis. No entanto, após horas de caminhar, você chega a próxima cidade e você percebe que é sua vila natal, destruída e em chamas, você percebe que a batalha ainda está acontecendo, e ao olhar mais perto das casas, percebe que androides como aquele que você viu quando acordou no deserto estão atacando sua vila e saqueando as casas, os moradores da vila também estão atacando os androides com seus últimos recursos, e a batalha não parece ter fim. Os androides ainda não te notaram, e parece que 7 deles ainda sobraram. Você lembra do feitiço onda cósmica.
   <div class="pergunta">Usar ou não o feitiço?</div> 
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="arauto_cosmico()">Usar</button></a> `
}
function arauto_cosmico() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/cosmic.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você usa o feitiço onda cósmica, um pedaço do universo parece cair em uma forte ilusão, e percebe que todos os seus inimigos foram aniquilados, e todos os seus aliados foram curados, a magia foi realmente muito poderosa, mas agora você se sente consumido a ela. Sua vila está grata, mas agora você quer procurar entender mais sobre essa fonte cósmica. Você procura entender quem era o fantasma e como conseguir usar mais feitiços cósmicos de novo. Após alguns anos você se torna um arauto das estrelas, e não só um feiticeiro de uma vila qualquer.`
}
function exemplo() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/forest.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Por algum motivo você hesitou ao usar o feitiço, os androides chegaram a você, e seus Raios de Luz, e Amizade Animal não fizeram nenhum efeito neles, antes de ser de fato capturado, você decide queimar o pergaminho. Você fica preso por anos no navio deles, até conseguir se libertar junto a outros prisioneiros e fugir para uma região isolada do continente, na fuga você acaba perdendo um de seus braços. Mas procura um lugar aonde você procura recuperar sua magia completamente, e se tornar cada vez mais poderoso para lançar um ataque vingativo junto aos outros prisioneiros contra a tripulação dos navios vermelhos.`
}

//
//
//
//
//
//

function cassino() {
    //Você chega ao cassino
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/city.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você segue para a próxima cidade, uma cidade antes da sua vila natal. A viagem é longa e pacata, nos dias que você passa viajando, você encontra comerciantes, animais silvestres e árvores frutíferas, porém ao chegar na em Untherak, você se depara com uma cidade animada e cheia de luzes. Você fica impressionado, e ao pisar dentro da cidade, um grupo de orcs te chamam para entrar em um cassino. Seus sentidos mágicos apontam para uma mágia vil vinda do cassino. 'Opa opa! Vem cá amigo, tá tudo mundo com sorte hoje no Cassino do Orc Azul, o último acabou de ganhar 100 peças de ouro! haha'
   <div class="pergunta">Entrar no cassino?</div>
    <br>
    <br>
     
    <a><button class="botao_feiticeiro" class ="botao" onclick="ganancia_cassino()">Sim</button></a>

     
    <a><button class="botao_feiticeiro" class ="botao" onclick="ignorar_cassino()">Não</button></a>`
}

function conhecer_anciao() {
    //Você conhece o ancião da vila
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/phantom.gif')";

    var content = document.getElementById("content");
    content.innerHTML = `Apesar de ser perigoso, você resolve seguir o vulto, enquanto caminham ele explica "Sua vila foi atacada por mecanoides de batalha, a mando de saqueadores dos navios vermelhos, sem motivo algum, apenas para saquear seu lar e conseguir espólios, você como um grande feiticeiro, tentou ajudar sua vila com diversos feitiços, mas como haviam feiticeiros, bruxos, magos e guerreiros do outro lado, você acabou perdendo e sua saída foi se teleportar para longe dali, você acaba sendo atacado por um dos forjados, e ele se teleporta junto com você para um lugar distante, porém, antes de se teleportar, um mago tentou soltar uma magia de esquecimento em você, que surtiu efeito, e você acaba esquecendo tudo que havia passado. Após um tempo, você descobre que na verdade eles foram mandados para atacar sua vila não só pelo saque, mas por uma runa mágica que estava escondida debaixo do terreno da vila." Você é a única esperança para que a sua vila seja salva... Tome esse pergaminho, é um feitiço muito poderoso que só você pode usar pela energia que absorveu da runa escondida. Além disso, também tenho esse poderoso feitiço de telecinese, sua memória deve voltar e você será capaz de usar com facilidade, no entanto use com sabedoria. 
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="conhecer_anciao_parte_dois()">Continuar</button></a>`
}

function conhecer_anciao_parte_dois() {
    //Você conhece o ancião da vila, parte 2
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/phantom.gif')";

    var content = document.getElementById("content");
    content.innerHTML = `O vulto remove sua capa e revela ser o ancião da vila, Samurai Gomus, mas com muitas cicatrizes e ferimentos mágicos no rosto. Ele abre um portal para você, e diz "Entre, esse portal vai te levar ao campo de batalha, na hora certa, use a magia que te ensinei, infelizmente não poderei acompanhar, usei meus ultimos resquícios de magia para abrir esse portal e te ensinar essas magias. Boa sorte!
       <div class="pergunta">Entrar no portal?</div> 
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="vila_natal_runa()">Entrar no portal</button></a>

     
    <a><button class="botao_feiticeiro" class ="botao" onclick="cassino()">Negar e seguir para a próxima cidade</button></a>`
}


function encontrar_upl() {
    //Você corre do ancião e encontra a UPL
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/lake2.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você corre do vulto assutador em direção a uma floresta próxima. Assustado, sua primeira reação é se esconder do vulto em meio as árvores. O vulto passa por ela e parece não te ver. Algumas horas se passam e você sai do esconderijo, ao sair você percebe que um grupo de personagens bem diferentes fica te olhando com um olhar curioso. O grupo é composto por um morcego careca, uma pomba cromática, um pintinho timido, um anão forte, um androide de batalha, piguim de bigode e um livro falante com o título Saraivus. Você fica confuso, mas o pinguim te entrega um pedaço de papel com a seguinte mensagem : "SOMOS A UPL(UNIÃO DE PEQUENOS LÁRAPIOS") PASSE TODOS OS SEUS PERTENCES PARA NÓS AGORA", e o pinguim aponta um pedaço de frango frito para a sua cara como se fosse uma arma enquanto fala algo como "MACETAREI". Isso era uma ameaça? 
   <div class="pergunta">Enfim, passar os pertences ou não?</div>
        <br>
        <br>
         
        <a><button class="botao_feiticeiro" class ="botao" onclick="ser_roubado_upl()">Aceitar e passar seus pertences</button></a> 

        
        <a><button class="botao_feiticeiro" class ="botao" onclick="nao_ser_roubado_upl()">Não passar seus pertences</button></a>`
}

function ser_roubado_upl() {
    //A upl te rouba
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/lake3.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você passa seus pertences...?? Até mesmo a UPL acha sua ação estranha, eles saem com o mesmo olhar e fogem para o lago. De longe você percebe que eles estão bebendo junto a um carangueijo em uma garrafa... Quando chega um humano calvo, e dispersa todos os larápios, e fala "Foi mal, eles são assim mesmo, toma aqui seus pertences" Após perguntar quem era ele, o homem respode "Sou kaio, o líder deles, to tentando mudar a reputação deles aqui pelo bosque". Você agradece e sai... Agora você nunca saberá se isso foi um sonho esquisito ou não...
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="cassino()">Ir para a próxima cidade</button></a>`
    //Ir ao cassino
}

function nao_ser_roubado_upl() {
    //A upl te rouba
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/lake3.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você não passa seus pertences. "Por favor?" pede o morcego careca enquanto explica que só está roubando pois sua loja de ferramentas para morcegos foi arrombada e agora ele precisa de ajuda para viver próximo ao lago, junto aos peixes, você começa a ficar com dó do morcego, enquanto a pomba ri descontroladamente. 
   <div class="pergunta">Ajudar o morcego com seu dinheiro?</div>
    <br>
    <br>
     
    <a><button class="botao_feiticeiro" class ="botao" onclick="ajudar_morcego()">Sim</button></a>

     
    <a><button class="botao_feiticeiro" class ="botao" onclick="conhecer_tiao()">Não</button></a>`
}
function ajudar_morcego() {
    //Você ajuda o morcego
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/lake4.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você ajuda ele, sentiu que o morcego era uma boa pessoa, você entrega 10 peças de ouro, e o morcego se enche de alegria, depois de muita conversa com a UPL, você entende muitas coisas, uma conversa sobre carrinhos de brinquedo que nínguem brinca mais, uma conversa sobre a caça ao tesouros na casa do morcego, e da rivalidade entre o anão e o livro. Agora você se sente parte deles, aproveitando essa oportunidade, o morcego te pergunta se você não quer trabalhar para ele como funcionário da nova loja.
   <div class="pergunta">Você aceita?</div> 
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="ser_funcionario_abrofts()">Aceitar</button></a> 

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="conhecer_tiao()">Negar</button></a>`
}
function conhecer_tiao() {
    //Você nega ajudar o morcego e conhece tião e suas caronas confiáveis
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/lake1.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `
    Não. Você acabou de conhecer eles, a UPL fica triste, mas agradece por ter participado dessa aventura. Você se despede da UPL, e sai da floresta atravessando pelo lago. No final do bosque você encontra mais um humano, que se apresenta como Tião te oferece 10 moedas para chegar na sua cidade mais rápido.
   <div class="pergunta">Você aceita?</div> 
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="pegar_carona_tiao()">Aceitar</button></a>

     
    <a><button class="botao_feiticeiro" class ="botao" onclick="cassino()">Negar</button></a>`

}

function ser_funcionario_abrofts() {
    //Você se torna funcionário do morcego
    //Fim de jogo
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/morcegoFinal.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você se torna funcionário do morcego por tempo ilimitado, junto suas exigências absurdas, agora você é o responsável por cuidar proteger a loja dos arrombamentos. Será que um dia você ficará livre deste pesadelo?`
}

function pegar_carona_tiao() {
    //Você pega carona com o tião
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/lake3.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você pega carona com a figura, a pomba cromática e o livro falante vão junto, afinal apenas Tião é confiável para dirigir carruagens. Chegando no seu destino, você agradece Tião pela carona, e o Livro Falante pela ajuda ao criar este jogo.
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="vila_natal()">Seguir</button></a>`

    //Chegar na vila natal
}

function ganancia_cassino() {
    //Você fica preso no cassino
    //Fim de jogo
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/cassino.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você fica entusiasmado pela energia do lugar! Pessoas apostando em jogos de cartas, e conversas rolando soltas. No seu primeiro jogo, você ganha 15 peças de ouro!! Por que não tentar mais vezes? Na segunda, você consegue 35 peças de ouro!! Na terceira você perde 20 peças de ouro :(. Na quarta você ganha 4 peças de ouro... na centésima vigésima terceira, você ganha 4 peças de ouro. Calma aí!! Já se passaram 4 dias! O cassino tem alguma magia no ar... Mas você ignora e prefere continuar jogando... precisa recuperar o dinheiro perdido afinal.......`
}

function ignorar_cassino() {
    //Você ignora a magia do cassino
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/lake1.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você quase é atraído pela magia do cassino, mas conseguiu ignorar com muito esforço e ir em direção a sua vila natal.
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="vila_natal()">Continuar</button></a>`
    //Ir a vila natal
}

function vila_natal_runa() {
    //Com os conhecimentos da runa, você chega a vila natal
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/village.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você entra no portal, e se depara com sua vila em chamas, com androides atacando toda sua vila e seus amigos, familiares e conhecidos, você lembra do feitiço agora, mas não sente que é hora de usa-lo. A runa embaixo da terra, é isso que eles querem não? É simples, só entregar para eles então!
   <div class="pergunta">Entregar a runa, ou lutar?</div>
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="rajada_congelante()">Lutar</button></a>

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="entregar_runa()">Entregar</button></a>`
}

function rajada_congelante() {
    //Usa rajada congelante e salva a todos da vila, junto as construções
    //Fim de jogo
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/frost.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Você não pode entregar a runa. Ela é o que mantém a magia da vila viva. Você se concentra suas forças, e usa a magia misteriosa que o ancião lhe ensinou. A partir de você um raio enorme de rajadas congelantes, congelam não só a vila, como todos os androides e os moradores da vila. além disso, o gelo mágico reconstrói parte das casas, e agora fica fácil destruir todos os constructos de metal. Você acaba matando um por um. Após descongelar um por um dos membros da sua vila, você deixa sua vila em segurança junto ao ancião, e parte por conhecimento arcano ao redor do mundo, viajando pelo continente, recuperando sua memória perdida, e aumentando cada vez mais suas páginas no seu grimório.`
}

function entregar_runa() {
    //Você entrega a runa aos piratas
    //Fim de jogo
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/villageSafe.jpeg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você desenterra a runa com sua magia de telecinese, e entrega ao barco dos androides, "É ISSO QUE VOCÊS QUEREM? AQUI ESTÁ" você vocifera aos seus inimigos. Eles param o ataque de imediato, saqueando apenas umas últimas casas e partindo ao barco, alguns dos constructos riem com malicia e entram no barco com o seu saque. O capitão no barco sorri, e se prepara para partir. Sua jornada foi díficil e árdua, e você sente sua magia se esvairando com a falta da runa na vila. Mas com certeza você tem muito trabalho para fazer para reconstruir a vila e ajudar os feridos. Você espera que a tropa dos Navios vermelhos não volte. Mas nunca se sabe...`
}

function raio_luz_vila_natal() {
    //Você usa o raio de luz como um golpe... não parece surtir muito efeito
    //Morte
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/raioLuz.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Seu raio de luz não surte nenhum efeito em seus inimigos, apenas acaba por alerta-los. Eles se aproximam enquanto você se vê cercado pelo bando, eles acabam com você, enquanto sua vila assiste.
<a><button class="botao_feiticeiro" class ="botao" onclick="morrer()">MORTE</button></a>`
}

function concentrar_vila_natal() {
    //Você se concentra para lembrar feitiços ou achar armas
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/villageBurning.gif')";

    var content = document.getElementById("content");
    content.innerHTML = `Você se concentra mas não lembra de muita coisa, mas ao olhar para os lados, você percebe que sua antiga casa, em chamas, se encontra ao seu lado, e também tem um bastão com espinhos do seu outro lado próximo a um barril. 
   <div class="pergunta">Usar o bastão, ou ir para a sua casa?</div>
    <br>
    <br>
     
    <a><button class="botao_feiticeiro" class="botao" onclick="lutar_bastao()">Bastão</button></a>

     
    <a><button class="botao_feiticeiro" class="botao" onclick="casa_chamas()">Casa</button></a>`
}

function lutar_bastao() {
    //Você luta com seu bastão, mas você não era um bom guerreiro
    //Morte
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/villageBurning2.gif')";

    var content = document.getElementById("content");
    content.innerHTML = `Você pega o bastão e sai correndo em direção aos androides, você consegue derrubar o primeiro com um impacto muito rápido, mas quando ele cai no chão, os outros acabam caputurando você e levando até seu barco, seu destino agora é ser prisioneiro da maldita tripulação
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="morrer()">MORTE</button></a>`
}

function casa_chamas() {
    //Você entra na casa em chamas
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/villageBurning2.gif')";

    var content = document.getElementById("content");
    content.innerHTML = `Você adentra sua casa em chamas. E sai para o seu antigo quarto de estudos. Lá você encontra um pergaminho com um feitiço chamado "Bola de fogo", e encontra também um anel
    dourado e aparentemente mágico com uma placa "CUIDADO" ao lado. 
   <div class="pergunta">Pegar o anel, ou o pergaminho?</div>
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="anel_portal()">Anel</button></a>

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="pergaminho_casa_chamas()">Pergaminho</button></a>`
}

function pergaminho_casa_chamas() {
    //Você acha o pergaminho mágico
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/fireBall.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você lê o enorme pergaminho e sua memória começa a voltar, dois feitiços surgem em sua mente, são complexos, mas você dá conta. Só tem um problema, um dos feitiços tem um poder de destruição imenso que parte do conjurador, ou seja, você, e o outro feitiço exige um sacríficio. O ferreiro, açogueiro e alguns habitantes da sua vila vila está lutando contra 2 dos androides. Eles vão morrer de qualquer jeito, mas se você usar o feitiço Raio Vil agora, eles morrerão e o resto da sua vila fica protegida. Ou você pode atrair a atenção dos androides você mesmo, e usar a Bola de Fogo aonde você está, assim o ferreiro não vai morrer, e a vila estará salva. Mas você provavelmente não vai sair vivo.
   <div class="pergunta">Usar o feitiço de fogo, ou o feitiço vil?</div> 
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="raio_vil()">Vil</button></a>

    
    <a><button class="botao_feiticeiro" class ="botao" onclick="bola_de_fogo()">Fogo</button></a>`
}

function raio_vil() {
    //Você se torna um necromante
    //Fim de jogo
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/vile.png')";

    var content = document.getElementById("content");
    content.innerHTML = `Melhor metade da vila salva, do que ninguém a salvo, e se sacrificar aqui não é uma opção, você é o único que vai trazer paz pra vila no futuro, você usa o feitiço Raio Vil com um pesar no coração. O feitiço é realizado com sucesso e uma parte da sua vila, junto com os androides é incinerada e transformada em pó. Os outros habitantes te olham com um misto de desespero, desprezo e pavor, alguns deles correm em direção oposta a você enquanto outros choram e jogam objetos dos mais variados em sua direção. Eles não entenderam seu sacríficio... Um dos moradores, um guerreiro chamado Abrofts corta um dos seus braços, e grita enquanto chora "Você é uma vergonha. Nunca deveria ter voltado!" e cospe na sua cara. Você se esgueira em busca do exílio como uma última saída, e acaba por começar a estudar a arte das magias obscuras e da necromancia. Você se torna um mago das trevas, e agora sem seu braço, você busca vingança por aqueles que não te compreenderam.`
}

function bola_de_fogo() {
    //Você se sacrifica
    //Morte
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/fireBall.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `Você não é capaz de machucar nínguem, melhor assumir esse sacríficio e proteger sua vila. Você atraí os androides para longe da vila, e usa bola de fogo, mas como esperado, o feitiço parte por você e acaba não só incinerando os androides, como também a você mesmo. Você morreu, mas morreu como herói. As crianças contarão sua história para próximas gerações. Você agora faz parte da história
<a><button class="botao_feiticeiro" class ="botao" onclick="morrer()">MORTE</button></a>`
}

function anel_portal() {
    //Você acha o anel dos portais
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/portal.png')";

    var content = document.getElementById("content");
    content.innerHTML = `você lê a palavra "PORTAL", você corre para o campo de batalha esperando que o anel te salve. No meio da vila, você pula na cabeça de um dos androides, e usa sua adaga para matar um dos mecanoides, os outros tentam te atacar e acabam te cercando, você está indefeso e sua adaga caiu bem longe.
   <div class="pergunta">O que fazer?</div>
    <br>
    <br>
    
    <a><button class="botao_feiticeiro" class ="botao" onclick="portal_pirata()">Gritar PORTAL!</button></a>`
}

function portal_pirata() {
    //Você e sua vila agora são uma tripulação pirata!
    //Fim de jogo
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/ocean.gif')";

    var content = document.getElementById("content");
    content.innerHTML = `Você grita "PORTAL!", e pequenos portais acabam puxando todas as pessoas para portais estranhos e de uma coloração roxa, eles acabam sugando não só os androides, mas você e os moradores da vila. Vocês caem todos no meio do oceano, com pedaços de suas casas caindo no meio da água. MUITOS PEDAÇOS. Um pedaço gigante de um muro cai por cima dos androides. Quando tudo para de cair, você monta um pequeno abrigo com objetos que flutuam, e invade o navio pirata dos androides que estava por perto, agora você e sua antiga vila são Capitão ${nome} e sua tripulação.`
}


function exemplo() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/forest.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = ``
}