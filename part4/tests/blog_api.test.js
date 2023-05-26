const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogs are returned as json', async () => {
  const response = await api.get('/api/blogs')

  console.log('(response.headers["content - type"]) :>> ', (response.headers['content-type']))
  console.log('response.body :>> ', response.body)
  expect(response.statusCode).toBe(200)
  expect(response.headers['content-type']).toMatch(/application\/json/)
  expect(response.body).toHaveLength(1)
})

afterAll(async () => {
  await mongoose.connection.close()
})
