var cusine_mod=require("../models/cusine_model");
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    console.log(req.body);
    cusine_mod.deleteAll(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});

router.get('/:id',function(req,res,next){
    cusine_mod.getCusinesById(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});
module.exports=router;