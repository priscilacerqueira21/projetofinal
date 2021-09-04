function escolha() {

    var pergunta = (prompt("decida sua escolha:\n1 – Charlotte dá um beijo no príncipe ignorando sua amiga, e desfazendo a amizade de anos entre elas.\n2 – Charlotte chegando no castelo, reúne uma festa de casamento para Tiana e o príncipe  Naveen."))

    while (pergunta != 1 && pergunta != 2) {
         pergunta = (prompt("decida sua escolha:\n1 – Charlotte dá um beijo no príncipe ignorando sua amiga, e desfazendo a amizade de anos entre elas.\n2 – Charlotte chegando no castelo, reúne uma festa de casamento para Tiana e o príncipe  Naveen."))
    }

    if (pergunta == 1) {
        window.location.replace('./vocevenceuray.html')
    }
    else {
        window.location.replace('./gameover.html')
    }

}