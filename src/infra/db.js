import sqlite3 from 'sqlite3'

sqlite3.verbose()
const db = new sqlite3.Database('./src/infra/projeto.db')


// db.all(`SELECT * FROM conteudos`, [], (error, rows) => {
//   if (error) {
//     console.log("Erro ao obter conteúdos");
//   } else {
//     console.log(rows);
//   }
// });

export default db;