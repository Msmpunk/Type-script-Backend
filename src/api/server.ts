import app from './config/App'

const PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${PORT}`)
})
