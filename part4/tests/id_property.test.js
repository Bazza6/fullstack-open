const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('the unique identifier property is named id', async () => {
  const response = await api.get('/api/blogs')
  console.log('object :>> response.body', response.body)
  expect(response.body[0].id).toBeDefined()
})

afterAll(async () => {
  await mongoose.connection.close()
})
