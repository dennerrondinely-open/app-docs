#!/bin/bash

# Script para facilitar a configuração de secrets no GitHub

echo "=========================================="
echo "Setup GitHub Secrets para Firebase Deploy"
echo "=========================================="
echo ""

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}PASSO 1: Gerar Firebase Service Account${NC}"
echo "1. Acesse: https://console.firebase.google.com/"
echo "2. Selecione projeto: geru-app-dev"
echo "3. Project Settings → Service Accounts"
echo "4. Clique em 'Generate New Private Key'"
echo "5. Salve o arquivo JSON"
echo ""

read -p "Caminho para serviceAccountKey.json: " service_account_path

if [ ! -f "$service_account_path" ]; then
    echo "❌ Arquivo não encontrado: $service_account_path"
    exit 1
fi

echo ""
echo -e "${YELLOW}PASSO 2: Converter para Base64${NC}"
FIREBASE_SERVICE_ACCOUNT=$(cat "$service_account_path" | base64 -w 0)
echo -e "${GREEN}✓ Convertido com sucesso${NC}"
echo ""

# Extrair valores do JSON
echo -e "${YELLOW}PASSO 3: Extrair variáveis do JSON${NC}"
API_KEY=$(jq -r '.private_key_id' "$service_account_path" 2>/dev/null || echo "")
PROJECT_ID=$(jq -r '.project_id' "$service_account_path" 2>/dev/null || echo "")

if [ -z "$PROJECT_ID" ]; then
    echo "⚠️  Não foi possível extrair do JSON. Preencha manualmente."
    read -p "Project ID (ex: geru-app-dev): " PROJECT_ID
fi

echo ""
echo -e "${YELLOW}PASSO 4: Ir para GitHub e adicionar secrets${NC}"
echo ""
echo "URL: https://github.com/dennerrondinely-open/app-docs/settings/secrets/actions"
echo ""
echo -e "${GREEN}Adicione os seguintes secrets:${NC}"
echo ""

echo "1. FIREBASE_SERVICE_ACCOUNT"
echo "   Valor (Base64 - primeiros 100 caracteres):"
echo "   ${FIREBASE_SERVICE_ACCOUNT:0:100}..."
echo ""

echo "2. FIREBASE_API_KEY"
echo "   Valor: AIzaSyAJw-xjzy7fsdJ3vv_SUH605qN7tE4vAcw"
echo ""

echo "3. FIREBASE_AUTH_DOMAIN"
echo "   Valor: geru-app-dev.firebaseapp.com"
echo ""

echo "4. FIREBASE_PROJECT_ID"
echo "   Valor: geru-app-dev"
echo ""

echo "5. FIREBASE_STORAGE_BUCKET"
echo "   Valor: geru-app-dev.appspot.com"
echo ""

echo "6. FIREBASE_MESSAGING_SENDER_ID"
echo "   Valor: 860817669272"
echo ""

echo "7. FIREBASE_APP_ID"
echo "   Valor: 1:860817669272:web:041de8ae7ecbe02809e4ed"
echo ""

echo -e "${YELLOW}ATALHO: Copiar Service Account${NC}"
echo ""
echo "Pressione para copiar para clipboard (macOS):"
echo "echo '$FIREBASE_SERVICE_ACCOUNT' | pbcopy"
echo ""
echo "Ou para Linux:"
echo "echo '$FIREBASE_SERVICE_ACCOUNT' | xclip -selection clipboard"
echo ""

read -p "Pressione ENTER para abrir GitHub secrets na web"
open "https://github.com/dennerrondinely-open/app-docs/settings/secrets/actions"

echo ""
echo -e "${GREEN}✓ Setup concluído!${NC}"
echo "Depois de adicionar os secrets, o deploy automático funcionará."
