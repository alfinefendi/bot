import {Sequelize} from "sequelize";
const db = new Sequelize('crud_db', 'alfinefendi', 'takeran15', {
    host : 'localhost',
    dialect: 'mysql'
});


export default db;