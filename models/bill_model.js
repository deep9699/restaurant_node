var db=require('../restaurant');
var bill={
    addBill(item,callback)
    {
        var today = new Date();
        return db.query("INSERT into bill_tbl (amount,user_id,date) VALUES(?,?,?)",[item.amount,item.user_id,today],callback);
    },
    getBill(callback)
    {
        return db.query("select * from bill_tbl",callback);
    },
    getAutovalue(callback)
    {
        return db.query("SELECT LAST_INSERT_ID()",callback);
    },
    insertBill(item,callback)
    {
        return db.query("INSERT into bill_tbl (amount,user_id,date) VALUES(?,?,?)",[item.amount,item.user_id,today],callback);
    },
    max_bill(callback)
    {
       return db.query("SELECT d.dish_name, COUNT(*) FROM bill_details bd INNER JOIN dish_tbl d ON bd.fk_dish_id = d.dish_id GROUP BY d.dish_name ORDER BY COUNT(*) DESC LIMIT 2",callback);
    }

};
module.exports=bill;