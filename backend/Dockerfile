FROM node:13.10.1

WORKDIR /app/backend

COPY . /app/backend/

RUN yarn

# COPY . /app/backend

RUN yarn generate

EXPOSE 4000

CMD yarn run dev