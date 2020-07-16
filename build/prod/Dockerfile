FROM node:12.6.0

RUN npm i -g serve

WORKDIR /app

COPY package*.json ./

RUN npm i --quiet && \
    echo "MOVIE_API_URL=$MOVIE_API_URL" > .env && \
    echo "AUTH_API_URL=$AUTH_API_URL" >> .env

COPY . .

RUN npm run build && \
    chmod a+x ./build/env.sh && \
    useradd dockerUser

USER dockerUser

CMD ./build/env.sh && serve -n -p $PORT -s dist
