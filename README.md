# Udacity Capstone Hello World
A barebones Node.js app using Express 4. The Application will display Hello World my name is ... when run

## Running the application

### Prerequisites

For running locally make sure you have installed:

* [Node.js®](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)

### Running locally

```bash
git clone https://github.com/loncarales/udacity-capstone-hello-world.git
yarn install
yarn start
```

## Containerizing application

### Build Docker image

```bash
# Build docker image
docker build -t udacity-capstone-hello-world .

# Tag the image
export APP_TAG=$(node -p "require('./package.json').version")
docker tag udacity-capstone-hello-world:latest [registry/][username/]udacity-capstone-hello-world:$APP_TAG
docker tag [registry/][username/]udacity-capstone-hello-world:$APP_TAG [registry/][username/]udacity-capstone-hello-world:latest

# Push it to registry
docker push [registry/][username/]udacity-capstone-hello-world:$APP_TAG
docker push [registry/][username/]udacity-capstone-hello-world:latest
```

### Running application inside Docker container

`docker run -d --name udacity-capstone-hello-world -p 8080:8080 udacity-capstone-hello-world:latest`
