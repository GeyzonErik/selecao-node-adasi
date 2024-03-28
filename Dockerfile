FROM node:18

WORKDIR /usr/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

EXPOSE 3000 

CMD npx prisma migrate dev && npm run start:dev