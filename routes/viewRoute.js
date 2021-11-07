const express = require('express');
const viewController = require('../controller/viewController');
const authController = require('../controller/authController');

const route = express.Router();

// route.use();

// route.get('/', authController.isLoggedIn, viewController.getOverview);
// route.get('/tour/:tourSlug', authController.isLoggedIn, viewController.getTour);
route.get('/login', authController.isLoggedIn, viewController.getLoginForm);
route.get('/forgotPassword', viewController.getForgotPassword);
// route.get('/me', authController.protected, viewController.getMe);

module.exports = route;
