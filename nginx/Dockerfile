FROM nginx:alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf
# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]
