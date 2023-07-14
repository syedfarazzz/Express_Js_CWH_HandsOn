const express = require('express')
const path = require('path')
const app = express()
const port = 3000

//Middleware
app.use(express.static(path.join(__dirname, "public")));

//custom middleware
// const farazMiddleware = (req, res, next) => {
//   console.log(req)
//   next()
// }

app.get('/hello/:name', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
  res.send("Hello World!" + req.params.name)
})

app.get('/about', (req, res) => {
  res.status(500)
  res.json({'farazz': 22})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


 