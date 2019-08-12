var db=require('../restaurant');

var dish={
    
    addDish(item,filename,callback)
    {
        console.log(item);
        return db.query("insert into dish_tbl (dish_name,dish_price,fk_cusine_id,dish_img) values (?,?,?,?)",[item.dish_name,item.dish_price,item.cusine_id,filename],callback);
    },
    extraa(fg,callback)
    {
        console.log(fg.pdf);
        return db.query("insert into extraa values (?,?)",[fg.img,fg.pdf],callback);
    },
    getDish(callback)
    {
        return db.query("select * from dish_tbl",callback);
    },
    updateDish(item,callback)
    {
        return db.query("update dish_tbl set dish_price=? where dish_id=?",[item.dish_price,item.dish_id],callback);
    },
    getDishById(id,callback)
    {
        return db.query("select * from dish_tbl where dish_id=?",[id],callback);
    },
    deleteAll(item,callback)
    {
        console.log(item);
        var delarr = [];  
        for (i = 0; i < item.length; i++) {  
            delarr[i] = item[i].dish_id;  
        }  
        
        return db.query("delete from dish_tbl where dish_id in (?)", [delarr], callback);  

    }

}
module.exports=dish;