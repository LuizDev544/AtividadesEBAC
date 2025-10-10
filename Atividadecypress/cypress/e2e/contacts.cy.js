/// <reference types="cypress" />

describe('Testes da Agenda de Contatos', () => {
  const url = 'https://ebac-agenda-contatos-tan.vercel.app/'

  beforeEach(() => {
    cy.visit(url)
  })

  it('Deve incluir um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('João Teste')
    cy.get('input[placeholder="E-mail"]').type('joao@teste.com')
    cy.get('input[placeholder="Telefone"]').type('11988887777')
    cy.get('button.adicionar').click()
    cy.contains('João Teste').should('exist')
    cy.contains('joao@teste.com').should('exist')
    cy.contains('11988887777').should('exist')
  })

  it('Deve editar um contato existente', () => {
    cy.get('.edit').first().click()
    cy.get('input[placeholder="Nome"]').clear().type('João Editado')
    cy.get('input[placeholder="E-mail"]').clear().type('joao_editado@teste.com')
    cy.get('input[placeholder="Telefone"]').clear().type('11977776666')
    cy.get('button[type="submit"]').click()
    cy.contains('João Editado').should('exist')
    cy.contains('joao_editado@teste.com').should('exist')
    cy.contains('11977776666').should('exist')
  })

  it('Deve remover um contato', () => {
    cy.get('.delete').first().click()
    cy.contains('João Editado').should('not.exist')
  })
})
