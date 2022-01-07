FROM node:16-alpine
EXPOSE 4000
WORKDIR /si9num/nodejs2021Q4-service-dev/src
COPY package.json .
RUN npm i
COPY . .
CMD [ "npm","run","start" ]