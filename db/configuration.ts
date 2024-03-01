import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('ventas', 'root', 'bernardo1', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;