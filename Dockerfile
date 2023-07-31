# build stage

FROM node:16 as build-stage
# as build

# Create app directory
WORKDIR /app
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@8.18.0
RUN yarn install
COPY . .
RUN yarn build
# production stage

RUN npm i -g serve


EXPOSE 80

CMD ["serve", "-s" ,"build","-l","80"]
# CMD ["npm", "start"]
