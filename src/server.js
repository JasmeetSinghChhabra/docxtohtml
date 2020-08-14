const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   app.use('/static', express.static('public'))
// })
app.use('/', express.static('src'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})