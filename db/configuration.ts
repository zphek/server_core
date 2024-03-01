import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

const sequelize = new Sequelize('ventas', process.env.DB_USER || 'root', process.env.DB_PASSWORD || '1234', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
});

export default sequelize;