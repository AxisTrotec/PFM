var spend = require('../models/spend');
var spending = require("../models/spendings");

exports.spend_list = function(req, res) {
      spending.find()
      .sort([['month', 'ascending']])
      .exec(function(err, spends){
        if(err) { return next(err);}
        res.render("spend_list", {title: "Months for each spendings", spend_list: spends});
      });
};

exports.spend_detail = function(req, res) {
    async.parallel({
        spendings_list: function(callback){
          spending.find({'month': req.params.id})
      }, function (err, results){
        if(err) {return next(err)};
        if(results.spendings_list==null){
            var err =  new Error('No spendings for this month');
            err.status = 404;
            return next(err);
        }
        res.render('spendings_detail', { title: 'Spending Details',  spendings_list: results.spendings_list});
      }
    });
};

exports.spend_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: spend create GET');
};

exports.spend_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: spend create POST');
};

exports.spend_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: spend delete GET');
};

exports.spend_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: spend delete POST');
};

exports.spend_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: spend update GET');
};

exports.spend_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: spend update POST');
};
