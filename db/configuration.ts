import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('ventas', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '1234', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
});

console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST );

export default sequelize;