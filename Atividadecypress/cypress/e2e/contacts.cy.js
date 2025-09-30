/// <reference types="cypress" />

describe('Agenda de Contatos - Testes E2E Adaptáveis', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  // Helper para criar contatos
  function criarContato(nome, email, telefone) {
    cy.get('input[placeholder="Nome"]').clear().type(nome)
    cy.get('input[placeholder="E-mail"]').clear().type(email)
    cy.get('input[placeholder="Telefone"]').clear().type(telefone)
    cy.contains('Adicionar').click()
  }

  // Helper para realizar ação em um contato (editar ou excluir)
  function acaoContato(nome, acao) {
    cy.contains(nome)
      .closest('li, div, tr') // cobre os principais tipos de container
      .within(() => {
        cy.contains(new RegExp(acao, 'i')).click()
      })
  }

  it('Deve incluir um novo contato', () => {
    criarContato('Maria Teste 1', 'maria1@teste.com', '11999990001')

    cy.contains('Maria Teste 1').should('be.visible')
    cy.contains('maria1@teste.com').should('be.visible')
  })

  it('Deve alterar um contato existente', () => {
    criarContato('Maria Teste 2', 'maria2@teste.com', '11999990002')

    acaoContato('Maria Teste 2', 'editar')

    cy.get('input[placeholder="Nome"]').clear().type('Maria Editada')
    cy.contains(/salvar/i).click()

    cy.contains('Maria Editada').should('be.visible')
    cy.contains('Maria Teste 2').should('not.exist')
  })

  it('Deve remover um contato', () => {
    criarContato('Maria Apagar', 'apagar@teste.com', '11999990003')

    acaoContato('Maria Apagar', 'excluir')

    cy.contains('Maria Apagar').should('not.exist')
  })
})
