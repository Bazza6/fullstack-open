const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let total = 0
  blogs.forEach(b => {
    total += b.likes
  })
  return total
}

const favoriteBlog = (blogs) => {
  const sortedBlogs = blogs.sort((a, b) => {
    return b.likes - a.likes
  })
  return sortedBlogs[0]
}
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
