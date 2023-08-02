// Create web server with express

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//handle request to /comment
router.get('/', commentController.list);

//handle request to /comment/add
router.get('/add', commentController.add_get);

//handle request to /comment/add
router.post('/add', commentController.add_post);

//handle request to /comment/delete
router.get('/delete/:id', commentController.delete_get);

//handle request to /comment/delete
router.post('/delete/:id', commentController.delete_post);

//handle request to /comment/update
router.get('/update/:id', commentController.update_get);

//handle request to /comment/update
router.post('/update/:id', commentController.update_post);

//handle request to /comment/search
router.get('/search', commentController.search_get);

//handle request to /comment/search
router.post('/search', commentController.search_post);

//handle request to /comment/detail
router.get('/detail/:id', commentController.detail);

module.exports = router;