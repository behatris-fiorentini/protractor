/**
 * @file conf.js
 */

/**Objeto config do javascript
 * SeleniumAddress: onde o selenium está rodando;
 * http://localhost:4444/wd/hub = valor que vem por default quando o protractor é instalado;
 * Specs: Quais os teste que deverão ser executados
 * o Spec é um array, que eu posso colocar quantos arquivos de testes eu quiser
 */

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    // capabilities: {
    //     browserName: 'firefox'
    // },
    // MultiCapabilities: [{
    //     browserName: 'chrome'
    // } {
    //     browserName: 'firefox'
    // }],
    // baseUrl: 'http://demo.choko.org/'
}