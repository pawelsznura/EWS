#!/bin/bash

# Install on fresh machine 

sudo apt install git
git clone https://github.com/pawelsznura/EWS.git
cd EWS
sudo apt install npm

# install express? 
npm install
sudo ufw allow 8080/tcp
node server.js

