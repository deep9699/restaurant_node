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
    }
};
module.exports=bill;