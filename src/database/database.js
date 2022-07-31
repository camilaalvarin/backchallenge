import Sequelize from "sequelize";

export const sequelize = new Sequelize('cambalache', 'postgres', 'camila22', {
    host: 'localhost',
    dialect: 'postgres'
})