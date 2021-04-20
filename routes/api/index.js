const router = require('express').Router();
const employeeRoutes = require('./employeeRoutes');
const roleRoutes = require('./roleRoutes');

router.use('/employee', employeeRoutes);
router.use('/role', roleRoutes);

module.exports = router;