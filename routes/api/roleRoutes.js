const router = require('express').Router();
const sequelize = require('../../connection');
const { Department, Role, Employee } = require('../../models');

/**  Gets all roles **************************************************************/
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




/**  Gets a role under a single ID *********************************************/
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




/**  CREATES a role ************************************************************/
router.post('/', async (req, res) => {
    try {
        const roleData = await Role.create(req.body);
        res.status(200).json(roleData);
    } catch (err) {
        res.status(400).json(err);
    }
});




/** DELETES a role **************************************************************/
router.delete('/:id', async (req, res) => {
    try {
        const roleData = await role.destroy({
            where: {
                id: req.params.id,
            },
            res.status(200).json({ message:'Successfully Destroyed the record!'});
        });

        if (!roleData) {
            res.status(404).json({ message: 'No role found with that id!' });
            return;
        }

        res.status(200).json(roleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
