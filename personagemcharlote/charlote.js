function escolha() {
    var pergunta = (prompt("Digite sua escolha :\n1 - Charlotte abre mão dos cuidados com sua unha e enfrenta entrar no lago com bichinhos e sujeira, pensando que vai conseguir retribuir tudo que sua amiga já fez para ela.\n2 - Charlotte começa a chorar, e entra em desespero e volta correndo para o castelo do pai dela, desistindo de ajudar sua amiga Tiana, pensando em si, e na sua vaidade, afinal uma princesa sempre anda bela."))
   
        while (pergunta !=1 && pergunta !=2) {
            pergunta = (prompt("Digite sua escolha:\n1 -  Charlotte abre mão dos cuidados com sua unha e enfrenta entrar no lago com bichinhos e sujeira, pensando que vai conseguir retribuir tudo que sua amiga já fez para ela.\n2 - Charlotte começa a chorar, e entra em desespero e volta correndo para o castelo do pai dela, desistindo de ajudar sua amiga Tiana, pensando em si, e na sua vaidade, afinal uma princesa sempre anda bela."))
        }

        if (pergunta == 1) {
            window.location.replace('segundafasecharlotte.html')
        }
        else {
            window.location.replace('./gameovercharlote.html')
        }
    } 
    