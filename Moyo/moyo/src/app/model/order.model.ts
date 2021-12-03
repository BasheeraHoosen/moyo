export class Order {
  OrderID : number =0;
  ClientID : number =0;
  OrderStatusID : number =0;
  OrderDate : any;
  Total: number = 0;
}

export class OrderLine {
  OrderID : number =0;
  OrderLineID : number =0;
  ProductID : number =0;
}
