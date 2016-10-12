#!/bin/bash

#install nodejs & npm
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
. ~/.bashrc

#install dependencies
npm install

#run
npm start &
