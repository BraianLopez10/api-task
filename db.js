const mongoose = require('mongoose')

let URI_DB
if (process.env.MODE === 'production') {
  URI_DB = process.env.URI_DB
} else {
  URI_DB = 'mongodb://db/task'
}
mongoose.connect(URI_DB, { useNewUrlParser: true, useUnifiedTopology: true, })
  .catch((err) => {
    console.log(err)
  })