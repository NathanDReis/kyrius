# Etapa 1: build da aplicação
FROM node:20-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos essenciais
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Fazer o build da aplicação Next.js
RUN npm run build

# Etapa 2: imagem final para rodar o app
FROM node:20-alpine AS runner

WORKDIR /app

# Copiar apenas os arquivos necessários do build anterior
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

# Instalar dependências de produção
RUN npm install --omit=dev

# Expor a porta padrão do Next.js
EXPOSE 3000

# Comando padrão
CMD ["npm", "start"]
