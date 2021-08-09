var express = require('express');
var router = express.Router();

var spendings_controller = require('../controllers/spendingsController');
var spend_controller = require('../controllers/spendController');

router.get('/', spendings_controller.index);

router.get('/spendings/create', spendings_controller.spendings_create_get);

router.post('/spendings/create', spendings_controller.spendings_create_post);

router.get('/spendings/:id/delete', spendings_controller.spendings_delete_get);

router.post('/spendings/:id/delete', spendings_controller.spendings_delete_post);

router.get('/spendings/:id/update', spendings_controller.spendings_update_get);

router.post('/spendings/:id/update', spendings_controller.spendings_update_post);

router.get('/spendings/:id', spendings_controller.spendings_detail);

router.get('/spendings', spendings_controller.spendings_list);


router.get('/spend/create', spend_controller.spend_create_get);

router.post('/spend/create', spend_controller.spend_create_post);

router.get('/spend/:id/delete', spend_controller.spend_delete_get);

router.post('/spend/:id/delete', spend_controller.spend_delete_post);

router.get('/spend/:id/update', spend_controller.spend_update_get);

router.post('/spend/:id/update', spend_controller.spend_update_post);

router.get('/spend/:id', spend_controller.spend_detail);

router.get('/spends', spend_controller.spend_list);

module.exports = router;