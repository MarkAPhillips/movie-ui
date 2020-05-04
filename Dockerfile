FROM node:12.6.0

RUN npm i -g serve

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build && \
    chmod a+x ./env.sh && \
    useradd dockerUser

USER dockerUser

CMD ./env.sh && serve -p $PORT -s dist