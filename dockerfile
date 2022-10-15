FROM node:16.15.0-alpine

# RUN DEBIAN_FRONTEND=noninteractive apk add tzdata

COPY . /home/app

WORKDIR /home/app
EXPOSE 80

RUN npm ci

RUN npm run build

CMD ["npm", "start"]
