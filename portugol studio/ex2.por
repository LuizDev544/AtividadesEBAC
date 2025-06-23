programa
{
	
	funcao inicio()
	{
		escreva("Programa de classficação de faixa etária de filmes!")
		inteiro idade
		escreva("Digite sua idade:")
		leia(idade)
		se (idade <10){
			escreva("Voce digitou a idade de ",idade," anos")
			escreva("Sendo assim , vc poderá ve apenas conteúdos livres infantis!")
		}
		senao se ((idade >=10)e(idade <12)){
			escreva("Voce digitou a idade de ",idade," anos")
			escreva("Então voce pode assistir vários conteúdos a partir de 10 anos para frente!")
			escreva("Mas não poderá ve os de acima de 12 anos!")
		}
		senao se ((idade >=12)e(idade <14)){
			escreva("Voce digitou a idade de ",idade," anos")
			escreva("Então voce pode assistir vários conteúdos a partir de 12 anos para frente!")
			escreva("Mas não poderá ve os de acima de 14 anos!")
		}
		senao se ((idade >=14)e(idade <16)){
			escreva("Voce digitou a idade de ",idade," anos")
			escreva("Então voce pode assistir vários conteúdos a partir de 14 anos para frente!")
			escreva("Mas não poderá ve os de acima de 16 anos!")
		}
		senao se ((idade >=16)e(idade <18)){
			escreva("Voce digitou a idade de ",idade," anos")
			escreva("Então voce pode assistir vários conteúdos a partir de 16 anos para frente!")
			escreva("Mas não poderá ve os de acima de 18 anos!")
		}
		senao{
			escreva("Voce digitou a idade de ",idade," anos")
			escreva("então voce livremente para ver conteúdos de todas as idades!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 313; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */