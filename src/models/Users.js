import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Repos } from './Repositories.js';
import { Login } from './LoginHistory.js';

export const User = sequelize.define ('users', {
    name: {
        type: DataTypes.TEXT,
    },
    email: {
        type: DataTypes.TEXT,
    },
    birthDate: {
        type: DataTypes.DATE, 
    },
    favLanguage: {
        type: DataTypes.ENUM('javascript', 'python'),
        allowNull: true,

    },
    password: {
        type: DataTypes.TEXT,
    },
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
})

// REPOS
User.hasMany(Repos, {
    foreignKey: 'repoId',
    sourceKey: 'userId'
})

Repos.belongsTo(User, {
    foreignKey: 'repoId',
    targetId: 'userId'
})
// LOGIN
User.hasMany(Login, {
    foreignKey: 'loginId',
    sourceKey: 'userId'
})

Login.belongsTo(User, {
    foreignKey: 'loginId',
    targetId: 'userId'
})