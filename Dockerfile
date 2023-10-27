FROM node:19 AS builder

ARG REACT_APP_GOOGLE_API_KEY
ARG REACT_APP_BASE_URL
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}


COPY package.json yarn.lock /
RUN yarn

COPY . .
RUN yarn dev

FROM nginx:1.22.1-alpine

COPY --from=builder /build /var/www/whitelabel/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
