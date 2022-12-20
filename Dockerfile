FROM node:16-alpine
WORKDIR /app
COPY package.json ./
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; then npm install ; else npm install --omit=dev --ignore-scripts; fi
COPY . ./ 
CMD ["node", "index.js"]