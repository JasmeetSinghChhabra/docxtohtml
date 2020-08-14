const express = require('express')
const app = express()
const port = 80
app.use('/', express.static('src'))

app.listen(port, () => {
  console.log(`Docx to Html App Listening at http://localhost:${port}`)
})