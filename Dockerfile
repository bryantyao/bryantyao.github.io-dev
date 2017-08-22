# This project does not deploy a Docker image as its final artifact
# As a result, this is strictly for development/build purposes
FROM mhart/alpine-node:8.4.0 as base
WORKDIR /app
ADD ./docker-entrypoint.sh .
ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["yarn", "start"]

