programa
{
	
	funcao inicio()
	{
		escreva("\n\tProgama que verifica se o numero é IMPAR ou PAR\n")
		inteiro numero,resto
		escreva("\nDigite um numero inteiro:")
		leia(numero)
		escreva("O numero digitado é ",numero,"\n")
		resto= numero % 2
		se (resto!=0){
			escreva("Sendo assim, o seu numero é impar\n")
		}
		senao {
			escreva("Sendo assim, o seu numero é par")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 215; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */