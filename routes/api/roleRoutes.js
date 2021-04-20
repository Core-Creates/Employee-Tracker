const router = require('express').Router();
const sequelize = require('../../connection');
const { Department, Role, Employee } = require('../../models');

// GET all readers
router.get('/', async (req, res) => {
    try {
        const roleData = await Role.findAll({
            include: [{ model: Department }, { model: Employee }],
        });
        res.status(200).json(roleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single reader
router.get('/:id', async (req, res) => {
    try {
        const roleData = await Role.findByPk(req.params.id, {
            include: [{ model: Department }, { model: Employee }],
        });

        if (!roleData) {
            res.status(404).json({ message: 'No Role found under that id!' });
            return;
        }

        res.status(200).json(roleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE a reader
router.post('/', async (req, res) => {
    try {
        const roleData = await Role.create(req.body);
        res.status(200).json(roleData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE a reader
router.delete('/:id', async (req, res) => {
    try {
        const employeeData = await role.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!roleData) {
            res.status(404).json({ message: 'No reader found with that id!' });
            return;
        }

        res.status(200).json(roleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
