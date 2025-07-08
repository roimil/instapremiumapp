/**
 * Script para automatizar o processo de build do projeto InstaPremium Next.js
 * Este script facilita a construção do projeto para produção
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

console.log(`${colors.blue}=== InstaPremium Next.js - Script de Build ===${colors.reset}`);

try {
  // Verificar se as dependências estão instaladas
  console.log(`${colors.yellow}Verificando dependências...${colors.reset}`);
  if (!fs.existsSync(path.join(__dirname, '../node_modules'))) {
    console.log(`${colors.yellow}Instalando dependências...${colors.reset}`);
    execSync('npm install', { stdio: 'inherit' });
  } else {
    console.log(`${colors.green}Dependências já instaladas.${colors.reset}`);
  }

  // Construir o projeto para produção
  console.log(`${colors.yellow}Construindo projeto para produção...${colors.reset}`);
  execSync('npm run build', { stdio: 'inherit' });

  console.log(`${colors.green}Build concluído com sucesso!${colors.reset}`);
  console.log(`${colors.blue}Para iniciar o servidor de produção, execute:${colors.reset}`);
  console.log(`${colors.yellow}npm start${colors.reset}`);

} catch (error) {
  console.error(`${colors.red}Erro durante o build:${colors.reset}`, error);
  process.exit(1);
}
