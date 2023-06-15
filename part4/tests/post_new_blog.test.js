const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('a post request create a new blog', async () => {
  const firstResponse = await api.get('/api/blogs')
  const initialBlogs = firstResponse.body
  console.log('initialBlogs :>> ', initialBlogs)

  const newBlog = {
    title: 'new blog!',
    author: 'Mario',
    url: 'https://www.yahoo.com/',
    likes: 7
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const secondResponse = await api.get('/api/blogs')

  expect(secondResponse.body).toHaveLength(initialBlogs.length + 1)
})
afterAll(async () => {
  await mongoose.connection.close()
})
