"use strict";

const output = {
    home: (req,res) => {
        res.render("home/index");
    },
    
    login: (req,res) => {
        res.render("home/login");
    },

    register: (req,res) => {
        res.render("home/register");
    },

    product: (req,res) => {
        res.render("home/product");
    },

    product_detail: (req,res) => {
        res.render("home/product_detail");
    },

    order: (req, res) => {
        res.render("home/order");
    },
    order_detail: (req, res) => {
        res.render("home/order_detail");
    },
    
    inpormation: (req, res) => {
        res.render("home/inpormation");
    },
};

module.exports = {
    output,
    
};