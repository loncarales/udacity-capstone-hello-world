FROM node:14.15.0-stretch

LABEL version="1.0.0" \
    description="A sample Node.js app using Express 4" \
    maintainer="ales.loncar@gmail.com"


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# Bundle app source
COPY . .

# Expose the xpress port
EXPOSE 8080

# Run this command when container is started
CMD [ "node", "server.js" ]
