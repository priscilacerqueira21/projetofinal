function escolha() {

    var pergunta = (prompt("decida sua escolha:\n1 – Ray continua ajudando Tiana a iluminar o caminho. \n2 – Ray vai ao encontro de Evangeline seu grande amor."))

    while (pergunta != 1 && pergunta != 2) {
         pergunta = (prompt("decida sua escolha:\n1 – Ray continua ajudando Tiana a iluminar o caminho.\n2 – Ray vai ao encontro de Evangeline seu grande amor."))
    }

    if (pergunta == 1) {
        window.location.replace('./vocevenceuray.html')
    }
    else {
        window.location.replace('./gameover.html')
    }

}