const { it, describe } = require('mocha')
const { expect } = require('chai')
const request = require('request')


describe('My Notes', () => {
  it('Should be a JSON array', (done) => {
    request('http://localhost:3005/notes', (error, response, body) => {
      console.log('error;', error)
      console.log('statusCode:', response && response.statusCode)
      console.log('body:', body)
      const data = JSON.parse(body)
      expect(data).to.be.an('array')
      done()
    })
  })
})
