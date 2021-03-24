import { generate, multiAppend } from "./shortcutFunctions";

function resumo () {
    let ficha = generate("div", "resumo");

    let tamanho = generate("div", "tamanho");
        let textoSuperior = generate("p", "tamanhoPre", "mais de");
        let textoDestaque = generate("p", "tamanhoN", "15.000m²");
        let textoInferior = generate("p", "tamanhoPos", "de área útil para sua família");
    multiAppend(tamanho, textoSuperior, textoDestaque, textoInferior);
    
    let areaExterna = generate("div", "areaExternaDiv");
        let piscinaTitulo = generate("h2", "areaExternaTitulo", "Piscina com borda infinita");
        let piscinaDesc = generate("p", "areaExternaDesc", "Com 10m de comprimento, a borda infinita aponta para uma profunda vista bucólica, com montes verdes que marcam o território da Floresta Nacional de Ipanema");
        let vegetacaoTitulo = generate("h2", "areaExternaTitulo", "Vegetação");
        let vegetacaoDesc = generate("p", "areaExternaDesc", "Flores coloridas, árvores frutíferas, arbustos de ervas finas e plantas nativas se misturam na paisagem verde que compõe a área em que ficarão no sítio.");
        let cozExtTitulo = generate("h2", "areaExternaTitulo", "Cozinha Externa");
        let cozExtDesc = generate("p", "areaExternaDesc", "Próximo ao salão de jogos e à piscina, um forno de pizza e churrasqueira, equipados com todos utensílios necessários.");
        let entretTitulo = generate("h2", "areaExternaTitulo", "Entretenimento");
        let entretDesc = generate("p", "areaExternaDesc", "Campo de futebol, mesa para carteado, mesa de ping-pong, piscina, espaço para fogueira e muita área livre para brincadeiras são algumas opções para sua família - e para aproveitar um filme a noite, há TV a cabo e Netflix.");
        let contatoExtBtn = generate("button", "contatoBtn", "Traga sua família");
        contatoExtBtn.addEventListener("click", e =>{return window.open("https://www.airbnb.com.br/rooms/43450708")});
    multiAppend(areaExterna, piscinaTitulo, piscinaDesc, vegetacaoTitulo, vegetacaoDesc, cozExtTitulo, cozExtDesc, entretTitulo, entretDesc, contatoExtBtn);

    let fotoFachada = generate("img", "foto");
    fotoFachada.setAttribute("src", "./Resources/fachada.jpeg");

    let cafedaManha = generate("img", "foto");
    cafedaManha.setAttribute("src", "./Resources/cafedamanha.jpg")


    let casa = generate("div", "casaDiv");
        let quartosTitulo = generate("h2", "casaTitulo", "7 suítes");
        let quartosDesc = generate("p", "casaDesc", "4 camas de casal e 8 camas de solteiro - sendo 4 em beliches, perfeito para crianças - dividas em 7 quartos com banheiros completos e chuveiro a gás");
        let cozinhaTitulo = generate("h2", "casaTitulo", "Cozinha completa e copa");
        let cozinhaDesc = generate("p", "casaDesc", "Com infraestrutura e louça para todos seus hóspedes, a cozinha ainda conta com uma copa em anexo ideal para o café da manhã.");
        let salasTitulo = generate("h2", "casaTitulo", "Salas de estar e Jantar");
        let salasDesc = generate("p", "casaDesc", "Além de uma ampla sala de estar, o sítio conta com uma sala de jantar e outra de leitura.");
        let equipeTitulo = generate("h2", "casaTitulo", "Equipe profissional");
        let equipeDesc = generate("p", "casaDesc", "Sua estadia será acompanhada pela Lu, auxiliar da casa encarregada da limpeza e culinária, e Pedro, gestor do sítio que ajudará com qualquer problema que possa surgir. Opcionalmente, você poderá também contratar churrasqueiro e pizzaiolo.");
        let contatoCasaBtn = generate("button", "contatoBtn", "Reserve agora");
        contatoCasaBtn.addEventListener("click", e =>{return window.open("https://www.airbnb.com.br/rooms/43450708")});
    multiAppend(casa, quartosTitulo, quartosDesc, cozinhaTitulo, cozinhaDesc, salasTitulo, salasDesc, equipeTitulo, equipeDesc, contatoCasaBtn)
    
    let contato = generate("button", "fotosBtn", "Veja mais fotos");
    contato.addEventListener("click", e =>{return window.open("https://www.airbnb.com.br/rooms/43450708")});

    multiAppend(ficha, tamanho, areaExterna, fotoFachada, cafedaManha, casa, contato);
    
    return ficha;
}




export {resumo}