FROM node:12.6.0

RUN npm i -g serve

WORKDIR /app

COPY package*.json ./

RUN npm i --quiet

COPY . .

RUN npm run build && \
    chmod a+x ./build/env.sh

CMD ./build/env.sh && serve -n -p $PORT -s dist
