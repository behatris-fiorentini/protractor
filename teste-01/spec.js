import { element } from "protractor/built";

/**
 * @file conf.js
 */
/**Utiliza a biblioteca do jasmini para escrever os testes
 * Ela possui duas funcionalidades principais:
 * - describe, que recebe dois argumentos:
 * --> 1º: nome da funcionalidade ou tela que está testando
 * --> 2º: função que vai ser executada
 * --> Cada teste é um it, que também é uma função que recebe uma descrição e uma função
 * Resumindo: specs são describes e its. Os describe descreve a funcionalidade ou a tela que está sendo testada e os Its são cada teste.
 */

describe('Choko demo', function() {
    it('title', function() {
        //se eu tiver a baseUrl, a linha abaixo ficaria browser.get('/'), se fosse a página de login browser.get('/login')
        browser.driver.get('https://devstore.io/js/choko');
        var title = element(by.css('h1'));
        //verifica se o texto da tag h1 é o informado
        expect(title.getText()).toEqual('choko');
    });
});