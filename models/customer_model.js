var db=require('../restaurant');
var customer={
    getAllCustomer(callback){
        return db.query("select * from customer_tbl",callback);
    },
    getCustomerByLogin(item,callback){
        return db.query("select * from customer_tbl where email_id=? and password=?",[item.email_id,item.password],callback);
    }
}
module.exports=customer;