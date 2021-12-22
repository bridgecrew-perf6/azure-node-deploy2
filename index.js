const express = require('express')

const app = express()
const PORT = 4000

app.get('/', (req, res) => {
  res.send('Welcome to my app')
})

app.get('/about', (req, res) => {
  res.send('Read all about my app')
})

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
})
