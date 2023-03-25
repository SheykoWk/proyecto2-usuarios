const chai = require('chai')
const chaiHttp = require('chai-http')
const {describe, it} = require('mocha')

const app = require('../../src/app.js')

chai.use(chaiHttp)

describe('Testing de la ruta de obtener todas las peliculas', () => {
    it('La respuesta debe tener un status 200', (done) => {
        chai.request(app)
            .get('/movies')
            
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                done()
            })
    })
    it('La respuesta debe ser de tipo array', (done) => {
        chai.request(app)
            .get('/movies')
            .end((err, res) => {
                chai.assert.typeOf(res.body, 'array')
                done()
            })
    })
})

