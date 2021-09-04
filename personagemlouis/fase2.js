function escolha() {

    var pergunta = (prompt("decida sua escolha:\n1 – Louis e tiana correm até atravessar da floresta a cidade. \n2 – Louis não quis colocar a máscara e segue o caminho mais rápido, porém corre risco de ser reconhecido e pego."))

    while (pergunta != 1 && pergunta != 2) {
         pergunta = (prompt("decida sua escolha:\n1 – Louis e tiana correm até atravessar da floresta a cidade.\n2 –Louis não quis colocar a máscara e segue o caminho mais rápido, porém corre risco de ser reconhecido e pego."))
    }

    if (pergunta == 1) {
        window.location.replace('gameoverlouis.html')
    }
    else {
        window.location.replace('gameoverlouis.html')
    }

}
