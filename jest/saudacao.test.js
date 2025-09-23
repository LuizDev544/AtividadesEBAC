const saudacao = require('./saudacao');

describe('teste para saudação', () => {
    test('deverá retornar olá, maria', () => {
        const olaMaria = saudacao.dizOla(' maria');
        expect(olaMaria).toBe('Olá maria');
    });
});
