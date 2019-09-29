FROM node:12.10.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .

ENTRYPOINT ["npm", "start"]