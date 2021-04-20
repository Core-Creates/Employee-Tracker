const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Role extends Model { }

Role.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
    },

        // hooks: {
        //     beforeCreate: async (newEmployee) => {
        //         try {

        //             return newEmployee;
        //         } catch (err) {
        //             console.log(err);
        //             return err;
        //         }
        //     },
        //     beforeUpdate: async (updatedEmployee) => {
        //         try {

        //             return updatedEmployee;
        //         } catch (err) {
        //             console.log(err);
        //             return err;
        //         }
        //     },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'role',
    }
);

module.exports = Role;
