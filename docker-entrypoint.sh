#! /bin/sh
set -e

# Install dependencies
cd /root/app
yarn install

if [ "$1" == "run" ] || [ "$1" == "r" ]
then
  exec yarn run "${@:2}"
else
  # Run the command as-is
  exec "$@"
fi

