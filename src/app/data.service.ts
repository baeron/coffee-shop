import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    const  users =  [
      {
        id:  1,
        role: 'admin',
        userName: 'admin',
        firstName: 'admin',
        lastName: 'admin',
        email: 'admin@admin.com',
        password: 'admin'
      },
      {
        id:  2,
        role: 'employee',
        userName: 'employee',
        firstName: 'employee',
        lastName: 'employee',
        email: 'employee@employee.com',
        password: 'employee'
      },
      {
        id:  3,
        role: 'client',
        userName: 'client',
        firstName: 'Client',
        lastName: 'Client',
        email: 'client@client.com',
        password: 'client'
      }
     ];
    const products = [
      {
        categoryName: 'tea',
        productName: 'tea1',
        productPrice: 1,
        productImg: '../assets/products/categories/tea.jpg'
      },
      {
        categoryName: 'coffee',
        productName: 'coffee1',
        productPrice: 2,
        productImg: '../assets/products/categories/cofee.jpg'
      }
    ];

    const coffeShop = {
      users: users,
      products: products
    };

   return {coffeShop};

  }
}
