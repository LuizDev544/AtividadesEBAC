/// <reference types="cypress" />

describe('Agenda de Contatos - Testes E2E Adaptáveis', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  function criarContato(nome, email, telefone) {
    cy.get('input[placeholder="Nome"]').clear().type(nome)
    cy.get('input[placeholder="E-mail"]').clear().type(email)
    cy.get('input[placeholder="Telefone"]').clear().type(telefone)
    cy.contains('Adicionar').click()
  }

  function esperarContato(nome) {
    cy.contains(nome, { timeout: 5000 }).should('be.visible')
  }

  function acaoContato(nome, acao) {
    esperarContato(nome)

    cy.contains(nome)
      .parentsUntil('ul, div, section') 
      .parent()
      .within(() => {
        cy.contains(new RegExp(acao, 'i')).click({ force: true })
      })
  }

  it('Deve incluir um novo contato', () => {
    criarContato('Maria Teste 1', 'maria1@teste.com', '11999990001')
    esperarContato('Maria Teste 1')
    cy.contains('maria1@teste.com').should('be.visible')
  })

  it('Deve alterar um contato existente', () => {
    criarContato('Maria Teste 2', 'maria2@teste.com', '11999990002')
    esperarContato('Maria Teste 2')

    acaoContato('Maria Teste 2', 'editar')

    cy.get('input[placeholder="Nome"]').clear().type('Maria Editada')
    cy.contains(/salvar/i).click()

    esperarContato('Maria Editada')
    cy.contains('Maria Teste 2').should('not.exist')
  })

  it('Deve remover um contato', () => {
    criarContato('Maria Apagar', 'apagar@teste.com', '11999990003')
    esperarContato('Maria Apagar')

    acaoContato('Maria Apagar', 'excluir')

    cy.contains('Maria Apagar', { timeout: 5000 }).should('not.exist')
  })
})
