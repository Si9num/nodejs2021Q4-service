FROM node:16-alpine
EXPOSE ${PORT}
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
CMD [ "npm","run","start" ]