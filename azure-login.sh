#!/bin/bash

echo "Logging in to Azure CLI using service principal..."

az login --service-principal \
  --username "$AZURE_CLIENT_ID" \
  --password "$AZURE_CLIENT_SECRET" \
  --tenant "$AZURE_TENANT_ID" \
  --only-show-errors

az account set --subscription "$AZURE_SUBSCRIPTION_ID"

echo "Azure login successful"

echo "Starting Server..."
pnpm run start
