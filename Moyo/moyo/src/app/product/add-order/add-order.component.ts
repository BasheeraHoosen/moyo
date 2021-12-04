import { Router } from '@angular/router';
import { LoginService } from './../../shared/login.service';
import { Order, OrderLine } from './../../model/order.model';
import { OrderService } from './../../shared/order.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

export class RequestItem {
  itemID: number = 0;
  name: string = '';
  description: string = '';
  price: number = 0;
}

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private service: OrderService,
    private security: LoginService,
    private router : Router,
  ) {}

  showSpinner: boolean = false;

  ngOnInit(): void {
    this.getProducts();
  }

  order: Order = {
    OrderID: 0,
    ClientID: 0,
    OrderStatusID: 1,
    OrderDate: null,
    Total: 0,
  };

  orderline: OrderLine = {
    OrderLineID: 0,
    OrderID: 0,
    ProductID: 0,
  };

  productList: any[] = [];
  requestItemList: RequestItem[] = [];
  requestDescription: string = '';
  count = 0;
  id = 1;
  total: number = 0;
  requestItem!: RequestItem;
  displayedColumns: string[] = ['name', 'description', 'price', 'delete'];

  refresh() {
    this.requestItemList = this.getItems();
    this.total = this.getTotal();
  }

  getProducts() {
    this.service.ReadProducts().subscribe((result) => {
      this.productList = result as any[];
    }, (error: HttpErrorResponse) => {
      this.toastr.error('The system cannot establish a connection with the database!');
  });
  }

  getItems() {
    let items = JSON.parse(localStorage.getItem('items') || '{}');
    return items;
  }

  getTotal() {
    let total = JSON.parse(localStorage.getItem('Total') || '{}');
    return total;
  }

  onAdd(obj: any) {
    let request = new RequestItem();
    request.itemID = obj.productID;
    request.name = obj.productName;
    request.description = obj.productDesc;
    request.price = obj.price.amount;

    if (this.count == 0) {
      this.count++;
    } else {
      this.requestItemList = JSON.parse(localStorage.getItem('items') || '{}');
    }

    this.requestItemList = this.requestItemList || [];
    this.requestItemList.push(request);

    localStorage.setItem('items', JSON.stringify(this.requestItemList));
    this.id++;

    this.total = this.total + request.price;
    localStorage.setItem('Total', JSON.stringify(this.total));

    this.toastr.success('Product added');
    this.refresh();
  }

  onDelete(obj: any) {
    let items = this.requestItemList;
    const index: number = items.lastIndexOf(obj);
    if (index !== -1) {
      items.splice(index, 1);
      this.total -= obj.price;
      localStorage.setItem('Total', JSON.stringify(this.total));
    }
    localStorage.setItem('items', JSON.stringify(items));

    this.toastr.error('Item Removed');
    this.refresh();
  }

  onRequest() {
    this.order.ClientID = this.security.Client.clientID;
    this.order.Total = this.total;
    this.order.OrderDate = new Date();

    this.service.PostOrder(this.order).subscribe((result) => {
      this.requestItemList.forEach((element) => {
        this.orderline.OrderID = result as number;
        this.orderline.ProductID = element.itemID;

        this.service.PostOrderLine(this.orderline).subscribe(() => {
          this.toastr.success('Order Processed');
          this.router.navigateByUrl('orders');
          this.total =0;
          localStorage.clear();
        });
      });
    });
  }
}
