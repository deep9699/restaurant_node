var db=require('../restaurant');
var cusine={
    getCusines:function(callback)
    {
        return db.query("select * from cusine_tbl",callback);
    },
    getCusinesByName(cusine_name,callback)
    {
        return db.query("select c.*,d.* from cusine_tbl c,dish_tbl d where d.fk_cusine_id=c.cusine_id and c.cusine_name=?",[cusine_name],callback);
    },
    addBill(item,callback)
    {
        return db.query("INSERT into bill_tbl (amount,date,user_id) VALUES(?,?,?)",[item.amount,item.date,item.use_id],callback);
    }
};
module.exports=cusine;