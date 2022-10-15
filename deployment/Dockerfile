FROM node:16-alpine AS builder

WORKDIR /home/app

COPY . .

RUN npm config set registry https://registry.npm.taobao.org/ && npm i && npm run build

FROM nginx:alpine

COPY --from=builder /home/app/dist /usr/share/nginx/html/