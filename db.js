const { Client } = require("pg");

const connectString = 'postgresql://sysadmin:123@127.0.0.1/biztime';
let db = new Client({
    connectionString: connectString
});

db.connect()
    .then(() => { console.log("connected successfully") })
    .catch((e) => { console.log(e) })


module.exports = db;