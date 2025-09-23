const calc = require('./calculadora');

describe('Testando a calculadora', () => {
test('SOMAR 2 E 2 DEVE RESULTAR 4', () => {
    const minhaSoma = calc.somar(2, 2)

    expect(minhaSoma).toBe(4)
})

test('multiplicar 3 com 3 deve resultar em nove', () => {
    const minhaMultiplicacao = calc.multiplicar(3, 3)

    expect(minhaMultiplicacao).toBe(9)
})

});