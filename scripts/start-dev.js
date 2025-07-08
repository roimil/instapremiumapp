/**
 * Script para iniciar o ambiente de desenvolvimento do InstaPremium
 * Este script facilita a execução do projeto em modo de desenvolvimento
 */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Cores para output no terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

console.log(`${colors.blue}=== InstaPremium Next.js - Ambiente de Desenvolvimento ===${colors.reset}`);

try {
  // Verificar se as dependências estão instaladas
  console.log(`${colors.yellow}Verificando dependências...${colors.reset}`);
  if (!fs.existsSync(path.join(__dirname, '../node_modules'))) {
    console.log(`${colors.yellow}Instalando dependências...${colors.reset}`);
    execSync('npm install', { stdio: 'inherit' });
  } else {
    console.log(`${colors.green}Dependências já instaladas.${colors.reset}`);
  }

  // Instruções para o usuário
  console.log(`${colors.blue}Iniciando servidor de desenvolvimento...${colors.reset}`);
  console.log(`${colors.green}Acesse a aplicação em: ${colors.yellow}http://localhost:3000${colors.reset}`);
  console.log(`${colors.green}Para parar o servidor: ${colors.yellow}Ctrl+C${colors.reset}`);
  
  // Iniciar o servidor de desenvolvimento
  execSync('npm run dev', { stdio: 'inherit' });

} catch (error) {
  console.error(`${colors.red}Erro ao iniciar o ambiente de desenvolvimento:${colors.reset}`, error);
  process.exit(1);
}
