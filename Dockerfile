FROM node:16-alpine
WORKDIR /app
COPY package.json ./
ARG NODE_ENV
RUN npm install
COPY . ./ 
CMD ["node", "index.js"]