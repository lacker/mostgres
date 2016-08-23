const pg = require('pg');

class Db {
  // Construct a MongoDB-Db workalike from a Postgres pool.
  constructor(pool) {
    this.pool = pool;
  }

  // Gets a client from the pool and runs operation(client).
  // operation(client) should return a promise.
  // After that promise resolves, the client is returned to the pool.
  // After the client is returned to the pool, _run itself
  // resolves to the same thing operation(client) resolved to.
  _run(operation) {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          // We couldn't even get a client.
          reject(err);
          return;
        }

        operation(client).then((result) => {
          done();
          resolve(result);
        }).catch((err) => {
          done();
          reject(err);
        })
      });
    });
  }
}

// poolConfig is a configuration object for pg.Pool as described in
// https://github.com/brianc/node-postgres
// Returns a Db object.
function connect(poolConfig) {
  return new Db(pg.Pool(poolConfig));
}
