//Passagem de variaveis para montar o cabeçalho da prova
var nome = sessionStorage.getItem('nome')
var instituicao = sessionStorage.getItem('instituicao')

var nomeAluno = document.querySelector("#nomeAluno")
nomeAluno.innerHTML = "Nome: " + nome
var instituicaoAluno = document.querySelector("#intituicaoAluno")
instituicaoAluno.innerHTML = "Instituição de Ensino: " + instituicao

//#region Provas
const provasRedes = [ 
    provaRedes1 = {
    questão1: {
        pergunta: "As redes de computadores cabeadas atuais são implementadas por meio de cabos UTP, não blindados, que usam um conector específico, em conformidade com os padrões Fast Ethernet e Gigabit Ethernet. Aimagem e sigla utilizadas para referenciar esse conector estão indicadas na seguinte alternativa:",
        alt1: "RJ-45",
        alt2: "RG-6",
        alt3: "USB",
        alt4: "HDMI",
        alt5: "",
        resp: "RJ-45"
    },
    questão2: {
        pergunta: "Em uma rede local, cujas estações de trabalho usam o sistema operacional Windows XP e endereços IP fixos em suas configurações de conexão, um novo host foi instalado e, embora esteja normalmente conectado à rede, não consegue acesso à internet distribuída nessa rede. Considerando que todas as outras estações da rede estão acessando a internet sem dificuldades, um dos motivos que pode estar ocasionando esse problema no novo host é",
        alt1: "a codificação incorreta do endereço de FTP para o domínio registrado na internet.",
        alt2: "a falta de registro da assinatura digital do host nas opções da internet.",
        alt3: "um erro no Gateway padrão, informado nas propriedades do Protocolo TCP/IP desse host.",
        alt4: "um erro no cadastramento da conta ou da senha do próprio host.",
        alt5: "um defeito na porta do switch onde a placa de rede desse host está conectada.",
        resp: "um erro no Gateway padrão, informado nas propriedades do Protocolo TCP/IP desse host."
    },
    questão3: {
        pergunta: "Para conectar sua estação de trabalho a uma rede local de computadores controlada por um servidor de domínios, o usuário dessa rede deve informar uma senha e um[a]",
        alt1: "endereço de FTP válido para esse domínio.",
        alt2: "endereço MAC de rede registrado na máquina cliente.",
        alt3: "porta válida para a intranet desse domínio.",
        alt4: "conta cadastrada e autorizada nesse domínio. ",
        alt5: "certificação de navegação segura registrada na intranet.",
        resp: "conta cadastrada e autorizada nesse domínio. "
    },
    questão4: {
        pergunta: "Hoje, nas Redes Locais (LAN) cabeadas, o meio de transmissão mais utilizado é o",
        alt1: "Cabo de par trançado.",
        alt2: "Cabo de fibra óptica.",
        alt3: "Cabo coaxial.",
        alt4: "Cabo Ethernet.",
        alt5: "Cabo fino 10BASE-T.",
        resp: "Cabo de par trançado."
    },
    questão5: {
        pergunta: "A. Qual a função de um roteador em uma rede de computadores, e em qual nível de camada ele trabalha no modelo TCP/IP.",
        alt1: "Ligar computadores em uma rede local, trabalhando em camada 2 (enlace)",
        alt2: "Espalhar pacotes para todos hosts de uma LAN, trabalha em camada 2 (enlace)",
        alt3: "Interligar redes de computadores, com diferentes rotas, trabalhando em camada 3 (rede)",
        alt4: "",
        alt5: "Interagir diretamente com aplicação de redes, tais como um web browser, em camada 1 (aplicação)",
        resp: "Interligar redes de computadores, com diferentes rotas, trabalhando em camada 3 (rede)"
    },
    questão6: {
        pergunta: "Considerando o modelo de referência OSI, marque a alternativa correta em relação à camada onde um as atividades de um HUB são implementadas",
        alt1: "Física e enlace",
        alt2: "Transporte e Rede",
        alt3: "Aplicação e Apresentação",
        alt4: "Sessão",
        alt5: "",
        resp: "Física e enlace"
    },
    questão7: {
        pergunta: "Os clusters envolvem a execução de aplicações que acessam e modificam dados compartilhados. Como resultado é mais difícil tornar tolerantes a falhas instalações de clusters, pois requerem software de monitoramento de falhas e infraestrutura especial. Clusters de alta disponibilidade incluem dois ou mais computadores e discos compartilhados. Sobre este tema considere: I. Qualquer aplicação pode ser armazenada nos computadores ou no disco compartilhado, mas os dados devem ser armazenados no disco compartilhado. II. Se a aplicação falhar e não puder ser reiniciada ou se o computador inteiro falhar, o acesso exclusivo do nó aos dados da aplicação será encerrado e concedido a outro nó do cluster. A aplicação será reiniciada neste novo nó. III. Se a aplicação falhar e for reiniciada perderá as informações de estado que se encontravam na memória do sistema que falhou, mas poderá continuar a funcionar com base no estado que gravou pela última vez no disco compartilhado. Está correto o que se afirma em",
        alt1: "I e II, apenas.",
        alt2: "III, apenas.",
        alt3: "II, apenas.",
        alt4: "I e III, apenas.",
        alt5: "I, II e III.",
        resp: "I, II e III."
    },
    questão8: {
        pergunta: "São elementos ativos em uma rede de computadores",
        alt1: "Aqueles que não modificam/alteram os dados durante o tratamento dos mesmos",
        alt2: "Aqueles que inserem modificações significativas aos blocos de dados por ele tratados",
        alt3: "Aqueles que apenas concentram sinais elétricos",
        alt4: "Aqueles que repetem o sinal elétrico",
        alt5: "",
        resp: "Aqueles que inserem modificações significativas aos blocos de dados por ele tratados"
    },
    questão9: {
        pergunta: "São máscaras padrão de redes, respectivamente de classe A, B e C",
        alt1: "255.255.255.0, 255.255.0.0 255.0.0.0",
        alt2: "255.255.0.0, 255.0.0.0, 255.255.255.0",
        alt3: "0.0.0.0, 255.0.0.0, 255.255.0.0",
        alt4: "255.0.0.0, 255.255.0.0, 255.255.255.0",
        alt5: "",
        resp: "255.0.0.0, 255.255.0.0, 255.255.255.0"
    },
    questão10: {
        pergunta: "Apesar de os navegadores serem as ferramentas dominantes na internet, vários serviços possuem ferramentas próprias mais adequadas e, inclusive, mais otimizadas para protocolos específicos. Um desses protocolos foi desenvolvido para a transferência de arquivos, sendo usado a partir de programas como FileZilla. Esse protocolo é conhecido como",
        alt1: "FTP",
        alt2: "IMAP",
        alt3: "POP3",
        alt4: "SSH",
        alt5: "TELNET2",
        resp: "FTP"
    }
}, provaRedes2 = {
    questão1: {
        pergunta: "Nas questões que avaliem conhecimentos de informática, a menos que seja explicitamente informado o contrário, considere que: todos os programas mencionados estejam em configuração-padrão, em português; o mouse esteja configurado para pessoas destras; expressões como clicar, clique simples e clique duplo refiram-se a cliques com o botão esquerdo do mouse; e teclar corresponda à operação de pressionar uma tecla e, rapidamente, liberá-la, acionando-a apenas uma vez. Considere também que não haja restrições de proteção, de funcionamento e de uso em relação aos programas, arquivos, diretórios, recursos e equipamentos mencionados. As redes de computadores mostradas na figura acima possuem endereços conhecidos como IP (Internet Protocol). Sabendo-se que há versões diferentes de IP, é correto afirmar que os endereços mostrados na figura estão representados no formato",
        alt1: "IPv2.",
        alt2: "IPv4.",
        alt3: "IPv5.",
        alt4: "IPv6.",
        alt5: "IPv8.",
        resp: "IPv6."
    },
    questão2: {
        pergunta: "No que diz respeito aos conceitos básicos das redes de computadores, o termo topologia diz respeito ao layout físico empregado na implementação da rede e à forma como são feitas as conexões, havendo diversas configurações, sendo uma delas a mais empregada pelas características e vantagens que propicia. A figura abaixo ilustra o esquema básico dessa topologia: \n Do ponto de vista físico, essa topologia é conhecida por ",
        alt1: "anel ou cíclica.",
        alt2: "malha ou mesh.",
        alt3: "distribuída ou descentralizada.",
        alt4: "árvore ou hierárquica.",
        alt5: "estrela ou radial.",
        resp: "estrela ou radial. "
    },
    questão3: {
        pergunta: "Um IP é um (uma):",
        alt1: "Interface.",
        alt2: "endereço de rede.",
        alt3: "linguagem de programação.",
        alt4: "Roteador.",
        alt5: "Modelo da CPU.",
        resp: "endereço de rede."
    },
    questão4: {
        pergunta: "Considere o trecho a seguir: O protocolo da internet _____, foi desenvolvido para permitir a recuperação de correios eletrônicos, mensagens de servidores e de e-mail. Assinale a alternativa que completa CORRETAMENTE a lacuna:",
        alt1: "HTTP",
        alt2: "POP",
        alt3: "SMTP",
        alt4: "TCP",
        alt5: "",
        resp: "POP"
    },
    questão5: {
        pergunta: "Analise as afirmativas a seguir: I- A intranet é uma rede de computadores pública, que oferece, essencialmente, os mesmos serviços da internet, mas restrita a uma corporação.  II- File Transfer Protocol (FTP) é um formato utilizado para enviar e baixar arquivos em uma conexão de internet. III- HTML é uma linguagem padrão para construir e publicar páginas na web. Estão CORRETAS as afirmativas:",
        alt1: "I e II apenas.",
        alt2: "I e III apenas.",
        alt3: "II e III apenas.",
        alt4: "I, II e III.",
        alt5: "",
        resp: "II e III apenas."
    },
    questão6: {
        pergunta: "No contexto das redes de computadores com acesso à internet e no que diz respeito à arquitetura TCP/IP, três protocolos são empregados no serviço de e-mail, caracterizados a seguir. I. É usado para o envio de mensagens na internet, por meio do uso da porta 25, que é a padrão para envio de mensagens, havendo a alternativa de uso das portas 465 e 587.  II. É usado na recepção de mensagens , particularmente para sincronização no servidor, por meio da porta 143 com conexões sem criptografia e, como alternativa, a porta 993 para conexões seguras com criptografia TLS/SSL. No seu funcionamento, é um protocolo que sempre mantém cópia das mensagens no servidor.  III. É usado na recepção de mensagens, por meio da porta 110 com conexões sem criptografia e, como alternativa, a porta 995 para conexões seguras com criptografia TLS/SSL. No seu funcionamento, é um protocolo que baixa as mensagens e as apaga do servidor. Os protocolos caracterizados em I, II e III são conhecidos, respectivamente, pelas siglas:",
        alt1: "SMNP, POP3 e HTTP",
        alt2: "SMTP, POP3 e IMAP",
        alt3: "SMNP, SSH e IMAP",
        alt4: "SMTP, SSH e HTTP",
        alt5: "",
        resp: "SMTP, POP3 e IMAP"
    },
    questão7: {
        pergunta: "No cenário tecnológico atual, existem dispositivos que incorporam hardware e software com o objetivo de conectar e promover a troca de dados com outros dispositivos e sistemas pela internet. Tais dispositivos variam de objetos domésticos a ferramentas industriais bastante sofisticadas. Assinale a alternativa que apresenta o nome dessa tecnologia.",
        alt1: "Internet das coisas.",
        alt2: "Tecnolgia 5G.",
        alt3: "Banco de dados.",
        alt4: "Data center.",
        alt5: "Nuvem",
        resp: "Internet das coisas."
    },
    questão8: {
        pergunta: "Assinale a alternativa com a correta complementação: URL, Universal Resource Locator, é o nome dado a um",
        alt1: "endereço Web utilizado para acessar e identificar páginas eletrônicas na Web.",
        alt2: "protocolo de rede para acesso às páginas eletrônicas.",
        alt3: "aplicativo utilizado para buscar as páginas eletrônicas na Web.",
        alt4: "endereço de e-mail utilizado para acessar e identificar a caixa postal eletrônica dos usuários.",
        alt5: "aplicativo que identifica os arquivos criados com o navegador Mozilla.",
        resp: "endereço Web utilizado para acessar e identificar páginas eletrônicas na Web."
    },
    questão9: {
        pergunta: "Cada serviço/protocolo de aplicação em redes TCP/IP utiliza, por padrão, porta e protocolo de transporte específicos para conexão dos clientes nos servidores. As portas/protocolos de transporte padrões utilizados pelos serviços SSH, Telnet e SMTP são, respectivamente",
        alt1: "21/TCP, 22/TCP e 25/TCP.",
        alt2: "22/TCP, 23/TCP e 25/TCP.",
        alt3: "20/TCP, 21/TCP e 22/TCP.",
        alt4: "23/TCP, 25/TCP e 26/TCP.",
        alt5: "",
        resp: "22/TCP, 23/TCP e 25/TCP."
    },
    questão10: {
        pergunta: "Alguns protocolos de aplicação utilizam, para o transporte de mensagens, tanto o protocolo UDP como o protocolo TCP, dependendo da operação realizada entre cliente e servidor. As portas utilizadas, por padrão, pelo protocolo DNS, para consultas (queries) e transferências de arquivos de zona, são respectivamente",
        alt1: "53/UDP e 53/TCP.",
        alt2: "21/UDP e 21/TCP.",
        alt3: "79/UDP e 79/TCP.",
        alt4: "111/UDP e 111/TCP.",
        alt5: "",
        resp: "53/UDP e 53/TCP."
    }
}, provaRedes3 = {
    questão1: {
        pergunta: "Em servidores FTP, configurados para funcionar em modo passivo ou ativo, a porta 21/TCP é utilizada, por padrão, no lado do servidor para",
        alt1: "conexão e controle (troca de comandos e respostas entre cliente e servidor).",
        alt2: "transferência de dados (arquivos trocados entre cliente e servidor).",
        alt3: "envio de dados encriptados (troca de informações sensíveis protegidas por criptografia).",
        alt4: "resolução de nomes (conversão de nomes em endereços IP).",
        alt5: "",
        resp: "conexão e controle (troca de comandos e respostas entre cliente e servidor)."
    },
    questão2: {
        pergunta: "Uma extensão, definida nas RFCs 2045 e 2056, foi incorporada ao protocolo SMTP, para permitir, dentre outras novas funcionalidades, a incorporação de anexos às mensagens de correio eletrônico e a escrita de e-mails no formato HTML. Essas informações dizem respeito à extensão",
        alt1: "MIME.",
        alt2: "POP3.",
        alt3: "IMAP.",
        alt4: "SMTPS.",
        alt5: "",
        resp: "MIME."
    },
    questão3: {
        pergunta: "Dentre os tipos de firewalls disponíveis, os proxies de serviços diferenciam-se dos firewalls tradicionais (filtros de pacotes) principalmente por atuarem, também, na camada de",
        alt1: "transporte.",
        alt2: "rede.",
        alt3: "enlace.",
        alt4: "aplicação.",
        alt5: "",
        resp: "aplicação."
    },
    questão4: {
        pergunta: "Analise as afirmações a seguir sobre o serviço de proxy reverso. \n I. Um proxy reverso se diferencia de um proxy convencional, porque o primeiro faz uso de IP com registro PTR válido. \n  II. Um cenário comum para um proxy reverso é o seu posicionamento como front-end para o servidor  web, permitindo a diminuição no tempo de resposta a requisições. \n III. O uso de um proxy reverso tem como consequência a diminuição da carga gerada pelas requisições a um servidor. \n IV. O proxy reverso não pode ser utilizado como front-end para um conjunto de servidores, devendo sempre estar recebendo e encaminhando requisições direcionadas a apenas um servidor. \n Estão corretas as afirmativas",
        alt1: "II e IV.",
        alt2: "I e IV.",
        alt3: "I e III.",
        alt4: "II e III.",
        alt5: "",
        resp: "II e III."
    },
    questão5: {
        pergunta: "Analise as afirmativas a seguir a respeito de serviços de acesso e terminal remoto em ambiente Windows Server. \n I. O uso de port-forward permite que vários servidores RDP sejam acessíveis, mesmo utilizando um roteador implementando NAT 1:N com um único endereço IPv4 público. \n II. O Remote Desktop Services é a evolução do Terminal Services. \n III. O protocolo RDP ainda não dá suporte ao protocolo IPv6. \n IV. A porta padrão utilizada pelo Remote Desktop Services é a UDP 3389. \n Estão corretas as afirmativas",
        alt1: "I e II.",
        alt2: "III e IV.",
        alt3: "II e IV.",
        alt4: "I e III.",
        alt5: "",
        resp: "I e II."
    },
    questão6: {
        pergunta: "Analise as afirmativas a seguir a respeito do protocolo/serviço DNS. \n I. Um servidor POP3 depende diretamente de um registro MX para que seja localizado por outros servidores de e-mail. \n II. A consulta DNS é realizada obrigatoriamente na porta UDP 53.\n III. A transferência de zona utiliza uma conexão TCP na porta 53. \n IV. Tanto nslookup quanto dig são binários de clientes DNS de linha de comando. \n Estão corretas as afirmativas",
        alt1: "II e III.",
        alt2: "I e IV.",
        alt3: "III e IV.",
        alt4: "I e II",
        alt5: "",
        resp: "III e IV."
    },
    questão7: {
        pergunta: "Ao monitorar os bytes trafegados de uma máquina interligada a outra com um cabo cross, o usuário notou que, ao transferir um arquivo de 1 megabyte de tamanho entre as máquinas, foi transferido um pouco mais e não exatamente 1 megabyte. Isso se deve ao",
        alt1: "driver errado da placa de rede.",
        alt2: "overhead gerado pelos protocolos de rede usados.",
        alt3: "disco fragmentado na máquina de destino.",
        alt4: "sistema operacional desatualizado.",
        alt5: "",
        resp: "overhead gerado pelos protocolos de rede usados."
    },
    questão8: {
        pergunta: "A unidade de dados que um Hub (Repetidor) trabalha é chamada de",
        alt1: "segmento.",
        alt2: "quadro.",
        alt3: "pacote.",
        alt4: "bit.",
        alt5: "",
        resp: "bit."
    },
    questão9: {
        pergunta: "Hoje, nas Redes Locais (LAN) cabeadas, o meio de transmissão mais utilizado é o",
        alt1: "Cabo de par trançado.",
        alt2: "Cabo de fibra óptica.",
        alt3: "Cabo coaxial.",
        alt4: "Cabo Ethernet.",
        alt5: "Cabo fino 10BASE-T.",
        resp: "Cabo de par trançado."
    },
    questão10: {
        pergunta: "Cada serviço/protocolo de aplicação em redes TCP/IP utiliza, por padrão, porta e protocolo de transporte específicos para conexão dos clientes nos servidores. As portas/protocolos de transporte padrões utilizados pelos serviços SSH, Telnet e SMTP são, respectivamente",
        alt1: "21/TCP, 22/TCP e 25/TCP.",
        alt2: "22/TCP, 23/TCP e 25/TCP.",
        alt3: "20/TCP, 21/TCP e 22/TCP.",
        alt4: "23/TCP, 25/TCP e 26/TCP.",
        alt5: "",
        resp: "22/TCP, 23/TCP e 25/TCP."
    }
}]

const provasAds = [
    provaAds1 = {
    questão1:{
        pergunta:"O Modelo Cascata (Waterfall) de desenvolvimento de software foi definido nos anos 1970. Sobre suas características, assinale a afirmativa correta:",
        alt1: "Tem como objetivo inicial estabelecer de forma estável os requisitos do sistema a ser desenvolvido, assim,o projeto somente avança quando os requisitos são aceitos.",
        alt2: "Funciona bem em projetos cujos requisitos não são conhecidos e tampouco estáveis.",
        alt3: "É indicado para projetos em que as maiores preocupações são relacionadas com os custos e o tempo de desenvolvimento, e menos com a qualidade do produto.",
        alt4: "Os resultados produzidos nas primeiras fases do modelo são direcionados aos codificadores e não aosanalistas de requisitos e projetistas",
        resp: "Tem como objetivo inicial estabelecer de forma estável os requisitos do sistema a ser desenvolvido, assim,o projeto somente avança quando os requisitos são aceitos"
    },
    questão2:{
        pergunta: "Sobre o modelo de desenvolvimento de software Scrum, e em especial sobre os perfis previstos no modelo,considere,I - Scrum Master é um facilitador do processo e existe para ajudar a equipe no uso do Scrum. Não tem autoridade sobre a equipe, mas sim sobre o processo e as atividades inerentes a ele \n  II - Product Owner é a pessoa responsável pelo projeto em si e possui dentre suas responsabilidades a de indicar quais são os requisitos mais importantes a serem tratados em cada ciclo de desenvolvimento \n III - Scrum Team é a equipe de desenvolvimento, formada pelas pessoas que executam as tarefas de desenvolvimento do software. \n IV - Project Manager é a pessoa que assume o papel de gerente do projeto na equipe de desenvolvimento, já que o Scrum Master e o Product Owner não possuem essa responsabilidade \n São perfis desse modelo",
        alt1:"I, II e III, apenas",
        alt2:"I, III e IV, apenas",
        alt3:"II e IV, apenas",
        alt4: "II e IV, apenas",
        resp: "I, II e III, apenas"
    },
    questão3:{
        pergunta: "Sobre o modelo de desenvolvimento de software Scrum, e em especial sobre o conceito de Sprint e as atividades desenvolvidas, assinale a afirmativa INCORRETA.",
        alt1: "No início de cada Sprint, é feita uma reunião de planejamento do Sprint (Sprint Planning Meeting)",
        alt2: "O Sprint é um ciclo de desenvolvimento de poucas semanas de duração, sobre o qual o modelo Scrum é estruturado",
        alt3: "A equipe se compromete em desenvolver as funcionalidades planejadas para o Sprint; caso apareçam novas funcionalidades, cabe ao Scrum Master decidir se incorpora no Sprint atual ou aloca para o próximo.",
        alt4: "No início de cada Sprint, são transferidos os elementos do Product Backlog para o Sprint Backlog, ou seja, a lista de itens a serem implementados no ciclo que se inicia",
        resp: "A equipe se compromete em desenvolver as funcionalidades planejadas para o Sprint; caso apareçam novas funcionalidades, cabe ao Scrum Master decidir se incorpora no Sprint atual ou aloca para o próximo"
    },
    questão4:{
        pergunta: "Sobre o modelo de desenvolvimento de software XP (eXtreme Programming) e suas regras/diretrizes de codificação previstas, analise as afirmativas.\n I - Os testes de unidades devem ser produzidos antes do código do programa \n II - O código do programa deve ser escrito de acordo com os padrões aceitos por toda a equipe. \n III - O código do programa deve ser produzido por pares \n IV - Somente um par faz integração do código do programa a cada vez \n Está correto o que se afirma em",
        alt1: "I e IV, apenas.",
        alt2: "I, II e III, apenas",
        alt3: "II, III e IV, apenas",
        alt4: "I, II, III e IV",
        resp: "I, II, III e IV"
    }, 
    questão5:{
        pergunta: "Considerando a área de testes de software e mais especificamente os testes funcionais, a coluna da esquerda apresenta os tipos de testes funcionais e a da direita, as características de cada um. Numere a coluna da direita de acordo com a da esquerda \n 1 - Teste de Aceitação \n 2 - Teste de Integração. \n  3 - Teste de Regressão  \n  4 - Teste de Sistema  \n 5 - Teste de Unidade \n ( ) É executado quando um sistema que está em operação sofre alguma manutenção que pode acarretar novos defeitos \n ( ) Verifica se um componente individual do software foi implementado corretamente. Normalmente é realizado pelo próprio programador \n ( ) O objetivo principal é a validação do software quanto aos requisitos e não a verificação de defeitos É executado pelo usuário final \n ( ) É realizado depois que as unidades do software estão prontas e devem ser incorporadas em uma nova versão do sistema em desenvolvimento \n ( )É executado pela equipe de desenvolvimento e tem como objetivo verificar se a versão atual do sistema permite executar processos ou casos de uso completos do ponto de vista do usuário final \n",
        alt1: "5, 3, 1, 4, 2",
        alt2: "3, 5, 1, 2, 4" ,
        alt3: "3, 4, 2, 1, 5" ,
        alt4: "1, 5, 3, 4, 2",
        resp: "3, 5, 1, 2, 4"    
    },
    questão6:{
        pergunta: "O diagrama abaixo ilustra a estrutura do Processo de Engenharia de Requisitos, cujo principal objetivo é produzir e manter um documento de requisitos de sistema .\n Assinale a alternativa que apresenta correta e respectivamente os estágios para os passos identificados pelos números 1, 2, 3 e 4 e os produtos produzidos no processo, identificados pelos números 5 e 6",
        alt1:"Validação de requisitos, Elicitação e análise de requisitos, Especificação de requisitos, Estudo de viabilidade; Requisitos de usuário e de sistema, Modelos de sistema",
        alt2: "Estudo de viabilidade, Especificação de requisitos, Elicitação e análise de requisitos, Validação de requisitos; Requisitos de usuário e de sistema, Modelos de sistema.",
        alt3: "Estudo de viabilidade, Elicitação e análise de requisitos, Validação de requisitos, Especificação de requisitos; Modelos de sistema, Requisitos de usuário e de sistema.",
        alt4: "Estudo de viabilidade, Elicitação e análise de requisitos, Especificação de requisitos, Validação de requisitos; Modelos de sistema, Requisitos de usuário e de sistema.",
        resp: "Estudo de viabilidade, Elicitação e análise de requisitos, Especificação de requisitos, Validação de requisitos; Modelos de sistema, Requisitos de usuário e de sistema"
    },
    questão7:{
        pergunta: "Considere o diagrama de classe dado, construído segundo notações da linguagem de modelagem UML(Linguagem de Modelagem Unificada) e relações entre as classes do modelo de desenvolvimento de software orientado a objetos. \n A partir das informações dadas, assinale a afirmativa correta ",
        alt1:"A relação de herança estabelecida entre as classes Aluno, AlunoMatriculado e Aluno Trancado não é recomendada, pois representa questões temporais.",
        alt2:"Herança de classes proporciona apenas herança de implementação e não herança de tipo.",
        alt3:"Herança de tipo apenas é possível quando uma classe realiza uma Interface",
        alt4:"A relação de herança de classe estabelecida entre as classes Aluno, AlunoMatriculado e AlunoTrancado será definida em tempo de execução, para garantir a existência de polimorfismo",
        resp: "A relação de herança estabelecida entre as classes Aluno, AlunoMatriculado e Aluno Trancado não é recomendada, pois representa questões temporais."
    },
    questão8:{
        pergunta: "Para o modelo de desenvolvimento de software orientado a objetos, o Modelo de Domínio é um dos elementos mais importantes. O diagrama de classe abaixo, construído segundo notações da linguagem de modelagem UML (Linguagem de Modelagem Unificada), não pode ser considerado um Modelo de Domínio. \n Assinale a justificativa de tal afirmação.",
        alt1: " No Modelo de Domínio, não são representadas as cardinalidades das relações.",
        alt2: "Os elementos possíveis de um Modelo de Domínio são apenas os conceitos, atributos e relações entre os conceitos.",
        alt3: "A representação do contexto de venda está incorreta no diagrama",
        alt4: "As cardinalidades da relação “paga” entre os conceitos Pagamento e Venda estão incorretas",
        resp: "Os elementos possíveis de um Modelo de Domínio são apenas os conceitos, atributos e relações entre os conceitos."
    },
    questão9:{
        pergunta: "Sobre o documento de referência de Padrões de Interoperabilidade de Governo Eletrônico (e-PING, versão2015) e mais especificamente a seção que trata da organização e intercâmbio de informações, a coluna da esquerda apresenta os componentes padronizados e a da direita, os padrões adotados para a organização e troca de informações desses componentes. Numere a coluna da direita de acordo com a da esquerda. \n 1 - Linguagem para intercâmbio de dados  \n 2 -Definição dos dados para intercâmbio  \n 3- Descrição de recursos \n 4-Transformação de dados \n 5-- Linguagem de definição de ontologias na web  \n(    ) XSL (Extensible Stylesheet Language) e XSL Transformation (XSLT) \n  (   ) RDF (Resource Description Framework) \n  (    ) XML (Extensible Markup Language) e JSON(Javascript Object Notation) \n  (     )XML Schema Part 0: Primer, XML Schema Part 1: Structures e XML Schema Part 2: Datatypes\n (   ) OWL (Web Ontology Language) \n Assinale a sequência correta.",
        alt1: "3, 4, 2, 5, 1",
        alt2: " 2, 4, 3, 1, 5",
        alt3: "1, 5, 4, 2, 3",
        alt4: "4, 3, 1, 2, 5",
        resp: "4, 3, 1, 2, 5"                           
    },
    questão10:{
        pergunta: "Uma das principais funções dos sistemas de informação é o apoio às tomadas de decisão nas organizações.Existem diferentes níveis de necessidade de informações em uma organização, originando diferentes tipos de decisão. Sobre os níveis organizacionais e os tipos de decisão, analise as afirmativas \n I - As decisões estruturadas são mais corriqueiras nos níveis organizacionais mais altos, enquanto decisões não estruturadas são mais comuns nos níveis mais baixos das organizações \n II - Decisões não estruturadas são aquelas em que o responsável pela decisão deve usar modelos matemáticos exclusivos para essa finalidade, sendo apoiadas por sistemas de informações que registram e controlam as ações operacionais das organizações. \n III - Decisões estruturadas são decisões repetitivas e rotineiras e envolvem procedimentos pré-definidos, assim não precisam ser consideradas como decisões novas. \n IV - Decisões semiestruturadas reúnem decisões onde parte do problema tem resposta conhecida e precisa, por meio de procedimentos conhecidos, a outra parte depende da capacidade de avaliação do encarregado em decidir \n Está correto o que se afirmar em" ,
        alt1: " I, II e III, apenas.",
        alt2: "III e IV, apenas." ,
        alt3: "II e IV, apenas.",
        alt4: "I, III e IV, apenas",
        resp: "III e IV, apenas."
    }
},provaAds2 = {
    questão1:{
        pergunta: "Com relação aos modelos ágeis de processo, analise o fragmento a seguir. \nEste modelo ágil possui uma abordagem de desenvolvimento de software que premia a ‘manobrabilidade’ durante um jogo cooperativo de invenção e comunicação de recursos limitados, com o principal objetivo de entregar softwares úteis funcionando e com o objetivo secundário de preparar‐se para o jogo seguinte \n Segundo Pressman, esse modelo ágil de processo é denominado",
        alt1: "Extreme Programming.",
        alt2: "DSDM – Dynamic Systems Development Method – Método de Desenvolvimento Dinâmico de Sistemas.",
        alt3: "Scrum",
        alt4: "Crystal",
        alt5: "FDD – Feature Driven Development – Desenvolvimento Guiado por Características.",
        resp: "Crystal"
    },
    questão2:{
        pergunta: "-Segundo Dan Madison, além dos que trabalham diretamente no processo e os que desejam sua mudança, é importante incluir na composição de uma equipe de melhoria de processos, os seguintes participantes \n I. alguém completamente desvinculado do processo sobestudo. \n II. um especialista na área de recursos humanos.\n III. um gestor de atividade correlata que não deseja mudanças \n Assinale \n assinale ",
        alt1: "se somente as afirmativas I e II estiverem corretas",
        alt2: "se somente as afirmativas I e III estiverem corretas.",
        alt3: "se somente a afirmativa III estiver correta." ,
        alt4: "se somente a afirmativa II estiver correta.",
        alt5: "se somente a afirmativa I estiver correta.",
        resp: "se somente as afirmativas I e II estiverem corretas"
    },
    questão3:{
        pergunta: "Com relação à Gerência de Risco do Projeto (Project Risk Management) do PMBOK, assinale a alternativa que indica a descrição mais adequada para o processo “Realizar a análise quantitativa de riscos",
        alt1: "Estimar quantitativamente o impacto das opções e ações que visam reduzir as ameaças aos objetivos do projeto. ",
        alt2: "Avaliar quantitativamente os riscos que impõem as maiores ameaças ao projeto.",
        alt3: "Analisar numericamente o efeito dos riscos identificados nos objetivos do projeto.",
        alt4: "Identificar a causa comum dos riscos, avaliando seu impacto nos objetivos do projeto. ",
        alt5: "Avaliar quantitativamente a correlação entre os riscos.",
        resp: "Analisar numericamente o efeito dos riscos identificados nos objetivos do projeto."
    },
    questão4:{
        pergunta: "Data warehouses são definidos como",
        alt1: "um conjunto de dados integrado, orientados por assunto,variante no tempo e não volátil.",
        alt2: "um conjunto de dados integrado, orientados por departamentos, variante no tempo e não volátil.",
        alt3: "um conjunto de regras, orientadas por departamentos, invariante no tempo e não volátil.",
        alt4:  "um conjunto de dados integrado, orientados por assunto, variante no tempo e volátil.",
        alt5: "um conjunto de regra",
        resp: "um conjunto de dados integrado, orientados por assunto,variante no tempo e não volátil."
    },
    questão5:{
        pergunta: "Os principais componentes do esquema estrela de modelagem de dados multidimensionais são",
        alt1: "a tabela de fatos, os relacionamentos, os atributos e as chaves.",
        alt2: "a tabela de fatos, as dimensões, os atributos e a hierarquia de atributos.",
        alt3: "as entidades, os relacionamentos, os atributos e as chaves primárias. ",
        alt4: " as entidades, as dimensões, os atributos e as chaves estrangeiras.",
        alt5: "as entidades, os auto- relacionamentos, os atributos multidimensionais e as dimensões degeneradas.",
        resp: "a tabela de fatos, as dimensões, os atributos e a hierarquia de atributos."
    },
    questão6:{
        pergunta: "As alternativas a seguir apresentam funcionalidades típicas de um datawarehouse, à exceção de uma.\nAssinale‐a.",
        alt1: "Roll‐up, Drill‐down.",
        alt2: "Slice e Dice, Seleção.",
        alt3: "Giro e Ordenação.",
        alt4: "Seleção e Merge‐hash.",
        alt5: "Drill‐down e Giro.",
        resp: "Seleção e Merge‐hash."
    },
    questão7:{
        pergunta: "A partir das boas práticas relacionadas à Arquitetura Orientada a Serviços (Service Oriented Architecture – SOA), analise as afirmativas a seguir \n I. A especificação WSDL é o padrão que define como especificar o contrato de uso dos serviços. Logo, antes do início da implementação dos serviços, a aplicação da abordagem contract‐first design no desenvolvimento SOA deve ser baseada na especificação de documentos WSDL. \n  II. Um consumidor de serviços usa as informações contidas no documento SOAP para gerar um Proxy local de um serviço remoto. \n  III. Os serviços Web devem, sempre que possível, manter estado entre chamadas. Esse tipo de prática, além de facilitar a implementação do serviço, melhora a escalabilidade da solução SOA. \n Assinale: ",
        alt1: "se somente a afirmativa I estiver correta.",
        alt2: "se somente a afirmativa II estiver correta.",
        alt3: "se somente a afirmativa III estiver correta.",
        alt4: "se somente as afirmativas I e II estiverem corretas.",
        alt5: "se todas as afirmativas estiverem corretas.",
        resp: "se somente a afirmativa I estiver correta."
    },
    questão8:{
        pergunta: "Em relação ao servidor de aplicação Java EE (Java Enterprise Edition), analise as afirmativas a seguir. \n I. O servidor de aplicação Java EE difere de um servidor web tradicional por fornecer componentes que manipulam páginas JSP, servlets e por gerenciar a conexão com bancos de dados.\n II.O servidor de aplicação Java EE implementa as APIs da plataforma Java EE e fornece os serviços padrão do Java EE. Podemos relacionar o Tomcat, JBoss e WebSphere como exemplos de servidores de aplicação Java EE. \n III. Um dos componentes da plataforma JEE é o Enterprise JavaBeans (EJB), cujos os principais objetivos são fornecer um desenvolvimento rápido e simplificado de aplicações Java baseado em componentes distribuídos, transacionais, seguros e portáveis.\n Assinale ",
        alt1: "se somente a afirmativa I estiver correta.",
        alt2: "se somente a afirmativa I e II estiverem corretas.",
        alt3: "se somente a afirmativa I e III estiverem corretas.",
        alt4: "se somente as afirmativas II e III estiverem corretas.",
        alt5: "se todas as afirmativas estiverem corretas. ",
        resp: "se todas as afirmativas estiverem corretas. "
    },
    questão9:{
        pergunta: "Os recursos de TI identificados pelo COBIT são Aplicações,Informações, Infraestrutura e Pessoas.   A respeito do conceito de tais recursos, assinale V para a afirmativa verdadeira e F para a falsa. \n (   ) Aplicações: são os sistemas automatizados para os usuários finais e, inclusive, todos os procedimentos manuais que processam informações. \n  Informações: são os dados em todas as suas formas possíveis, a entrada, o processamento e a saída fornecida pelo sistema de informação, em qualquer formato a ser utilizado pelos negócios. \n (   ) Infraestrutura: refere‐se à tecnologia e a todos os recursos que possibilitam o processamento dos aplicativos computacionais.\n (   ) Pessoas: são os funcionários requeridos para planejar, organizar, adquirir, implementar, entregar, suportar, monitorar e avaliar os sistemas de informação e serviços. \n As afirmativas são, respectivamente",
        alt1: "V, V, V e V.",
        alt2: "F, F, V e V.",
        alt3: "V, V, F e F.",
        alt4: "F, V, F e V.",
        alt5: "F, V, F e V.",
        resp: "V, V, V e V."
    },
    questão10:{
        pergunta: "O modelo ITIL recomenda que o Gerenciamento de Serviços de TI utilize alguns acordos para formalizar relações relevantes entre alguns atores envolvidos. A esse respeito, assinale V para a afirmativa verdadeira e F para a falsa. \n  (   ) O Acordo de Nível de Serviço (ANS) é firmado entre o Provedor de Serviço de TI e um Cliente a fim de especificar, para um determinado Serviço de TI, as responsabilidades e   os compromissos assumidos por cada um. \n  (   ) O Acordo de Nível Operacional (ANO) é firmado entre o Provedor de Serviço de TI e os operadores que atuam nos processos ITIL, a fim de especificar os papéis e as responsabilidades assumidos por cada operador em cada processo. \n (   ) O Acordo de Nível Gerencial (ANG) é firmado entre o Provedor de Serviço de TI e outra parte da mesma Organização, a fim de fixar as responsabilidades de ambas as partes no que diz respeito ao envolvimento daquela parte da Organização no suporte a Serviços de TI entregues pelo Provedor de Serviços de TI aos seus Clientes.\n As afirmativas são,respectivamente, ",
        alt1: "V, V e V.",
        alt2: "F, V e V.",
        alt3: "V, F e F.",
        alt4: "V, V e F.",
        alt5: "F, F e F",
        resp: "V, F e F."
    }
},provaAds3 = {
    questão1:{
        pergunta: "	Apresenta um conceito correto associado à Análise e Projeto Orientado a Objetos (OO):",
        alt1: "Atributos, também chamados de métodos ou serviços, fornecem uma representação de um dos comportamentos da classe.",
        alt2: "Subclasse é uma especialização da superclasse. Uma subclasse pode herdar tanto atributos quanto operações de uma superclasse.",
        alt3: "Classe abstrata, também chamada de classe bean, é uma generalização de um conjunto de classes a ela relacionada.",
        alt4: "Métodos são instâncias de uma classe específica que herdam os atributos e operações da classe.",
        alt5: "Objeto é uma descrição generalizada que descreve uma coleção de métodos semelhantes e encapsula dados e abstrações procedurais necessárias para descrever alguma classe do mundo real.",
        resp: "b)	Subclasse é uma especialização da superclasse. Uma subclasse pode herdar tanto atributos quanto operações de uma superclasse."
    },
    questão2:{
        pergunta: "Considere que um Analista de Sistemas e sua equipe trabalham utilizando o ciclo de vida clássico de software. Na etapa atual eles estão descrevendo as tarefas técnicas a serem conduzidas no desenvolvimento, levantando os riscos prováveis, os recursos que serão necessários, os produtos de trabalho a serem produzidos, bem como definindo um cronograma de trabalho. A equipe está na fase de",
        alt1: "Modelagem.",
        alt2: "Construção.",
        alt3: "Implantação.",
        alt4: "Planejamento.",
        alt5: "Levantamento de Requisitos.",
        resp: "Planejamento."
    },
   questão3:{
        pergunta: "Um Analista de Sistemas e sua equipe realizaram o levantamento de requisitos de um sistema e listaram os seguintes requisitos:\n I. O sistema deve permitir a inclusão, alteração e remoção de funcionários com os atributos da ficha de cadastro, como nome, endereço, CPF, RG, etc. Cada processo tem um único número identificador.\n  II. O sistema não deve revelar aos usuários nenhuma informação pessoal sobre os réus dos processos.\n III. O usuário deve ser capaz de buscar todas as informações sobre um processo armazenado no BD ou selecionar um subconjunto de informações dele. \n IV. O tempo de resposta a um pedido ou consulta de um usuário externo não pode ultrapassar 10 segundos.\n V. O sistema deve implementar o sistema CAPTCHA que requer que o usuário identifique as letras ou dígitos de uma imagem distorcida.\n  São requisitos não funcionais o que consta APENAS em    ",
        alt1: "I e II.",
        alt2: "III e IV",
        alt3: "II, IV e V.",
        alt4: "I, II e III.",
        alt5: "III, IV e V.",
        resp: "II, IV e V."
    },
   questão4:{
        pergunta: "No Processo Unificado (PU), os requisitos do sistema são especificados através da identificação das necessidades de usuários e clientes e são normalmente expressos em casos de uso representados na notação UML. Estes requisitos são, geralmente, assim distribuídos pelas fases do PU: \n I. Nesta fase os requisitos são analisados, permitindo aos desenvolvedores identificar o real tamanho do sistema. Ao final desta fase 80% dos requisitos do sistema já devem ter sido descritos, porém apenas 5% ou 10% destes requisitos terão sido implementados.\n II. Nesta fase praticamente não há requisitos a serem identificados, a menos que ocorram mudanças nos mesmos.\n III. Os requisitos remanescentes serão identificados e implementados durante esta fase. \n IV. Durante esta fase os requisitos mais importantes são identificados, delimitando o domínio do sistema.\n As fases de I a IV são, correta e respectivamente:  ",
        alt1: "Elaboração − Transição − Construção − Concepção.",
        alt2: "Concepção − Elaboração − Transição − Construção.",
        alt3: "Construção − Concepção − Elaboração − Transição.",
        alt4: "Transição − Construção − Concepção − Elaboração.",
        alt5: "Construção − Transição − Elaboração − Concepção.",
        resp: "Elaboração − Transição − Construção − Concepção."
    },
   questão5:{
        pergunta: "Considere que o Time Scrum que atua no Ministério Público do Estado da Paraíba se reuniu por 8 horas, ao final de uma Sprint de 1 mês de duração (4 semanas). A reunião foi dividida em duas partes, cada uma com 4 horas, de forma que em cada parte o foco estava na resposta às seguintes questões: \n − Parte 1: O que será entregue como resultado do incremento da próxima Sprint? \n − Parte 2: Como o trabalho necessário para entregar o incremento será realizado?  Eles realizaram a reunião \n  ",
        alt1: "Daily Scrum.",
        alt2: "Sprint Review.",
        alt3: "Sprint Retrospective.",
        alt4: "Sprint Planning.",
        alt5: "Sprint Grooming.",
        resp: "Sprint Planning."
    },
   questão6:{
        pergunta:"Considere a seguinte instrução CSS3, presente em um bloco incorporado em uma página HTML5: div[id$='inferior']{background:#0000FF} \n  É correto afirmar que a cor de fundo azul será aplicada no elemento div cujo valor do atributo id ",
        alt1: "inicie com a palavra inferior.",
        alt2: "termine com a palavra inferior.",
        alt3: "seja igual à palavra inferior.",
        alt4: ") contenha, em qualquer parte, a palavra inferior.",
        alt5: "não contenha a palavra inferior.",
        resp: "termine com a palavra inferior."
    },
   questão7:{
        pergunta: "A linguagem JavaScript pode ser usada para tratar eventos referentes à entrada de dados em formulários, a ações do usuário e a ações do navegador. Os atributos de evento usados em tags HTML permitem executar comandos ou chamar funções em trechos de código JavaScript internos ou externos à página. Para criar um campo do tipo texto em um formulário HTML de forma que quando o usuário soltar uma tecla que foi pressionada nesse campo seja chamada uma função JavaScript denominada verificar utiliza-se a instrução",
        alt1: "<input type='text' onkeyup='verificar()'>",
        alt2: "<input type='text' onkeydown='verificar()'>",
        alt3: "<input type='text' onkeypress='verificar()'>",
        alt4: "<input type='text' onkeydrop='verificar()'>",
        alt5: "<input type='text' onkeyrelease='verificar()'>",
        resp: "<input type='text' onkeyup='verificar()'>"
    },
   questão8:{
        pergunta: "Em relação ao Selenium IDE 2.5.0 é correto afirmar:",
        alt1: "O Selenium IDE é um plugin, desta forma pode ser instalado em qualquer navegador, exceto no Firefox.",
        alt2: "Como resposta à execução de um script, o Selenium IDE envia suas telas de resultado para até 3 navegadores ao mesmo tempo.",
        alt3: "Para executar um script no Selenium IDE basta clicar no botão Execute Script e todas as ações serão executadas no navegador da preferência do usuário.",
        alt4: "É uma IDE da Microsoft para desenvolvimento de aplicações web utilizando ASP.NET.",
        alt5: "Ao final da execução, o Selenium IDE identifica o script com sucesso ou falha. Um script com erro apresenta o indicativo de qual problema ocorreu na aba de Mensagens.",
        resp: "Ao final da execução, o Selenium IDE identifica o script com sucesso ou falha. Um script com erro apresenta o indicativo de qual problema ocorreu na aba de Mensagens."
    },
   questão9:{
        pergunta: "São padrões de desenvolvimento aplicados a SOA:",
        alt1: "WSDL, UDDI, SOAP.",
        alt2: "HTML 2, UDDI, SOAP.",
        alt3: "ADSL, XQUERY, WSDL.",
        alt4: "XML, UDDI, FCAL.",
        alt5: "FCAL, UDP, FDDI.",
        resp: "WSDL, UDDI, SOAP."
    },
    questão10:{
        pergunta: "O GIT possibilita controlar versões de componentes de software com as facilidades de",
        alt1: "armazenar alterações de fontes de programas como uma lista de mudanças por arquivo, registrando portanto um conjunto de arquivos e as mudanças feitas a cada arquivo ao longo do tempo.",
        alt2: "armazenar alterações de fontes de programas em um único arquivo de registro de alterações subsequentes que funciona como um LOG de modificações de fontes que pode ser aplicado para desfazê-las a qualquer tempo.",
        alt3: "replicar cópias de cada componente quando da sua modificação, atualizando repositórios de arquivos locais nas estações de trabalho de cada desenvolvedor catalogado como membro do projeto de software em questão.",
        alt4: "navegar no histórico das modificações, consultando diretamente as cópias dos arquivos físicos de cada versão, a partir de um repositório localizado no servidor de programas fonte.",
        alt5: "navegar no histórico das versões, consultando snapshots referentes aos arquivos físicos do servidor de fontes que são guardados em um banco de dados local da máquina do desenvolvedor.",
        resp: "navegar no histórico das versões, consultando snapshots referentes aos arquivos físicos do servidor de fontes que são guardados em um banco de dados local da máquina do desenvolvedor."
    }
}]
//#endregion