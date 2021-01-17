const app = require('./app')
require('./db')
const PORT = process.env.PORT

app.listen(PORT || 3000, () => {
  console.log(`Escuchando en el puerto ${PORT || 3000}`)
})