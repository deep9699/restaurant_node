var customer=require('../models/customer_model');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    customer.getAllCustomer(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


router.post('/',function(req,res,next){
    customer.getCustomerByLogin(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;