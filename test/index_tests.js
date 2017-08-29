<<<<<<< HEAD
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
=======
const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')
// import * as supertest from 'supertest'

describe('GET static pages', function () {
  describe('/', function () {
    it('should response 200', function (done) {
      request(app)
      .get('/')
      .expect(200, done)
    })
  })

  describe('/about', function () {
    it('should response 404', function (done) {
      request(app)
      .get('/about')
      .expect(404, done)
    })
  })
})

describe('CRUD taco test', function () {
  describe('GET /tacos', function () {
    it('should return all tacos', function (done) {
      request(app)
      .get('/tacos')
      .end(function (err, response) {
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an('array')

        if (response.body.length) {
          expect(response.body[0]).to.have.property('amount')
        }

        // assert.strictEqual(200, response.status)
        done()
      })
    })
  })

  describe('POST /tacos', function () {
    it('should create new taco', function (done) {
      request(app)
      .post('/tacos')
      .send({
        name: 'Parmesan Fiesta',
        amount: 1000
      })
      .end(function (err, response) {
        done()
      })
>>>>>>> upstream/master
    })
  })
})
