var db=require('../restaurant');
var order={
    gePastOrder(id,callback)
    {
        return db.query("select * from bill_tbl where user_id=?",[id],callback);
    },
    getPastOrderDetails(id,callback)
    {
        return db.query("select bd.*,d.* from bill_details bd,dish_tbl d where bd.fk_dish_id=d.dish_id and bd.fk_bill_id=?",[id],callback);
    }
  
};
module.exports=order;