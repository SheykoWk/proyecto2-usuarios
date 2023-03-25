const chai = require('chai')
const chaiHttp = require('chai-http')
const {describe, it} = require('mocha')

const app = require('../../src/app.js')

chai.use(chaiHttp)

describe('Testing de la ruta de obtener un usuario por id', () => {
    it('La respuesta debe tener un status 200', (done) => {
        chai.request(app)
            .post('/movies')
            .set("content-type", "application/json")
            .send({
                "title": "Harry Potter y el caliz de fuego",
                "description": "Lorem Ipsum",
                "year": 2005,
                "director": "Mike Newell"
              })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/movies/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.status, 200)
                        done()
                    })
            })
    })
    it('La respuesta debe tener en title el titulo de la pelicula que le pertenece el id que le mandamos', (done) => {
        chai.request(app)
            .post('/movies')
            .set("content-type", "application/json")
            .send({
                "title": "Harry Potter y el caliz de fuego",
                "description": "Lorem Ipsum",
                "year": 2005,
                "director": "Mike Newell"
              })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/movies/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.body.title, "Harry Potter y el caliz de fuego")
                        done()
                    })
            })
    })
    it('La respuesta debe tener en description la descripcion de la pelicula que le pertenece el id que le mandamos', (done) => {
        chai.request(app)
            .post('/movies')
            .set("content-type", "application/json")
            .send({
                "title": "Harry Potter y el caliz de fuego",
                "description": "Lorem Ipsum",
                "year": 2005,
                "director": "Mike Newell"
              })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/movies/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.body.description, "Lorem Ipsum")
                        done()
                    })
            })
    })
    it('La respuesta debe tener en year el año de la pelicula que le pertenece el id que le mandamos', (done) => {
        chai.request(app)
            .post('/movies')
            .set("content-type", "application/json")
            .send({
                "title": "Harry Potter y el caliz de fuego",
                "description": "Lorem Ipsum",
                "year": 2005,
                "director": "Mike Newell"
              })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/movies/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.body.year, 2005)
                        done()
                    })
            })
    })
    it('La respuesta debe tener en director el director de la pelicula que le pertenece el id que le mandamos', (done) => {
        chai.request(app)
            .post('/movies')
            .set("content-type", "application/json")
            .send({
                "title": "Harry Potter y el caliz de fuego",
                "description": "Lorem Ipsum",
                "year": 2005,
                "director": "Mike Newell"
              })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/movies/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.body.director, "Mike Newell")
                        done()
                    })
            })
    })
})

