import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../shared/login.service';
import { OrderService } from './../../shared/order.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-read-order',
  templateUrl: './read-order.component.html',
  styleUrls: ['./read-order.component.scss']
})

export class ReadOrderComponent implements OnInit {

  client : any;
  constructor(
    private router: Router,
    private service: OrderService,
    private security: LoginService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getOrders();
    this.client = this.security.Client;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  showSpinner = true;
  displayedColumns: string[] = ['OrderNo','Name', 'Surname','Date', 'Total','Status', 'View' ];
  public dataSource = new MatTableDataSource<any>();

  noData = this.dataSource.connect().pipe(map(data => data.length === 0));

  applyFilter(filterValue: any) {
    filterValue = filterValue.target.value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onView(obj:any){
    sessionStorage.order = JSON.stringify(obj);
    this.router.navigateByUrl('order');
  }

  getOrders(){
    this.service.ReadOrders(this.security.User.userID).subscribe((result) => {
      this.dataSource.data = result as any[];
    }, (error: HttpErrorResponse) => {
       this.toastr.error('The system cannot establish a connection with the database!');
   })
  }

}
