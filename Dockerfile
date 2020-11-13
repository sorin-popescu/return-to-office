FROM node:latest

COPY / /app/api
ADD docker-entrypoint-init/start.sh /start.sh
RUN chmod 755 /start.sh

CMD ["/start.sh"]
