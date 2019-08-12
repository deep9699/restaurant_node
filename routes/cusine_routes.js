var cusine_mod=require("../models/cusine_model");
var express=require('express');
var router=express.Router();


router.get('/:cusine_name?',function(req,res,next){
    if(req.params.cusine_name)
    {
        cusine_mod.getCusinesByName(req.params.cusine_name,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });

    }
    else
    {
        cusine_mod.getCusines(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
    
});

router.post('/',function(req,res,next){
    console.log(req.body);
    cusine_mod.addCusine(req.body,function(err,rows){
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

router.put('/',function(req,res,next){
    cusine_mod.updateCusine(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
})



module.exports=router;