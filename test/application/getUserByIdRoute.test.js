const chai = require('chai')
const chaiHttp = require('chai-http')
const {describe, it} = require('mocha')

const app = require('../../src/app.js')

chai.use(chaiHttp)

describe('Testing de la ruta de obtener un usuario por id', () => {
    it('La respuesta debe tener un status 200', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Oliver",
                "lastName": "Sykes",
                "email": "oliver.sykes@gmail.com",
                "password": "root",
                "age": 36
            })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/users/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.status, 200)
                        done()
                    })
            })
    })
    it('La respuesta debe tener ul mismo id que mandamos por parametro', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Oliver",
                "lastName": "Sykes",
                "email": "oliver.sykes@gmail.com",
                "password": "root",
                "age": 36
            })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/users/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.body.id, id)
                        done()
                    })
            })
    })
    it('La respuesta debe tener en firstName el nombre del usuario al que le pertenece el id que le mandamos', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Oliver",
                "lastName": "Sykes",
                "email": "oliver.sykes@gmail.com",
                "password": "root",
                "age": 36
            })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/users/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.body.firstName, 'Oliver')
                        done()
                    })
            })
    })
    it('La respuesta debe tener en lastName el apellido del usuario al que le pertenece el id que le mandamos', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Oliver",
                "lastName": "Sykes",
                "email": "oliver.sykes@gmail.com",
                "password": "root",
                "age": 36
            })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/users/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.body.lastName, 'Sykes')
                        done()
                    })
            })
    })
    it('La respuesta debe tener en email el email del usuario al que le pertenece el id que le mandamos', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Oliver",
                "lastName": "Sykes",
                "email": "oliver.sykes@gmail.com",
                "password": "root",
                "age": 36
            })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/users/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.body.email, 'oliver.sykes@gmail.com')
                        done()
                    })
            })
    })
    it('La respuesta debe tener en password la contraseña del usuario al que le pertenece el id que le mandamos', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Oliver",
                "lastName": "Sykes",
                "email": "oliver.sykes@gmail.com",
                "password": "root",
                "age": 36
            })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/users/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.body.password, 'root')
                        done()
                    })
            })
    })
    it('La respuesta debe tener en age la edad del usuario al que le pertenece el id que le mandamos', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Oliver",
                "lastName": "Sykes",
                "email": "oliver.sykes@gmail.com",
                "password": "root",
                "age": 36
            })
            .end((err, res) => {
                const id = res.body.id 
                chai.request(app)
                    .get(`/users/${id}`)
                    .end((err, res) => {
                        chai.assert.equal(res.body.age, 36)
                        done()
                    })
            })
    })
})

