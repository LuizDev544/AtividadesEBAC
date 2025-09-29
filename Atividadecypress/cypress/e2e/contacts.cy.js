/// <reference types="cypress" />

describe('Agenda de Contatos - Testes E2E', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve incluir um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('Maria Teste')
    cy.get('input[placeholder="E-mail"]').type('maria@teste.com')
    cy.get('input[placeholder="Telefone"]').type('11999999999')
    cy.contains('Adicionar').click()

    cy.contains('Maria Teste').should('be.visible')
    cy.contains('maria@teste.com').should('be.visible')
  })

  it('Deve alterar um contato existente', () => {
    cy.get('input[placeholder="Nome"]').type('Maria Teste')
    cy.get('input[placeholder="E-mail"]').type('maria@teste.com')
    cy.get('input[placeholder="Telefone"]').type('11999999999')
    cy.contains('Adicionar').click()

    cy.contains('Maria Teste').should('be.visible')
      .parents('li')
      .within(() => {
        cy.contains(/editar/i).should('be.visible').click()
      })

    cy.get('input[placeholder="Nome"]').clear().type('Maria Editada')
    cy.contains(/salvar/i).click()

    cy.contains('Maria Editada').should('be.visible')
  })

  it('Deve remover um contato', () => {
    cy.get('input[placeholder="Nome"]').type('Maria Apagar')
    cy.get('input[placeholder="E-mail"]').type('apagar@teste.com')
    cy.get('input[placeholder="Telefone"]').type('11999999999')
    cy.contains('Adicionar').click()

    cy.contains('Maria Apagar').should('be.visible')
      .parents('li')
      .within(() => {
        cy.contains(/excluir/i).should('be.visible').click()
      })

    cy.contains('Maria Apagar').should('not.exist')
  })
})
