import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
 
})
export class ProductListComponent {
  pageTitle: string = "Product List";
  products: any[] = [
    {
      "productId":2,
      "productName": "iPhone x ",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "iPhone X de 64gb ",
      "price": 999,
      "statRating": 4.2,
      "imageUrl": "assets/images/iPhoneX.png"
    },
    {
      "productId":8,
      "productName": "iPhone XS",
      "productCode": "GDN-0089",
      "releaseDate": "March 17, 2019",
      "description": "iPhone XS de 64gb ",
      "price": 1099,
      "statRating": 4.2,
      "imageUrl": "assets/images/iPhoneX.png"
    }
  ];
}