const chai = require('chai')
const chaiHttp = require('chai-http')
const {describe, it} = require('mocha')

const app = require('../../src/app.js')

chai.use(chaiHttp)

describe('Testing de la ruta de creacion de usuarios', () => {
    it('La respuesta debe tener un status 201', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Sahid",
                "lastName": "Kick",
                "email": "sahid.kick@academlo.com",
                "password": "root",
                "age": 22
            })
            .end((err, res) => {
                chai.assert.equal(res.status, 201)
                done()
            })
    })
    it('La respuesta debe ser de tipo objeto', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Sahid",
                "lastName": "Kick",
                "email": "sahid.kick@academlo.com",
                "password": "root",
                "age": 22
            })
            .end((err, res) => {
                chai.assert.typeOf(res.body, 'object')
                done()
            })
    })
    it('La respuesta debe tener una propiedad id con el valor del nuevo id del usuario', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Sahid",
                "lastName": "Kick",
                "email": "sahid.kick@academlo.com",
                "password": "root",
                "age": 22
            })
            .end((err, res) => {
                chai.assert.property(res.body, 'id')
                done()
            })
    })
    it('La respuesta debe tener una propiedad llamada firstName que almacene el firstName que le pasamos al crear el usuario', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Sahid",
                "lastName": "Kick",
                "email": "sahid.kick@academlo.com",
                "password": "root",
                "age": 22
            })
            .end((err, res) => {
                chai.assert.equal(res.body.firstName, 'Sahid')
                done()
            })
    })

    it('La respuesta debe tener una propiedad llamada lastName que almacene el lastName que le pasamos al crear el usuario', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Sahid",
                "lastName": "Kick",
                "email": "sahid.kick@academlo.com",
                "password": "root",
                "age": 22
            })
            .end((err, res) => {

                chai.assert.equal(res.body.lastName, 'Kick')
                done()
            })
    })
    it('La respuesta debe tener una propiedad llamada email que almacene el email que le pasamos al crear el usuario', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Sahid",
                "lastName": "Kick",
                "email": "sahid.kick@academlo.com",
                "password": "root",
                "age": 22
            })
            .end((err, res) => {
                chai.assert.equal(res.body.email, 'sahid.kick@academlo.com')
                done()
            })
    })
    it('La respuesta debe tener una propiedad llamada password que almacene el password que le pasamos al crear el usuario', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Sahid",
                "lastName": "Kick",
                "email": "sahid.kick@academlo.com",
                "password": "root",
                "age": 22
            })
            .end((err, res) => {
                chai.assert.equal(res.body.password, 'root')
                done()
            })
    })

    it('La respuesta debe tener una propiedad llamada age que almacene el age que le pasamos al crear el usuario', (done) => {
        chai.request(app)
            .post('/users')
            .set("content-type", "application/json")
            .send({
                "firstName": "Sahid",
                "lastName": "Kick",
                "email": "sahid.kick@academlo.com",
                "password": "root",
                "age": 22
            })
            .end((err, res) => {
                chai.assert.equal(res.body.age, 22)
                done()
            })
    })
})

