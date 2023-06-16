const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const blog = new Blog(request.body)

  const result = await blog.save()
  response.status(201).json(result)
})

blogsRouter.delete('/:id', async (request, response) => {
  const blogId = request.params.id

  const result = await Blog.findByIdAndRemove(blogId)
  if (result) {
    response.status(204).end()
  } else {
    response.status(404).json({ error: 'Blog not found' })
  }
})

module.exports = blogsRouter
