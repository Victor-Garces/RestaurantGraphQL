const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    database: 'Restaurant',
    username: 'sa',
    password: 'sa1234',
    dialect: 'mssql',
    host: 'WEPSYS-BLACK',
    dialectOptions: {
        encrypt: true,
        instanceName: 'SQLEXPRESS'
    }
});

sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    isActived: Sequelize.BOOLEAN
}, {
    timestamps: false
});

export default sequelize;