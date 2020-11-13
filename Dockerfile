FROM node:latest

ADD docker-entry-point/start.sh /start.sh
RUN chmod 755 /start.sh

CMD ["/start.sh"]
