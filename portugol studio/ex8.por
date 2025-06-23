programa
{
	
	funcao inicio()
	{
		escreva("\n|Programa que calcula duas matrizes e gera uma novas matriz das somatórias|\n")
		inteiro matriz1[2][2] , matriz2 [2][2] , matriz3 [2][2]
		matriz1[0][0] = 1
		matriz1[0][1] = 2
		matriz1[1][0] = 3
		matriz1[1][1] = 4
		
		matriz2[0][0] = 5
		matriz2[0][1] = 6
		matriz2[1][0] = 7
		matriz2[1][1] = 8
		
		matriz3[0][0]= matriz1[0][0] + matriz2[0][0]
		matriz3[0][1]= matriz1[0][1] + matriz2[0][1]
		matriz3[1][0]= matriz1[1][0] + matriz2[1][0]
		matriz3[1][1]= matriz1[1][1] + matriz2[1][1]
		
		escreva("\nPrimeira matriz\n")
		escreva("\t[",matriz1[0][0],"]","[",matriz1[0][1],"]\n")
		escreva("\t[",matriz1[1][0],"]","[",matriz1[1][1],"]")

		escreva("\nSegunda matriz\n")
		escreva("\t[",matriz2[0][0],"]","[",matriz2[0][1],"]\n")
		escreva("\t[",matriz2[1][0],"]","[",matriz2[1][1],"]")
		
		escreva("\nTerceira matriz\n")
		escreva("\t[",matriz3[0][0],"]","[",matriz3[0][1],"]\n")
		escreva("\t[",matriz3[1][0],"]","[",matriz3[1][1],"]")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 351; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */