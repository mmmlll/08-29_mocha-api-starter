var request = require('supertest')
var app = require('../index.js')

describe('GET /', function (done) {
  it('should respond 200', function (done) {
    request(app)
    .get('/')
    .expect(200, done)
  })
})

describe('/about', function(done) {
  it('should respond 404', function (done) {
    request(app)
    .get('/about')
    .expect(404, done)
  })
})

describe('CRUD taco test', function (done) {
  describe('GET /tacos', function (done) {
    it('should respond 404', function (done) {
      request(app)
      .get('/tacos')
      .expect(300, done)
    })
  })
})
