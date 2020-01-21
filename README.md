### PIRÂMIDE DE TESTES: 
Para garantir que aplicações de software tenham qualidade, estas devem possuir uma boa base de testes.
* Nível de unidade (base da pirâmide);
*Alguns testes de integração, para verificar que as partes da aplicação quando integradas funcionam sem problemas (meio da pirâmide);
* Em menor número de testes de UI (user interface, feito com Protractor), também conhecidos como testes end-to-end (e2e).

![alt text](https://www.google.com/search?q=piramide+testes+software&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjShbno7pLnAhVwdt8KHTJHAxMQ_AUoAXoECAwQAw&biw=1920&bih=1008#imgdii=JQ-mDo1T3o_R3M:&imgrc=LYUemMGFfryNJM:)

### PROTACTOR:
* Framework, open source, para testes end-to-end para aplicações em Angular.
* Interage com as aplicações, como um usuário real faria;
* Funciona em conjunto com Selenium;
* O servidor Selenium (framework de teste de software portável para aplicações web) interpreta comandos de teste e os envia ao navegador. Já o Protractor cuida dos scripts de testes escritos em JavaScript, usando Node.js

### PRÉ-REQUISITOS:
* Node acima da vs 0.10.0;

### INSTALANDO:
* sudo npm install -g protractor
* sudo npm install -g webdriver-manager
* protractor –version
* webdriver-manager update
* protractor protractor.conf.js

→ NVM
* wget https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh
* sudo chmod +x install.sh
* sudo ./install.sh

→ Para instala apenas como dependência do projeto e não globalmente (como os casos acima):
* npm install protractor --save-dev
* npm install webdriver-manager --save-dev

### ARQUIVO DE CONFIGURAÇÃO: 
* É preciso criar um arquivo de configuração, onde vai definir questões como:
  *  o endereço onde o servidor do Selenium;
  * Qual navegador os testes serão executados;
  * Quais testes serão executados;
  * Qual a URL base para o início de cada teste;
  * E diversas outras possíveis configurações.



### LOCALIZADORES:
--> Formas de interagir, para reaizar os testes
* Podemos encontrar via seletor css
	-Exemplo: by.css('.minhaclasse'); ou by.css('#meuid');
* Através da sua classe:
	- by.className('minhaclasse');
* Pelo ID:
	- by.id('meuid');
* Pelo ng-model
	- by.model('modelo');


### AÇÕES
--> Identificados os elementos, para fazer os testes, precisamos interagir com eles;
EXEMPLOS: 
	//Amazenando o elemento detectado
	var el = element(by.css('.minhaclasse'));

  //Clica no elemento
  el.click();

  //Envia texto oara o elemento (normalmente para inputs)
  el.sendKeys('texto');

  //Limpa o texto de um elemento (normalmente para inputs)
  el.clear();

  //Obtem o valor de um atributo. por exemplo, pega o valor de um input
  el.getAttribute('value');


  ### VERIFICAÇÕES
  var el = element(by.css('.minhaclasse'));

  //Verifica que o texto de um elemento é igual ao esperado -- getText trás o texto do elemento
  expect(el.getText()).toEqual('texto');

  //Verifica que o texto de um elemento contém um texto esperado
  expect(el.getText()).toContain('texto');

  //Verifica que um elemento está sendo exibido
  expect(el.isDisplayed()).toBe(true);

  //Verifica que um elemento está presente
  expect(el.isPresent()).toBe(true);

### NAVEGADORES SUPORTAO
  * Chrome, Firefox, Safari e IE
  
### CONFIGURAÇÕES
* Dois arquivos são fundamentais para a criação dos testes:
  * Arquivo de configuração, com todas as configurações do teste, onde o sellenium vai estar rodando, de onde pega os testes, quais testes vão ser executados, navegados e etc. (conf.js)
  * spec: onde vai estar especificando os testes que vão ser executados. (spec.js)

### RODANDO O TESTE
* Criado os arquivos de configuração, precisa-se startar o selenium:
    webdriver-maneger start
    webdriver-maneger start
* Para rodar o teste, dentro da pasta onde está o arquivo de configuração::
    protractor conf.js
  

### OBTENDO ELEMENTOS ESPECÍFICOS DO ANGULAR
* by.binding
    exemplo:
    <span>{{person.name}}</span>
    <span ng-bind='person.email'></span>

    element((by.binding('person.name')));
    element((by.binding('person.email')));

* by.model
    exemplo:
    <input type='text' ng-model='person.name' />

    element(by.model('person.name'));

* by.repeater
    exemplo:
    <div ng-repeat='cat in pets'>
      <span>{{cat.name}}</span>
      <span>{{cat.age}}</span>
    </div>

    element(by.repeater('cat in pets').row(1));
    element(by.repeater('cat in pets').row(0).column('cat.name));

* by.options
      exemplo:
  <select ng-model='color' ng-options='c for c in colors'>
    <option value='0' selected='selected'>red</option>
    <option value='1'>green</option>
  </select>

  var allOptions = element.all(by.options('c for c in colors'));
  var firstOption = allOptions.first();


### OBTENDO ELEMENTOS DE QUALQUER APLICAÇÃO
* Seletores: by.id, by.className, by.css, by.cssContainingText, by.buttonText, by.partialButtonText.
  
* by.id
    exemplo:
    <div id='meuid'>teste</div>
    element(by.id('meuid'));

* by.className
    exemplo:
    <div class='minhaclasse'>teste</div>
    element(by.className('minhaclasse'));

* by.css
    exemplo:
    <div>
      <a href='http://test.com'>Link</a>
    </div>

    element(by.css('div a));

* by.cssContainingText
      exemplo:
      <div>
        <a href='http://link.com'>Link</a>
        <a href='http://test.com'>test</a>
      </div>

      //Recebe 2 argumentos: 1-seletor css e 2-texto do elemento
      element(by.cssContainingText('div a', 'Link));

* by.buttonText
      exemplo:
      <button>Botão</button>

      element(by.buttonText('Botão'));

* by.partialButtonText
      exemplo:
      <button>Green Button</button>

      //Busca por parte do texto do botão
      element(by.partialButtonText('Green));
      element(by.partialButtonText('Button));


### RODAR O SELENIUM EM UMA PORTA DIFERENTE DA PADRÃO
* Comando: webdriver-manager --seleniumPort 4443
* É preciso mudar a porta no arquivo de configuração seleniumAccess.
* Ou pode ser feito da seguinte forma:
  * protractor conf.js --seleniumAddress http://localhost:4443/wd/hub --> consigo sobrescrever a configuração

### DEFINIR EM QUAL NAVEGADOR SERÁ RODADO O TESTE
* Google Chrome é o padrão;
* capabilities
    capabilities:{
      browserName: 'firefox'
    }

### COMO RODAR OS TESTES EM PARALELO EM MAIS DE UM NAVEGADOR
* MultiCapabilities
    MultiCapabilities:[
      {
        browserName: 'chrome'
      }
      {
        browserName: 'firefox'
      }
    ]

### CONFIGURAÇÃO BASEURL
* baseUrl: quando for rodar os testes, chamar apenas uma url relativa. 
* No angular as rotas são baseadas nas urls da aplicação;
* Não faz sentido sempre passar a url absoluta (toda a url);
* Exemplo: na página de login, podemos passar, podemos passar só o "/login" (e ter que mudar elas no ambiente de desenvolvimento, para homologação, produção, etc);
* quando configurada a baseUrl, não preciso no "browser.driver.get()" (que pode se transformar em um "browser.get()) passar toda a url da página.
      baseUrl: 'http://demo.choko.org/'









