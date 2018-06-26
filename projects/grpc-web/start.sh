#!/usr/bin/env bash

cd proxy
./start.sh
cd ..

cd frontend
yarn
yarn start
cd ..
