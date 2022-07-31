import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Login = sequelize.define ('loginHistory', {
    dateAndTime: {
        type: DataTypes.DATE,
    },
    type: {
        type: DataTypes.ENUM('x', 'y'),
    },
    userId: {
        type: DataTypes.TEXT,
    },
    // loginId: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    // }
})