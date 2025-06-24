FROM nginx:alpine AS base
WORKDIR /app
EXPOSE 8080

FROM node:22.16.0-alpine AS builder
RUN mkdir /build
WORKDIR /build
RUN npm install -g @angular/cli@20

FROM builder AS build
WORKDIR /build
ARG BUILD_CONFIGURATION=production
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build --configuration=$BUILD_CONFIGURATION

FROM base AS final
WORKDIR /app
COPY --from=build /build/dist .
COPY /.nginx/nginx.conf /etc/nginx/nginx.conf

