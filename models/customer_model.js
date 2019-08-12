var db=require('../restaurant');
var customer={
    getAllCustomer(callback){
        return db.query("select * from customer_tbl",callback);
    },
    getCustomerByLogin(item,callback){
        return db.query("select * from customer_tbl where email_id=? and password=?",[item.email_id,item.password],callback);
    },
    insertCustomer(item,callback){
        return db.query("insert into customer_tbl values(?,?,?,?,?,?,?,?)",[item.email_id,item.password,item.name,item.age,item.mobile_no,item.gender,item.city,item.address],callback);
    },
  
}
module.exports=customer;