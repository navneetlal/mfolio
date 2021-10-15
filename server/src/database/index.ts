// const database = process.env.DB_TYPE ?? 'sqlite'

// const db = await (async function () {
//   switch (database.toLowerCase()) {
//     case 'sqlite':
//       return await import('./sqlite')
//     default:
//       return await import('./sqlite')
//   }
// })()

// const sequelize = db.default

// export default sequelize;

import sequelize from "./sqlite";

export default sequelize;