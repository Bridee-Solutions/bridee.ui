FROM node:22 AS build

WORKDIR /app

COPY package.json package-lock.json .

RUN npm i

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]