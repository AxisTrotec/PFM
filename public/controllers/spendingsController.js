const { body, validationResult } = require("express-validator");

var spending = require("../models/spendings");
var spend = require("../models/spend");

var async = require("async");

exports.index = function (req, res) {
  res.render("index", { title: "Personal Finance Management" });
};

exports.spendings_list = function (req, res) {
    spending.find()
    .sort([['month', 'ascending']])
    .exec(function(err, spends){
      if(err) { return next(err);}
      res.render("spendings_list", {title: "Spendings", spendings_list: spends});
    });
};

exports.spendings_detail = function (req, res) {
    async.parallel({
      spendings_list: function(callback){
        spending.find({'month': req.params.id})
    }, function (err, results){
      if(err) {return next(err)};
      res.render('spendings_detail', { title: 'Spending Details', spendings_list: results.spendings_list});
    }
  });
};

exports.spendings_create_get = function (req, res) {
      res.render("spendings_form", {title: "Input spendings"})
};

exports.spendings_create_post = function (req, res) {
    body("month", "Month must not be empty.")
      .escape(),
    body("spent", "Spent must not be empty.")
      .isDecimal()
      .escape(),

    console.log("Stage 1: work");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Stage 2: work");

      res.render("spendings_form", {
            title: "Input spendings",
            spendings: spendings,
            errors: errors.array(),
          })
          console.log("Stage 3: work");
      return;
    } else {
      console.log("Stage 4: work");
      var spendings = new spending({
        month: req.body.month,
        spent: req.body.spent,
      });

      spendings.save(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect("/catalog/spendings");
      });
    }
};

exports.spendings_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: spendings delete GET");
};

exports.spendings_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: spendings delete POST");
};

exports.spendings_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: spendings update GET");
};

exports.spendings_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: spendings update POST");
};
