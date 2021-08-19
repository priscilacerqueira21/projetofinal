function escolha() {
    var pergunta = (prompt("Digite sua escolha :\n1 - Ray ajuda Tiana a iluminar o caminho\n2 - Ray pode ser pisoteado na cidade"))
   
        while (pergunta !=1 && pergunta !=2) {
            pergunta = (prompt("Digite sua escolha:\n1 -  Ray ajuda Tiana a iluminar o caminho\n2 - Ray pode ser pisoteado na cidade"))
        }

        if (pergunta == 1) {
            window.location.replace('./fase2ray.html')
        }
        else {
            window.location.replace('./gameover.html')
        }
    } 
    