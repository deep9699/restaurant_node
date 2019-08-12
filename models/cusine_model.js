var db=require('../restaurant');
var cusine={
    getCusines:function(callback)
    {
        return db.query("select * from cusine_tbl",callback);
    },
    getCusinesById:function(id,callback)
    {
        return db.query("select * from cusine_tbl where cusine_id=?",[id],callback);
    },
    getCusinesByName(cusine_name,callback)
    {
        return db.query("select c.*,d.* from cusine_tbl c,dish_tbl d where d.fk_cusine_id=c.cusine_id and c.cusine_name=?",[cusine_name],callback);
    },
    addCusine(item,callback)
    {
        console.log(item);
        return db.query("insert into cusine_tbl (cusine_name) values (?)",[item.cusine_name],callback);
    },
    updateCusine(item,callback)
    {
        return db.query("update cusine_tbl set cusine_name=? where cusine_id=?",[item.cusine_name,item.cusine_id],callback);
    },
    deleteAll(item,callback)
    {
        console.log(item);
        var delarr = [];  
        for (i = 0; i < item.length; i++) {  
            delarr[i] = item[i].cusine_id;  
        }  
        db.query("delete from dish_tbl where fk_cusine_id in (?)",[delarr]);
        return db.query("delete from cusine_tbl where cusine_id in (?)", [delarr], callback);  

    }

};
module.exports=cusine;