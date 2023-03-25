const chai = require('chai')
const chaiHttp = require('chai-http')
const {describe, it} = require('mocha')

const app = require('../../src/app.js')

chai.use(chaiHttp)

describe('Testing de la ruta de creacion de peliculas', () => {
    it('La respuesta debe tener un status 201', (done) => {
        chai.request(app)
            .post('/movies')
            .set("content-type", "application/json")
            .send({
              "title": "Pacific Rim",
              "description": "Lorem Ipsum",
              "year": 2012,
              "director": "Guillermo del Toro"
            })
            .end((err, res) => {
                chai.assert.equal(res.status, 201)
                done()
            })
    })
    it('La respuesta debe ser de tipo objeto', (done) => {
        chai.request(app)
            .post('/movies')
            .set("content-type", "application/json")
            .send({
                "title": "Pacific Rim",
                "description": "Lorem Ipsum",
                "year": 2012,
                "director": "Guillermo del Toro"
              })
            .end((err, res) => {
                chai.assert.typeOf(res.body, 'object')
                done()
            })
    })
    it('La respuesta debe tener una propiedad id con el valor del nuevo id del usuario', (done) => {
        chai.request(app)
            .post('/movies')
            .set("content-type", "application/json")
            .send({
                "title": "Pacific Rim",
                "description": "Lorem Ipsum",
                "year": 2012,
                "director": "Guillermo del Toro"
              })
            .end((err, res) => {
                chai.assert.property(res.body, 'id')
                done()
            })
    })
    it('La respuesta debe tener una propiedad llamada title que almacene el titulo que le pasamos al crear la pelicula', (done) => {
        chai.request(app)
        .post('/movies')
        .set("content-type", "application/json")
            .send({
                "title": "Pacific Rim",
                "description": "Lorem Ipsum",
                "year": 2012,
                "director": "Guillermo del Toro"
              })
            .end((err, res) => {
                chai.assert.equal(res.body.title, 'Pacific Rim')
                done()
            })
    })

    it('La respuesta debe tener una propiedad llamada description que almacene la descripcion que le pasamos al crear la pelicula', (done) => {
        chai.request(app)
        .post('/movies')
        .set("content-type", "application/json")
            .send({
                "title": "Pacific Rim",
                "description": "Lorem Ipsum",
                "year": 2012,
                "director": "Guillermo del Toro"
              })
            .end((err, res) => {

                chai.assert.equal(res.body.description, 'Lorem Ipsum')
                done()
            })
    })
    it('La respuesta debe tener una propiedad llamada year que almacene el año que le pasamos al crear la pelicula', (done) => {
        chai.request(app)
        .post('/movies')
        .set("content-type", "application/json")
            .send({
                "title": "Pacific Rim",
                "description": "Lorem Ipsum",
                "year": 2012,
                "director": "Guillermo del Toro"
              })
            .end((err, res) => {
                chai.assert.equal(res.body.year, 2012)
                done()
            })
    })
    it('La respuesta debe tener una propiedad llamada director que almacene el director que le pasamos al crear la pelicula', (done) => {
        chai.request(app)
        .post('/movies')
        .set("content-type", "application/json")
            .send({
                "title": "Pacific Rim",
                "description": "Lorem Ipsum",
                "year": 2012,
                "director": "Guillermo del Toro"
              })
            .end((err, res) => {
                chai.assert.equal(res.body.director, 'Guillermo del Toro')
                done()
            })
    })
})

