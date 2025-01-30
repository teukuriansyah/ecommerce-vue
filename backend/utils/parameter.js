export function parameter(id, amount) {
  let parameter = {
    "transaction_details": {
        "order_id": id,
        "gross_amount": amount 
    }, 
    "credit_card":{
        "secure" : true
    }
  };
  return parameter 
}