import sequelize from "db/configuration";
import {DataTypes} from "sequelize";

const client = sequelize.define('clients', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    client_fullname: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
});

export default client;