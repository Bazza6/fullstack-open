const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('when a post is deleted the blogs length is -1', async () => {
  const firstResponse = await api.get('/api/blogs')
  const initialBlogs = firstResponse.body
  await api
    .delete(`/api/blogs/${initialBlogs[0].id}`)
    .expect(204)

  const secondResponse = await api.get('/api/blogs')
  expect(secondResponse.body).toHaveLength(initialBlogs.length - 1)
})
afterAll(async () => {
  await mongoose.connection.close()
})
