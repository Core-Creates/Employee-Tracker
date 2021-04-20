const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Employee extends Model { }

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        role_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'role',
                key: 'id',
            },
        },
        department_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'department',
                key: 'id',
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newEmployee) => {
                try {

                    return newEmployee;
                } catch (err) {
                    console.log(err);
                    return err;
                }
            },
            beforeUpdate: async (updatedEmployee) => {
                try {

                    return updatedEmployee;
                } catch (err) {
                    console.log(err);
                    return err;
                }
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee',
    }
);

module.exports = Employee;
