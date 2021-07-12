FROM node:alpine as builder

# Create app directory
WORKDIR '/app'

# Install app dependencies
COPY ./package.json ./

RUN npm install --legacy-peer-deps

# Bundle app source
COPY . .

RUN npm run build

# NGINX configs
FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

CMD [ "npm", "start" ]




