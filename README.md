# ARKtetura

Site de uma empresa fictícia de arquitetura, desenvolvido para praticar React, composição de componentes, CSS Modules e integração com uma API externa.

## Demonstração

[Visitar site](https://arqtetura.vercel.app/)

![Página do projeto ARKtetura](https://github.com/user-attachments/assets/06d5af9f-bd6b-4445-b209-db7b2fb2cb98)

## Funcionalidades

- Apresentação da empresa e dos projetos de arquitetura.
- Seções de comentários, etapas de trabalho e contato.
- Componentes visuais reutilizáveis.
- Consulta das condições meteorológicas de São Paulo via OpenWeatherMap.

## Tecnologias

React 18, JavaScript, CSS Modules, Axios, React Router, React Icons e AOS. O ambiente utiliza Create React App.

## Como executar

Pré-requisitos: Node.js e npm compatíveis com as dependências.

```bash
git clone https://github.com/olegariobru/arqtetura.git
cd arqtetura
npm ci
npm start
```

Acesse `http://localhost:3000`.

A consulta meteorológica está em `src/Services/TEMPapi/index.js` e depende de acesso à OpenWeatherMap. O código atual contém uma chave no componente; substitua-a por uma configuração própria e revise a exposição e as restrições da chave antes de publicar uma nova versão.

## Build e verificação

```bash
npm run build
```

Confira a navegação, as seções, os contatos e os estados de carregamento/erro da consulta meteorológica.

O script `npm test` existe pelo Create React App, mas o repositório não contém uma suíte própria de testes.

## Organização

- `src/Componentes/`: seções da página e estilos.
- `src/Services/TEMPapi/`: integração meteorológica.
- `public/`: recursos estáticos.

## Próximos passos

- Separar configuração da API do código do componente.
- Revisar acessibilidade e apresentação em diferentes telas.
- Adicionar testes para os estados da consulta externa.

## Como contribuir

Abra uma issue com o problema ou a melhoria proposta. Para enviar código, crie um fork e uma branch, mantenha a alteração focada e abra um pull request explicando o resultado e como verificou o funcionamento.

## Licença

Este repositório ainda não contém um arquivo `LICENSE`. A licença de uso e redistribuição precisa ser formalizada pelo autor.

## Autor

[Bruno Olegário](https://github.com/olegariobru) · [LinkedIn](https://www.linkedin.com/in/bolgarimacedo/)
