const express = require('express');
const router = express.Router();
const db = require("../models");
const dayHelper = require("../helper/day");
const monthHelper = require("../helper/month");


router.get('/', function (req, res) {
  db.Product
    .findAndCountAll()
    .then((data) => {
      db.Order
        .findAndCountAll()
        .then((countOrder) => {
          let date = new Date();
          let day = date.getDate();
          let month = date.getMonth()+1;
          db.Order
            .findAll()
            .then((dataOrder) => {
              let countPerDay = 0;
              let countPerMonth = 0;
              dataOrder.forEach((countDay) => {
                if (day == dayHelper(countDay.createdAt)) {
                  countPerDay++;
                }
                if (month == monthHelper(countDay.createdAt)) {
                  countPerMonth++;
                }
              })
              res.render('index', {countProduct: data.count, countOrder: countOrder.count, countday: countPerDay, countMonth: countPerMonth})
            })
        })
    })
})

module.exports = router
