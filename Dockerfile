FROM node:latest

ADD docker-entrypoint-init/start.sh /start.sh
RUN chmod 755 /start.sh

CMD ["/start.sh"]
