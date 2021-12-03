import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  order : any;
  productList: any[] = [];
  client : any;

  displayedColumns: string[] = ['name','desc', 'price' ];
  public dataSource = new MatTableDataSource<any>();

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.order = JSON.parse( sessionStorage.order );
    this.client = JSON.parse( sessionStorage.Client );
    console.log(this.order);
    console.log(this.client);
  }

  onBack() {
    this.location.back();
  }

}
