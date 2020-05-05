FROM node:12.6.0

RUN npm i -g serve

WORKDIR /app

COPY package*.json ./

RUN npm i 

COPY . .

RUN npm run build && \
    chmod a+x ./build/env.sh && \
    useradd dockerUser

CMD ./build/env.sh && serve -p $PORT -s dist