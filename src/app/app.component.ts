import { Component, VERSION, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  name = 'Product APP' // + VERSION.major;
  imageWith = 50;
  imageMargin = 5;
  products : IProduct[]=[];
  constructor(){
    console.log('C');
  }
  ngOnInit(){
    console.log('I');
    this.products = this.getProducts();
    console.log(this.products);

  }


  getProducts(): IProduct[]{
      return [
              {
                "productId": 1,
                "productName": "WROGN",
                "productCode": "Pro-1",
                "releaseDate": "March 31 2020",                
                "description": "Men Grey Melange Self Design Round Neck T-shirt",
                "price": 300,
                "starRating": 4,
                "imageUrl":  "../assets/images/T-S-1.jpg",
                "imageBUrl": "assets/images/T-B-1.jpg"
                },
			          {
                "productId": 2,
                "productName": "Puma",
                "productCode": "Pro-2",
                "releaseDate": "March 21 2020",                
                "description": "Men Black Printed Round Neck T-shirt",
                "price": 29.45,
                "starRating": 4,
                "imageUrl":  "assets/images/T-S-2.jpg.jpg",
                "imageBUrl": "assets/images/T-B-2.jpg"                
                },
				        {
                "productId": 3,
                "productName": "ADIDAS Originals",
                "productCode": "Pro-3",
                "releaseDate": "March 31 2020",                
                "description": "White Printed Kaval Tee T-Shirt",
                "price": 2000,
                "starRating": 3,
                "imageUrl":  "assets/images/T-S-3.jpg",
                "imageBUrl": "assets/images/T-B-3.jpg"
                },
			          {
                "productId": 4,
                "productName": "HRX by Hrithik Roshan",
                "productCode": "Pro-4",
                "releaseDate": "March 23 2020",                
                "description": "Men Yellow Printed Round Neck T-Shirt",
                "price": 17.68,
                "starRating": 4,
                "imageUrl":  "assets/images/T-S-4.jpg",
                "imageBUrl": "assets/images/T-B-4.jpg"
                }				
      ];      
  }
}
