import { Component } from '@angular/core';

export interface orders {
  ProductName: string;
  OrderId: number;
  TotalPrice: number;
  UserId: number;
  Quantity: number;
}

const data: orders[] = [
  {OrderId: 1, ProductName: 'Hydrogen', TotalPrice: 1, Quantity: 1,UserId: 1},
  {OrderId: 2, ProductName: 'Helium', TotalPrice: 4, Quantity: 2,UserId: 1},
  {OrderId: 3, ProductName: 'Lithium', TotalPrice: 6, Quantity: 3,UserId: 1},
  {OrderId: 4, ProductName: 'Beryllium', TotalPrice: 9, Quantity: 4,UserId: 1},

];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  displayedColumns: string[] = ['OrderId', 'ProductName', 'TotalPrice', 'UserId','Quantity'];
  dataSource = data;
}
