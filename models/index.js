const Employee = require('./Employee');
const Role = require('./role');
const Department = require('./Department');

Employee.hasOne(Role, {
    foreignKey: 'employee_id',
    onDelete: 'CASCADE',
});


Role.belongsTo(Employee, {
    foreignKey: 'employee_id',
    onDelete: 'CASCADE',
});

Department.belongsTo(Role, {
    foreignKey: 'role_id',
    onDelete: 'CASCADE',
});

module.exports = { Employee, Role, Department };
