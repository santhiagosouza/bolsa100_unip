FROM node:18-alpine

WORKDIR /app

ENV NODE_OPTIONS="--dns-result-order=ipv4first"

COPY package*.json ./

RUN npm install --omit=dev --no-audit --no-fund

COPY . .

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
