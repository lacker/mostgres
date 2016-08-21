# mostgres
Access a Postgres database with the MongoDB client API.

# Why?
The best part of MongoDB is its client API, especially from Node.js. You don't have to set a schema, and you don't have to translate from JavaScript into a SQL or use an ORM.

The worst part of MongoDB is the operational cost. It isn't supported by AWS, Heroku, or any big cloud providers because of its license. And it's a lot newer, so it just isn't as stable and reliable as Postgres. It's more likely to lose your data.

The goal of mostgres is provide the ease of use of MongoDB, with the operational reliability of Postgres.

# How does it work?
Well, right now it doesn't. Ping twitter.com/lacker if you'd like to help out.
