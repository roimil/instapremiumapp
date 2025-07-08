# InstaPremium - Aplicação Next.js

Este projeto é uma migração da aplicação InstaPremium de um site estático em HTML/CSS/JS para uma aplicação moderna em Next.js. O InstaPremium é um aplicativo interativo onde usuários avaliam influenciadores e ganham saldo que pode ser resgatado via PIX.

## Começando

Para executar o projeto em ambiente de desenvolvimento:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

- `/src/app` - Contém as páginas da aplicação usando o modelo App Router do Next.js
- `/src/app/components` - Componentes React reutilizáveis
- `/src/app/contexts` - Contextos React para gerenciamento de estado global
- `/src/styles` - Arquivos CSS globais e específicos
- `/public/assets` - Imagens e outros recursos estáticos

## Características

- Aplicação interativa com perguntas sobre influenciadores
- Sistema de recompensas com saldo acumulativo
- Cadastro de chave PIX para saque
- Interface responsiva e moderna
- Carregamento dinâmico de conteúdo
- Armazenamento local para manter progresso do usuário

## Tecnologias Utilizadas

- Next.js - Framework React com renderização do lado do servidor
- TypeScript - Para tipagem estática e melhor manutenção de código
- CSS Módulos - Estilização com escopo local
- Context API - Gerenciamento de estado global
- localStorage - Persistência de dados no navegador
- ESLint - Garantia de qualidade de código

## Arquitetura

O projeto foi estruturado seguindo os princípios SOLID e Clean Architecture:

- **Componentes** - Interfaces de usuário reutilizáveis e modulares
- **Contextos** - Lógica de negócios e gerenciamento de estado
- **Páginas** - Rotas da aplicação com composição de componentes
- **Estilos** - Separação clara de responsabilidades de estilização

## Implantação

Para fazer o build e implantar a aplicação:

```bash
npm run build
npm start
```

A aplicação pode ser implantada em plataformas como Vercel, Netlify ou qualquer provedor que suporte aplicações Next.js.

## Segurança e Proteção

O projeto foi migrado para Next.js com foco em:

- Carregamento dinâmico de conteúdo
- Proteção contra cópia do site
- Sem geração de HTML estático que possa ser facilmente copiado
- Otimização para dispositivos móveis
"# instapremiumapp" 
