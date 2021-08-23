# Learning Docker & Docker Compose

Hey how's it going?

This project was created while I was studying  <a href="https://docs.docker.com/engine/">Docker</a> and <a href="https://docs.docker.com/compose/">Docker compose</a> by its own documentation.

If you want to run the application follow the next steps:

`git clone https://github.com/Ismael-Oliv/learning_docker_dockercompose `

`cd learning_docker_dockercompose`

There two ways to run the application:

**Using Node**

`node src/server.js`

**Using Docker Compose**

`docker-compose up -d`

*the -d parameter tells the docker to run the application in background*

If you want to see whats printing on console log you can:

1. Get the id of the container - run `docker ps` and identify the  *documentationdocker_web* id

2. Run `docker logs -f container_id`

   *the -f parameter tells the docker to follow the console log*



Questions?

Send me a email ismaelalves1@outlook.com.br