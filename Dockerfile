FROM node:20-alpine
WORKDIR /app
# Install deps (cacheable layer)
COPY package.json package-lock.json* ./
RUN npm ci || npm install
# Copy source
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm","run","start"]
