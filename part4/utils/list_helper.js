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

module.exports = {
  dummy,
  totalLikes
}
