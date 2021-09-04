function escolha() {
    var pergunta = (prompt("Digite sua escolha :\n1 - Louis decide ir com Tiana por um caminho dentro da floresta, é um caminho mais longo, onde ele logo se cansará\n2 - não ajudar Tiana, afinal se ele for ele corre riscos grandes de ser caçado e morto pelos caçadores."))
   
        while (pergunta !=1 && pergunta !=2) {
            pergunta = (prompt("Digite sua escolha:\n1 -  Louis decide ir com Tiana por um caminho dentro da floresta, é um caminho mais longo, onde ele logo se cansará\n2 - não ajudar Tiana, afinal se ele for ele corre riscos grandes de ser caçado e morto pelos caçadores."))
        }

        if (pergunta == 1) {
            window.location.replace('fase2louis.html')
        }
        else {
            window.location.replace('./gameover.html')
        }
    } 