FROM node:12.6.0

RUN npm i -g serve

WORKDIR /app

COPY package*.json ./

RUN npm i --quiet && \
    touch .env && \
    echo "API_URL=$API_URL" >> .env

COPY . .

RUN npm run build && \
    chmod a+x ./build/env.sh && \
    useradd dockerUser

USER dockerUser

CMD ./build/env.sh && serve -n -p $PORT -s dist
