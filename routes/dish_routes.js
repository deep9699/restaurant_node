var dish_mod = require("../models/dish_model");
var express = require("express");
var router = express.Router();

var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/dish')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});

    

router.get('/:id?',function(req,res,next){
    if(req.params.id)
    {
        dish_mod.getDishById(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    }
    else
    {
        dish_mod.getDish(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    
    }
});
    

// router.post('/',upload.single('dish_img'),function(req,res,next){
//     dish_mod.addDish(req.body,req.file.filename,function(err,rows){
//         if(err)
//         {
//             res.json(err);
//         }
//         else
//         {
//             res.json(rows);
//         }
//     })
// });

router.post('/',upload.single('img'),function(req,res,next){
    console.log("hey"+req.body[0]);
    dish_mod.extraa(req.body,function(err,rows){
        if(err)
        {
            //console.log(err);
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});

router.put('/',function(req,res,next){
    dish_mod.updateDish(req.body,function(err,rows){
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