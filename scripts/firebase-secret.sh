#!/bin/bash

# Script para converter Firebase Service Account para Base64
# Uso: ./scripts/firebase-secret.sh caminho/serviceAccountKey.json

if [ -z "$1" ]; then
    echo "Uso: $0 <caminho-para-serviceAccountKey.json>"
    echo ""
    echo "Exemplo: $0 ~/Downloads/geru-app-dev-key.json"
    exit 1
fi

if [ ! -f "$1" ]; then
    echo "Erro: Arquivo '$1' não encontrado"
    exit 1
fi

echo "Convertendo $1 para Base64..."
echo ""
echo "FIREBASE_SERVICE_ACCOUNT="
cat "$1" | base64 -w 0
echo ""
echo ""
echo "Cole o valor acima em GitHub Settings → Secrets → FIREBASE_SERVICE_ACCOUNT"
