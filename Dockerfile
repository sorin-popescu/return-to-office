FROM node:10-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn

# Bundle app source
COPY . .

# Exports
EXPOSE 8080

CMD [ "npm", "run", "start.dev" ]