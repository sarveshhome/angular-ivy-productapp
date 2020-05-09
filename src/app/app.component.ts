import { Component, VERSION, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  name = 'Product APP' // + VERSION.major;
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
                "productName": "Brown eggs",
                "productCode": "Pro-1",
                "releaseDate": "March 31 2020",                
                "description": "Raw organic brown eggs in a basket",
                "price": 30,
                "starRating": 4,
                "imageUrl": "assets/images/1.jpg"
                },
			          {
                "productId": 2,
                "productName": "Sweet fresh stawberry",
                "productCode": "Pro-2",
                "releaseDate": "March 21 2020",                
                "description": "Sweet fresh stawberry on the wooden table",
                "price": 29.45,
                "starRating": 4,
                "imageUrl": "assets/images/2.jpg"
                },
				        {
                "productId": 3,
                "productName": "Asparagus",
                "productCode": "Pro-3",
                "releaseDate": "March 31 2020",                
                "description": "Asparagus with ham on the wooden table",
                "price": 18.95,
                "starRating": 3,
                "imageUrl": "assets/images/3.jpg"
                },
			          {
                "productId": 4,
                "productName": "Green smoothie",
                "productCode": "Pro-4",
                "releaseDate": "March 23 2020",                
                "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
                "price": 17.68,
                "starRating": 4,
                "imageUrl": "assets/images/4.jpg"
                }				
      ];      
  }
}
