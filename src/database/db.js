const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

db.serialize(() => {
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places(
    //         id  INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `);

    // const query = `
    // INSERT INTO places(
    //     image,
    //     name,
    //     address,
    //     address2,
    //     state,
    //     city,
    //     items
    // ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80",
    //     "Colectoria",
    //     "Guilherme Gemballa, Jardim América",
    //     "Nº 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ];

    // function afterInsertData(err) {
    //     if(err) {
    //         console.log(err);
    //     }

    //     console.log("Cadastrado com sucesso");
    //     console.log(this);
    // }

    // Criar

    // db.run(query, values, afterInsertData);

    // Consultar

    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            console.log(err);
        }

        console.log("Aqui estão os seus registros");
        console.log(rows);
    });

    // Deletar

    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //     if(err) {
    //         console.log(err);
    //     }
    //     console.log("Registro deletado com sucesso");
    // });
});