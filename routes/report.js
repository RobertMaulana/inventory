const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const db = require("../models");


router.get('/', (req, res, next) => {
  let toSort = []
  db.Order.findAll()
  .then((data) => {
    data.forEach((newData)=>{
      toSort.push(newData.nama_product)
    })
    function count() {
      toSort.sort()
      let current = null;
      let count = 0;
      let reportData ={}
      let report = []
      for (var i = 0; i < toSort.length; i++) {
        if (toSort[i] !== current) {
          if (count>0) {
            reportData = {
              product: current,
              order: count
            }
            report.push(reportData)
          }
          current = toSort[i]
          count = 1
        }else {
          count++
        }
      }
      if (count > 0) {
        reportData = {
          product: current,
          order: count
        }
        report.push(reportData)

      }
      return report
    }
    res.render('report', {data: count()})
  })
  .catch((err) => {
    res.send(err.message)
  })
})

module.exports = router;
