programa
{
	 funcao inicio()
	 {
		cadeia frase1 , frase2
		inteiro tamanhopalavra , indice
		escreva("programa que verifica o email\n")
		escreva("\n")
		escreva("Insira o seu email:\n")
		leia(frase1)
		escreva("para confirmar , insira novamente o seu email:\n")
		leia(frase2)
		se (frase1 == frase2){
			escreva(" Parabens! o emails estão corretos")
		}
		senao{
			enquanto(frase1 != frase2){
				escreva(" Os emails não são iguais! tente novamente \n")
				escreva("Insira o seu email novamente:\n")
				leia(frase1)
				escreva("para confirmar , insira novamente o seu email:\n")
				leia(frase2)
				
			}
		}
	 }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 612; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */