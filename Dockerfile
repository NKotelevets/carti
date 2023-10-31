FROM node:19 AS builder

ARG REACT_APP_GOOGLE_API_KEY
ARG REACT_APP_BASE_URL
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app

COPY package.json yarn.lock /
RUN yarn

COPY . .
RUN yarn add vite@4.4.5
RUN yarn add @vitejs/plugin-react
RUN yarn build

FROM nginx:1.22.1-alpine

COPY --from=builder /usr/app /var/www/whitelabel/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
