FROM node:16 AS base
WORKDIR /usr/src/app

COPY . .
RUN npm ci

FROM base as build
RUN npm run build

FROM nginx:1.20-alpine as prod

COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf