require('dotenv').config()

const uriDb = process.env.URI_DB
const mode = process.env.NODE_ENV

module.exports = {
  uriDb,
  mode
}