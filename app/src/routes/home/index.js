"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/product", ctrl.output.product);
router.get("/product_detail", ctrl.output.product_detail);
router.get("/order", ctrl.output.order);
router.get("/order_detail", ctrl.output.order_detail);
router.get("/inpormation", ctrl.output.inpormation);

module.exports = router
