FROM node:22 AS build

WORKDIR /app

COPY package.json package-lock.json .

RUN npm i

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /app

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp

CMD ["nginx", "-g", "daemon off;"]