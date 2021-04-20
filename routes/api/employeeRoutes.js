const router = require('express').Router();
const sequelize = require('../../connection');
const { Employee, Role, Department } = require('../../models');

// GET all readers
router.get('/', async (req, res) => {
    try {
        const employeeData = await Employee.findAll({
            include: [{ model: Role }, { model: Department }],
        });
        res.status(200).json(employeeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single reader
router.get('/:id', async (req, res) => {
    try {
        const employeeData = await Employee.findByPk(req.params.id, {
            include: [{ model: Role }, { model: Department }],
        });

        if (!employeeData) {
            res.status(404).json({ message: 'No reader found with that id!' });
            return;
        }

        res.status(200).json(employeeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE a reader
router.post('/', async (req, res) => {
    try {
        const employeeData = await Employee.create(req.body);
        res.status(200).json(employeeData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE a reader
router.delete('/:id', async (req, res) => {
    try {
        const employeeData = await Employee.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!employeeData) {
            res.status(404).json({ message: 'No Employee found under that id!' });
            return;
        }

        res.status(200).json(employeeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
