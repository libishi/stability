// sudo lsof -i :8080 and kill -9 PID
import express from 'express'
import 'dotenv/config'

import { sequelize } from './models'
import { Sequelize } from 'Sequelize'
const app = express()
// console.log(`sequelize`, sequelize)
// app.listen(3000, 'localhost', () => console.log('Wellcome 3000'))

const conn = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: 'mssql',
    dialectOptions: {
      authentication: {
        options: {
          userName: 'ahmed',
          password: 'password',
        },
      },
      options: {
        instanceName: 'EDDBSQLSERVER',
      },
    },
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

app.listen(process.env.PORT)
console.log('Starting Server on Port ', process.env.PORT_NUMBER)
