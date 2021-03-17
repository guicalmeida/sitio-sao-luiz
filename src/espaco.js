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
    multiAppend(areaExterna, piscinaTitulo, piscinaDesc, vegetacaoTitulo, vegetacaoDesc, cozExtTitulo, cozExtDesc, entretTitulo, entretDesc);

    


    multiAppend(ficha, tamanho, areaExterna);
    return ficha;
}


export {resumo}