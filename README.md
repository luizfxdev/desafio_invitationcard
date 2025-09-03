# 🎭 Os Comediantes Antigos de Malidinesia

**Calculadora de Custos de Transporte – Spoj INCARDS**

## 📖 Sobre o Desafio

Na era da televisão, poucos ainda vão ao teatro. Para resgatar esse costume, os Comediantes Antigos de Malidinesia (ACM) decidiram promover suas apresentações distribuindo convites em pontos de ônibus estratégicos.

Cada estudante voluntário recebe um ponto de ônibus específico e deve minimizar os custos de deslocamento diário. 
O problema consiste em calcular o custo mínimo de transporte, considerando que todos partem do Ponto de Verificação Central (PVC) e precisam retornar a ele no final do dia.

Este desafio está disponível na plataforma [SPOJ – INCARDS](https://www.spoj.com/problems/INCARDS)
.

## 🚀 Funcionalidades

Interface interativa para inserção de dados (pontos, rotas e custos).

Implementação do algoritmo Floyd-Warshall para cálculo de caminhos mínimos entre todos os pares de pontos.

Exibição do custo total mínimo para o transporte diário.

Tratamento de erros e mensagens amigáveis para entradas inválidas.

Layout responsivo com estética imersiva inspirada em teatro e fantasia.

## 📂 Estrutura do Projeto
```
desafio_invitationcard/
├── assets/              # Recursos como vídeo de background
├── index.html           # Estrutura principal da aplicação
├── styles.css           # Estilos e design da interface
├── script.js            # Lógica da aplicação (Floyd-Warshall + interações)
└── README.md            # Documentação do projeto
```

## 🧮 Entrada e Saída

**Entrada**

Primeira linha: número de casos de teste N

Para cada caso:

Dois inteiros P (pontos de ônibus) e Q (rotas)

Em seguida, Q linhas no formato:
``
Origem Destino Custo
``

⚡ Observação: O PVC sempre é identificado pelo número 1.

**Saída**

Para cada caso, imprimir uma linha com o **custo mínimo diário** de transporte.

### 🖥️ Exemplo

**Entrada**

``Quantidade de Pontos: 2``

``Número de Rotas: 2``

```
Rotas:
1,2,13

2,1,33
```
**Saída**
46


## 🎨 Interface Web

A versão desenvolvida neste repositório traz uma interface visual para simulação:

📝 **Preenchimento de dados** em campos interativos.

🎥 **Background animado** com vídeo imersivo.

✨ **Botões estilizados** com animações mágicas.

📊 Seção de resultados com **feedback visual** (valores e mensagens de erro).

## 🔧 Tecnologias Utilizadas

**HTML5** – Estrutura do projeto

**CSS3** – Estilização e responsividade (gradientes, animações, blur, sombras)

**JavaScript (ES6+)** – Implementação do algoritmo e lógica da interface

Floyd-Warshall – Algoritmo para cálculo de menores caminhos

Google Fonts – Tipografia elegante

Wallpaper  – Vídeo de background


## 📦 Como Executar Localmente

Clone o repositório:
``
git clone https://github.com/luizfxdev/desafio_invitationcard.git``


Acesse a pasta do projeto:

``cd desafio_invitationcard``


Abra o arquivo index.html no navegador.

## 📚 Aprendizados

Durante este desafio, aprimorei:

Implementação de algoritmos clássicos (Floyd-Warshall) aplicados a cenários reais.

Manipulação dinâmica de inputs e validação de dados no navegador.

Design interativo com uso de vídeo em background e efeitos visuais.

Boas práticas de usabilidade: mensagens claras, responsividade e acessibilidade.

## 🔗 Links Importantes

📝 Desafio no SPOJ: [INCARDS](https://www.spoj.com/problems/INCARDS)

🎬 Background: [Wallpaper Waifu](https://wallpaperwaifu.com/?utm_source=chatgpt.com)

💻 Repositório GitHub: desafio_invitationcard

## 🏆 Autor

👨‍💻 @luizfx.dev

GitHub: @luizfxdev

LinkedIn: [Luiz Felipe de Oliveira](https://www.linkedin.com/in/luizfxdev)
