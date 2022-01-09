FROM node:16-alpine
EXPOSE ${PORT}
WORKDIR /si9num/nodejs2021q4-service/src
COPY package.json package-lock.json ./
RUN npm i --production
COPY . .
CMD [ "npm","run","start" ]