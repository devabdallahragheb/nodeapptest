const app = require('../index');
const request = require('supertest');
describe('GET /will', () => {
    it('responds with "response done"', (done) => {
      request(app)
        .get('/will')
        .expect('response done')
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });