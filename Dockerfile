FROM alpine:latest

# Install nginx package and remove cache
RUN apk add --update nginx && rm -rf /var/cache/apk/*

# Copy basic files
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY out /usr/share/nginx/html/

EXPOSE 8080
VOLUME ["/usr/share/nginx/html"]

# root user will run 'nginx: master process'
# nobody user will run 'nginx: worker process' as dictated in the nginx.non-root.conf
CMD ["nginx", "-g", "daemon off;"]