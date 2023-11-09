require('dotenv').config()
const app = require('./app')
const sequelize = require('./database/database')


sequelize.authenticate()
  .then(() => { console.log('database authenticated')})
  .catch(error => { console.log('database authenticated error', error)})

sequelize.sync()
  .then(() => { console.log('database synced')})
  .catch(error => { console.log('database synced error', error)})


app.listen(process.env.PORT, () => {
  console.log('port running on port', process.env.PORT)
})
