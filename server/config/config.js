import 'dotenv/config'

export const development = {
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  define: {
    timestamps: false,
  },
  dialect: process.env.DB_DIALECT,
  authentication: {
    options: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
  },
  options: {
    instanceName: 'EDDBSQLSERVER',
    trustServerCertificate: true,
    encrypt: false,
    // useUTC: false,
    // dateFirst: 1,
  },
}

// const sequelize = new Sequelize(
//   process.env.DB_DATABASE,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//     dialect: 'mssql',
//     dialectOptions: {
//       authentication: {
//         type: 'ntlm',
//         options: {
//           domain: 'yourDomain',
//           userName: 'username',
//           password: 'password',
//         },
//       },
//       options: {
//         instanceName: 'SQLEXPRESS',
//       },
//     },
//   }
// )
