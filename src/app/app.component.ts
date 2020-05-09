import { Component, VERSION } from '@angular/core';
import { IProduct } from './IProduct';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Product APP' // + VERSION.major;
  

  getProducts(): IProduct[]{
      return 
            [
              {
                "productId": 1,
                "productName": "Brown eggs",
                "productCode": "Pro-1",
                "releaseDate": "March 31 2020",
                "price": 30,
                "description": "Raw organic brown eggs in a basket",
                "starRating": 4,
                "imageUrl": "assets/images/1.jpg"
                },
			{
                "productId": 2,
                "productName": "Sweet fresh stawberry",
                "productCode": "Pro-2",
                "releaseDate": "March 21 2020",
                "price": 29.45,
                "description": "Sweet fresh stawberry on the wooden table",
                "starRating": 4,
                "imageUrl": "assets/images/2.jpg"
                },
				{
                "productId": 3,
                "productName": "Asparagus",
                "productCode": "Pro-3",
                "releaseDate": "March 31 2020",
                "price": 18.95,
                "description": "Asparagus with ham on the wooden table",
                "starRating": 3,
                "imageUrl": "assets/images/3.jpg"
                },
			{
                "productId": 4,
                "productName": "Green smoothie",
                "productCode": "Pro-4",
                "releaseDate": "March 23 2020",
                "price": 17.68,
                "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
                "starRating": 4,
                "imageUrl": "assets/images/4.jpg"
                }
				
      ]
                  
      ;
      
  }

}
