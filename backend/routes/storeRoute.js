
const express = require('express');
const router = express.Router();
const storeController = require("../controllers/storeController");

router.post('/store', storeController.addStore);
router.put('/store/:store_location', storeController.updateStore);
router.post('/plan', storeController.addPlan);
router.get('/plan/:plan_id', storeController.getPlan)

module.exports = router;