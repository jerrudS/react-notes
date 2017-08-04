const { it, describe } = require('mocha')
const { expect } = require('chai')
const request = require('request')


describe('GET My Notes', () => {
  it('Returns an array of notes', (done) => {
    request('http://localhost:1111/notes', (error, response, body) => {
      expect(error).to.equal(null)
      expect(response.statusCode).to.equal(200)
      const data = JSON.parse(body)
      expect(data).to.be.an('array')
      done()
    })
  })
})

describe('POST My Notes', () => {
  it('Saves a new note', (done) => {
    request.post('http://localhost:1111/notes', (error, response, body) => {
      expect(error).to.equal(null)
      expect(response.statusCode).to.equal(201)
      const data = JSON.parse(body)
      expect(data).to.be.an('array')
      done()
    })
  })
})

// describe('DELETE My Note', () => {
//   it('Deletes a note by id', (done) => {
//     request.post('http://localhost:1111/notes', (error, response, body) => {
//       console.log(body)
//       if (err) return done(err)
//       console.log(body)
//       expect(body).not.to.equal(undefined)
//       done()
//     })
//   })
// })
