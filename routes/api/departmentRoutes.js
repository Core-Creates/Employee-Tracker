const router = require('express').Router();
const sequelize = require('../../connection');
const { Department, Role, Employee } = require('../../models');

/**  GETs all departments ************************************************************/
router.get('/', async (req, res) => {

    try {
        const departmentData = await Department.findAll({

            include: [{ model: Role }, { model: Employee }],
        });

        res.status(200).json(roleData);

    } catch (err) {

        res.status(500).json(err);
    }
});



/**  GETs a department under the ID ************************************************/
router.get('/:id', async (req, res) => {
    try {

        const departmentData = await Department.findByPk(req.params.id, {

            include: [{ model: Role }, { model: Employee }],
        });

        if (!departmentData) {

            res.status(404).json({ message: 'No department found under that id!' });
            return;
        }

        res.status(200).json(roleData);

    } catch (err) {

        res.status(500).json(err);
    }
});



/** CREATES a Department ************************************************************/
router.post('/', async (req, res) => {
    try {
        const departmentData = await Department.create(req.body);

        res.status(200).json(departmentData);

    } catch (err) {
        res.status(400).json(err);
    }
});



/**  DELETES departments *****************************************************************/
router.delete('/:id', async (req, res) => {

    try {

        const departmentData = await Department.destroy({
            where: {
                id: req.params.id,
            },
            res.status(200).json({ message:'Successfully Destroyed the record!'});
        });

        if (!departmentData) {

            res.status(404).json({ message: 'No departmen found under that id!' });
            return;
        }

        res.status(200).json(departmentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
