import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('ventas', process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

export default sequelize;