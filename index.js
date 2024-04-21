const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send('My first server is running..............reeeeeeee')
})

app.get('/data',(req,res)=>{
  res.send('data is connected')
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})