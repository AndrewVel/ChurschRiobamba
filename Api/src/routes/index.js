const { Router } = require('express');

const church = require('./churchRoute');


const router = Router();

// Configurar los routers
router.use("/church", church);



module.exports = router;
