# Reddit Clone Front End

## Summary

A reddit front end clone which mimics some of the functionality of the website. This React application utilises my backend API hosted in Heroku which can be accessed using the following URL: https://reddit-clone-nc.herokuapp.com/api

## Instructions for setup

To locally host this React application you must have "" Min version....??""

-The minimum version of Node.js required is: v17.0.0
-The minimum version of Postgres required is: v12.8
-Clone repo into your desired directory.
-Install dependencies
-Create .env files in root directory and set PGDATABASE to nc_news and nc_news_test.
-Setup local databases.
-Seed local database.
-Run tests.

Copy the commands below to complete the setup for this project:
You must have the minimum versions of Node.js and Postgres installed before running these commands.

```
git clone https://github.com/frajdouglas/reddit_clone.git

npm install -D

touch .env.development

echo PGDATABASE=nc_news >> .env.development

touch .env.test

echo PGDATABASE=nc_news_test >> .env.test

npm run setup-dbs

npm run seed

npm test

```